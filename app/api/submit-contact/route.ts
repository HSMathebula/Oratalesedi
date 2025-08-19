import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Zod schema for contact form validation
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
})

// Email configuration for Brevo SMTP
const emailConfig = {
  host: process.env.SMTP_SERVER || 'smtp-relay.brevo.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_LOGIN,
    pass: process.env.SMTP_PASSWORD,
  },
}

// Create email transporter
const transporter = nodemailer.createTransport(emailConfig)

// Email template for contact form submissions
const createContactEmailTemplate = (formData: any) => {
  const serviceTypes = {
    mining: "Mining Services",
    construction: "Construction & Civil Engineering",
    renewable: "Renewable Energy",
    industrial: "Industrial Cleaning",
    multiple: "Multiple Services",
    consultation: "General Consultation"
  }

  return {
    subject: `Contact Request: ${serviceTypes[formData.service as keyof typeof serviceTypes] || 'General Inquiry'} from ${formData.name}${formData.company ? ' (' + formData.company + ')' : ''}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <!-- Header with logo -->
        <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 30px; text-align: center;">
          <img src="https://oratalesedi.co.za/placeholder-logo.png" alt="Oratalesedi Logo" style="height: 60px; margin-bottom: 10px;" />
          <h1 style="margin: 0; font-size: 28px;">New Contact Message</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Oratalesedi Website Contact Form</p>
        </div>
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Service Interest:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${serviceTypes[formData.service as keyof typeof serviceTypes] || 'Not specified'}</td>
            </tr>
          </table>

          <h2 style="color: #1e40af; margin-bottom: 20px;">Message</h2>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #374151; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-weight: bold;">📧 Reply to: ${formData.email}</p>
            ${formData.phone ? `<p style="margin: 5px 0 0 0; color: #1e40af;">📞 Call: ${formData.phone}</p>` : ''}
          </div>
        </div>

        <!-- Footer with logo -->
        <div style="background: #1f2937; color: white; padding: 20px; text-align: center;">
          <img src="https://oratalesedi.co.za/placeholder-logo.png" alt="Oratalesedi Logo" style="height: 40px; margin-bottom: 10px;" />
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">
            This email was sent from the Oratalesedi website contact form.<br>
            Submitted on ${new Date().toLocaleString('en-ZA', { 
              timeZone: 'Africa/Johannesburg',
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>
    `
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    // Zod validation
    const result = contactSchema.safeParse(formData)
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid input',
          errors: result.error.errors,
        },
        { status: 400 }
      )
    }
    const validData = result.data

    // Check if email configuration is set up
    if (!process.env.SMTP_LOGIN || !process.env.SMTP_PASSWORD) {
      console.error('Email configuration missing. Please set up SMTP_LOGIN and SMTP_PASSWORD environment variables.')
      return NextResponse.json(
        {
          success: false,
          message: 'Email service not configured. Please contact support.'
        },
        { status: 500 }
      )
    }

    // Create email content
    const emailContent = createContactEmailTemplate(validData)

    // Send email
    const mailOptions = {
      from: 'info@oratalesedi.co.za', // Use your verified sender email
      to: 'info@oratalesedi.co.za',   // All form submissions go to this address
      subject: emailContent.subject,
      html: emailContent.html,
      replyTo: validData.email
    }

    await transporter.sendMail(mailOptions)

    console.log('Contact form email sent successfully:', validData.email)

    return NextResponse.json({
      success: true,
      message: 'Contact message submitted successfully. We will get back to you within 24 hours.'
    })

  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit contact message. Please try again or contact us directly.'
      },
      { status: 500 }
    )
  }
}