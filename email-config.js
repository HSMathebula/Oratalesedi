// Brevo SMTP email configuration
const emailConfig = {
  host: process.env.SMTP_SERVER || 'smtp-relay.brevo.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_LOGIN,
    pass: process.env.SMTP_PASSWORD,
  },
};

module.exports = emailConfig;
