# Hostinger Deployment Guide for Oratalesedi Website

This guide will help you deploy your Next.js website to Hostinger successfully.

## Prerequisites

- ✅ Hostinger VPS or Premium hosting plan with Node.js support
- ✅ Domain name configured
- ✅ SSH access to your server
- ✅ Email service configured (Brevo/Gmail)

## Deployment Steps

### 1. Prepare Your Environment Variables

Create a `.env.local` file on your server with the following variables:

```bash
# Copy from env.example and fill in your values
SMTP_SERVER=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_LOGIN=your-actual-email@example.com
SMTP_PASSWORD=your-actual-password
NODE_ENV=production
```

### 2. Upload Your Project

#### Option A: Using Git (Recommended)

```bash
# SSH into your Hostinger server
ssh your-username@your-server-ip

# Navigate to your web directory
cd ~/public_html

# Clone your repository
git clone https://github.com/your-username/oratalesedi-website.git .

# Or if already cloned, pull latest changes
git pull origin main
```

#### Option B: Using FTP/SFTP

1. Upload all project files to your `public_html` directory
2. Ensure all files are uploaded including:
   - `app/` directory
   - `components/` directory
   - `public/` directory
   - `package.json`
   - `next.config.mjs`
   - All configuration files

### 3. Install Dependencies

```bash
# SSH into your server
ssh your-username@your-server-ip

# Navigate to project directory
cd ~/public_html

# Install pnpm globally (if not installed)
npm install -g pnpm

# Install project dependencies
pnpm install

# Or use npm if pnpm is not available
npm install
```

### 4. Build the Project

```bash
# Build for production
npm run build

# This will create an optimized .next folder
```

### 5. Configure Environment Variables in Hostinger

**Via Hostinger Control Panel:**
1. Log into Hostinger hPanel
2. Go to Advanced → Environment Variables
3. Add each variable from your `.env.local` file:
   - `SMTP_SERVER`
   - `SMTP_PORT`
   - `SMTP_LOGIN`
   - `SMTP_PASSWORD`
   - `NODE_ENV=production`

### 6. Start the Application

#### Option A: Using PM2 (Recommended)

```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start npm --name "oratalesedi" -- start

# Save PM2 configuration
pm2 save

# Set PM2 to start on server reboot
pm2 startup
```

#### Option B: Using the start script

```bash
# The project includes a custom start script
npm start

# This will automatically detect Hostinger's PORT environment variable
```

### 7. Configure Hostinger Application Settings

1. **Go to hPanel → Website → Application**
2. Set Application Root: `/public_html`
3. Set Application Startup File: `scripts/start.js` or use PM2
4. Set Node.js version: 18.x or higher
5. Click "Save Changes"

### 8. Configure Domain and SSL

1. **Point your domain** to your Hostinger server
2. **Enable SSL certificate** in Hostinger hPanel
3. **Force HTTPS** redirect in your domain settings

### 9. Set Up Port Configuration

Hostinger provides a `PORT` environment variable. The project's `scripts/start.js` automatically detects this.

```bash
# Hostinger typically uses port 3000 or assigns dynamically
# The start script handles this automatically
```

### 10. Configure Reverse Proxy (if needed)

If using Apache/Nginx, configure reverse proxy:

**For Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ http://localhost:3000/$1 [P,L]
</IfModule>
```

**For Nginx:**
```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

## Verification Checklist

After deployment, verify:

- [ ] Website loads at your domain
- [ ] All images display correctly
- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] Quote form works (3-step process)
- [ ] Email notifications are received
- [ ] Dark mode toggle functions
- [ ] Portfolio images load
- [ ] Company brochure downloads
- [ ] Mobile responsiveness works
- [ ] SSL certificate is active (https://)

## Testing Your Deployment

1. **Test Homepage:**
   - Visit `https://yourdomain.com`
   - Check all sections load

2. **Test Contact Form:**
   - Go to `/contact`
   - Submit a test message
   - Verify email received at info@oratalesedi.co.za

3. **Test Quote Form:**
   - Go to `/quote`
   - Complete all 3 steps
   - Verify quote email received

4. **Check Console:**
   ```bash
   # View application logs
   pm2 logs oratalesedi
   
   # Or check Hostinger logs
   tail -f ~/logs/error.log
   ```

## Troubleshooting

### Issue: Build Fails

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Issue: Port Already in Use

```bash
# Check what's using the port
lsof -i :3000

# Kill the process
kill -9 <PID>

# Restart application
pm2 restart oratalesedi
```

### Issue: Email Not Sending

1. Verify environment variables are set correctly
2. Check SMTP credentials with email provider
3. Review application logs: `pm2 logs oratalesedi`
4. Test SMTP connection manually

### Issue: Images Not Loading

1. Verify all files in `public/images/` uploaded correctly
2. Check file permissions: `chmod -R 755 public/`
3. Verify image paths in code (case-sensitive)

### Issue: Application Crashes

```bash
# View error logs
pm2 logs oratalesedi --err

# Restart application
pm2 restart oratalesedi

# Rebuild and restart
npm run build
pm2 restart oratalesedi
```

## Performance Optimization

### 1. Enable Caching

The Next.js build already includes optimizations:
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Static generation where possible

### 2. CDN Configuration (Optional)

Consider using Cloudflare or similar CDN:
1. Sign up for Cloudflare
2. Point your domain to Cloudflare
3. Enable caching rules
4. Enable minification

### 3. Database (if needed in future)

If you add a database:
- Use Hostinger's MySQL database
- Store connection string in environment variables
- Use connection pooling

## Maintenance

### Regular Updates

```bash
# Pull latest code
git pull origin main

# Install new dependencies
npm install

# Rebuild
npm run build

# Restart
pm2 restart oratalesedi
```

### Backup Strategy

1. **Regular backups** via Hostinger hPanel
2. **Git repository** as source control backup
3. **Database backups** (if applicable)
4. **Environment variables** documentation

### Monitoring

```bash
# Check application status
pm2 status

# View logs
pm2 logs oratalesedi

# Monitor resources
pm2 monit
```

## Security Recommendations

1. ✅ Keep dependencies updated: `npm audit fix`
2. ✅ Use strong passwords for SMTP
3. ✅ Enable HTTPS/SSL
4. ✅ Keep `.env.local` secure (never commit to Git)
5. ✅ Regular security updates
6. ✅ Configure firewall rules
7. ✅ Implement rate limiting (consider adding to API routes)

## Support Resources

- **Hostinger Support:** https://support.hostinger.com
- **Next.js Documentation:** https://nextjs.org/docs
- **PM2 Documentation:** https://pm2.keymetrics.io/docs

## Quick Commands Reference

```bash
# Start application
pm2 start npm --name "oratalesedi" -- start

# Stop application
pm2 stop oratalesedi

# Restart application
pm2 restart oratalesedi

# View logs
pm2 logs oratalesedi

# Application status
pm2 status

# Save PM2 config
pm2 save

# Build project
npm run build

# Run in development (for testing)
npm run dev
```

## Contact Information

If you need assistance:
- Website: https://oratalesedi.co.za
- Email: info@oratalesedi.co.za
- Phone: +27 13 656 0747

---

**Your website is now ready for deployment! 🚀**

Follow these steps carefully, and your Oratalesedi website will be live on Hostinger successfully.
