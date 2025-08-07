import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Zod schema for quote form validation
const quoteSchema = z.object({
  projectType: z.string().min(1, 'Project type is required'),
  company: z.string().min(1, 'Company is required'),
  contactPerson: z.string().min(1, 'Contact person is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  location: z.string().optional(),
  projectScope: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  urgency: z.string().optional(),
  description: z.string().optional(),
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

// Email template for quote requests
const createQuoteEmailTemplate = (formData: any) => {
  const serviceTypes = {
    mining: "Mining Services",
    construction: "Construction",
    renewable: "Renewable Energy"
  }

  return {
    subject: `New Quote Request - ${serviceTypes[formData.projectType as keyof typeof serviceTypes] || 'General Service'}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">New Quote Request</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Oratalesedi Website Form Submission</p>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Project Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Service Type:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${serviceTypes[formData.projectType as keyof typeof serviceTypes] || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Project Scope:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.projectScope || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Timeline:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.timeline || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Budget Range:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Urgency:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.urgency || 'Standard'}</td>
            </tr>
          </table>

          <h2 style="color: #1e40af; margin-bottom: 20px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Company:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.company}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Contact Person:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.contactPerson}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Location:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${formData.location || 'Not specified'}</td>
            </tr>
          </table>

          ${formData.description ? `
          <h2 style="color: #1e40af; margin-bottom: 20px;">Project Description</h2>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #374151; line-height: 1.6;">${formData.description}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e40af; font-weight: bold;">📧 Reply to: ${formData.email}</p>
            <p style="margin: 5px 0 0 0; color: #1e40af;">📞 Call: ${formData.phone}</p>
          </div>
        </div>

        <div style="background: #1f2937; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">
            This email was sent from the Oratalesedi website quote form.<br>
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
    const result = quoteSchema.safeParse(formData)
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
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing. Please set up EMAIL_USER and EMAIL_PASS environment variables.')
      return NextResponse.json(
        {
          success: false,
          message: 'Email service not configured. Please contact support.'
        },
        { status: 500 }
      )
    }

    // Create email content
    const emailContent = createQuoteEmailTemplate(validData)

    // Send email
    const mailOptions = {
      from: process.env.SMTP_LOGIN,
      to: 'info@oratalesedi.co.za',
      subject: emailContent.subject,
      html: emailContent.html,
      replyTo: validData.email
    }

    await transporter.sendMail(mailOptions)

    console.log('Quote request email sent successfully:', validData.email)

    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully. We will contact you within 24 hours.'
    })

  } catch (error) {
    console.error('Error submitting quote:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit quote request. Please try again or contact us directly.'
      },
      { status: 500 }
    )
  }
}