# Email Setup Guide for Oratalesedi Website

## Overview
Your website now has fully functional contact and quote forms that can send emails. This guide will help you set up the email functionality.

## What's Been Implemented

✅ **Quote Form** (`/quote`) - 3-step process with email submission
✅ **Contact Form** (`/contact`) - Simple contact form with email submission  
✅ **Email Templates** - Professional HTML emails with company branding
✅ **Form Validation** - Client and server-side validation
✅ **Error Handling** - Proper error messages and fallbacks

## Setup Steps

### 1. Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=info@oratalesedi.co.za
```

### 2. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this password in `EMAIL_PASS`

### 3. Alternative Email Services

#### Option A: SendGrid (Professional)
```env
SENDGRID_API_KEY=your-sendgrid-api-key
EMAIL_FROM=noreply@oratalesedi.co.za
EMAIL_TO=info@oratalesedi.co.za
```

#### Option B: Resend (Simple)
```env
RESEND_API_KEY=your-resend-api-key
EMAIL_FROM=noreply@oratalesedi.co.za
EMAIL_TO=info@oratalesedi.co.za
```

### 4. Test the Setup

1. Start your development server: `npm run dev`
2. Go to `/contact` and submit a test message
3. Check your email inbox for the test message
4. Check the console for any error messages

## Email Templates

The system includes professional HTML email templates with:

- **Company branding** with Oratalesedi colors
- **Structured information** in tables
- **Contact details** prominently displayed
- **South African timezone** formatting
- **Mobile-responsive** design

## Form Features

### Quote Form (`/quote`)
- ✅ 3-step wizard process
- ✅ Service type selection
- ✅ Project details collection
- ✅ Company information
- ✅ Review and confirmation
- ✅ Email submission

### Contact Form (`/contact`)
- ✅ Simple contact form
- ✅ Service interest selection
- ✅ Message details
- ✅ Email submission

## Troubleshooting

### Common Issues

1. **"Email service not configured"**
   - Check your `.env.local` file exists
   - Verify all email variables are set

2. **"Authentication failed"**
   - For Gmail: Use App Password, not regular password
   - Check 2FA is enabled

3. **"Connection timeout"**
   - Check your internet connection
   - Verify SMTP settings

### Testing

Test the forms with these scenarios:
- ✅ Valid submission
- ✅ Missing required fields
- ✅ Invalid email format
- ✅ Network errors

## Production Deployment

### Vercel (Recommended)
1. Add environment variables in Vercel dashboard
2. Deploy your application
3. Test forms in production

### Other Platforms
- **Netlify**: Add environment variables in site settings
- **Railway**: Add environment variables in project settings
- **DigitalOcean**: Add to your deployment configuration

## Security Notes

- ✅ Environment variables are secure
- ✅ No sensitive data in client-side code
- ✅ Server-side validation implemented
- ✅ Rate limiting recommended for production

## Support

If you encounter issues:
1. Check the browser console for errors
2. Check the server logs for detailed error messages
3. Verify your email configuration
4. Test with a different email service if needed

## Next Steps

Once email is working:
1. ✅ Test both forms thoroughly
2. ✅ Customize email templates if needed
3. ✅ Set up email notifications for your team
4. ✅ Consider adding spam protection (reCAPTCHA)
5. ✅ Monitor email delivery rates

Your forms are now ready for production use! 🎉 