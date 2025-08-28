module.exports = {
  apps: [
    {
      name: "oratalesedi-app",
  // use npm to run the start script so servers without pnpm can run PM2 easily
  script: "npm",
  args: "run start",
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      time: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        // Fill these with your Brevo / SMTP credentials in production
        SMTP_SERVER: "smtp-relay.brevo.com",
        SMTP_PORT: "587",
        SMTP_LOGIN: "your_smtp_login",
        SMTP_PASSWORD: "your_smtp_password",
        // Optional: override or add any other environment vars you need
        NEXT_PUBLIC_SITE_URL: "https://your-domain.example",
      },
    },
  ],
};
