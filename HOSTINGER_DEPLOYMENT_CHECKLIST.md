# Hostinger Deployment Checklist ✅

Use this checklist to ensure your Oratalesedi website is ready for deployment.

## Pre-Deployment Checklist

### Code & Configuration
- [x] Syntax errors fixed in `app/layout.tsx`
- [x] `env.example` file created with all required variables
- [x] `.gitignore` configured correctly
- [x] `next.config.mjs` properly configured
- [x] `package.json` scripts configured
- [x] Start script (`scripts/start.js`) ready for Hostinger

### Environment Variables Required
Create `.env.local` on your server with:
- [ ] `SMTP_SERVER` - Email server (smtp-relay.brevo.com)
- [ ] `SMTP_PORT` - Email port (587)
- [ ] `SMTP_LOGIN` - Your SMTP login email
- [ ] `SMTP_PASSWORD` - Your SMTP password
- [ ] `NODE_ENV=production` - Set to production

### Assets & Files
- [x] All images present in `public/images/`
- [x] Logo files exist (`oratalesedi-logo.png`, `oratalesedi-header-logo.png`)
- [x] Company brochure present (`public/company-brochure.pdf.pdf`)
- [x] Favicon configured (`oratalesedi-logo-icon.png`)
- [x] All component files present

### Features to Test After Deployment
- [ ] Homepage loads correctly
- [ ] Navigation works (all links)
- [ ] Contact form submits and sends email
- [ ] Quote form (3-step) works and sends email
- [ ] Dark mode toggle functions
- [ ] Portfolio images display
- [ ] Services pages load
- [ ] About page displays correctly
- [ ] Company brochure downloads
- [ ] Mobile responsiveness
- [ ] SSL/HTTPS active

## Deployment Steps Summary

1. **Upload Files**
   - Upload all project files to `public_html` via Git or FTP
   - Ensure `node_modules` is NOT uploaded (it's in .gitignore)

2. **Install Dependencies**
   ```bash
   cd ~/public_html
   npm install
   ```

3. **Set Environment Variables**
   - Add all required env vars in Hostinger hPanel or create `.env.local`

4. **Build Project**
   ```bash
   npm run build
   ```

5. **Start Application**
   ```bash
   # Option 1: Using PM2 (recommended)
   pm2 start npm --name "oratalesedi" -- start
   pm2 save
   
   # Option 2: Direct start
   npm start
   ```

6. **Configure Domain**
   - Point domain to server
   - Enable SSL certificate
   - Force HTTPS redirect

## Post-Deployment Verification

### Functional Tests
- [ ] Visit homepage: `https://yourdomain.com`
- [ ] Test contact form: `/contact`
- [ ] Test quote form: `/quote`
- [ ] Check email reception at info@oratalesedi.co.za
- [ ] Verify all images load
- [ ] Test navigation menu
- [ ] Check footer links
- [ ] Test dark mode toggle
- [ ] View on mobile device
- [ ] Check page load speed

### Technical Checks
- [ ] Check application logs for errors
  ```bash
  pm2 logs oratalesedi
  ```
- [ ] Verify SSL certificate is valid
- [ ] Test HTTPS redirect
- [ ] Check console for JavaScript errors (F12)
- [ ] Verify all API routes work (`/api/submit-contact`, `/api/submit-quote`)

### Performance
- [ ] Run Lighthouse audit (Chrome DevTools)
- [ ] Check page load times
- [ ] Verify image optimization working
- [ ] Test on slow 3G connection

## Common Issues & Solutions

### Issue: Build Fails
```bash
# Solution: Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Email Not Sending
- Check SMTP credentials in environment variables
- Verify email service (Brevo) is configured correctly
- Check application logs for error details
- Test SMTP connection separately

### Issue: Images Not Loading
- Verify all files uploaded correctly
- Check file permissions: `chmod -R 755 public/`
- Ensure image paths are correct (case-sensitive on Linux)

### Issue: Application Won't Start
- Check Node.js version (should be 18.x or higher)
- Verify all dependencies installed
- Check for port conflicts
- Review error logs

### Issue: 404 Errors
- Ensure Next.js build completed successfully
- Verify `.next` folder exists
- Check application is running
- Verify reverse proxy configuration (if applicable)

## Files Created for Deployment

1. **env.example** - Template for environment variables
2. **DEPLOYMENT_GUIDE.md** - Comprehensive deployment instructions
3. **HOSTINGER_DEPLOYMENT_CHECKLIST.md** (this file) - Quick checklist
4. **scripts/start.js** - Custom start script for Hostinger

## Key Project Configuration

### next.config.mjs
```javascript
{
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }
}
```

### package.json scripts
```json
{
  "build": "next build",
  "dev": "next dev",
  "lint": "next lint",
  "start": "node ./scripts/start.js"
}
```

### Email Configuration
- Uses Brevo SMTP relay (recommended)
- Fallback to Gmail SMTP available
- Both contact and quote forms configured
- Professional HTML email templates included

## Security Checklist
- [ ] Environment variables not committed to Git
- [ ] `.env.local` file is in `.gitignore`
- [ ] HTTPS/SSL enabled
- [ ] Strong SMTP passwords used
- [ ] Regular security updates planned
- [ ] Rate limiting considered for API routes

## Maintenance Plan
- [ ] Regular backups configured
- [ ] Git repository kept updated
- [ ] Monitoring set up (PM2/logs)
- [ ] Update schedule established
- [ ] Contact info documented

## Resources

- **Full Deployment Guide**: See `DEPLOYMENT_GUIDE.md`
- **Email Setup**: See `EMAIL_SETUP.md`
- **Environment Variables**: See `env.example`
- **Hostinger Support**: https://support.hostinger.com
- **Next.js Docs**: https://nextjs.org/docs

## Support Contact

**Oratalesedi Trading & Projects**
- Website: https://oratalesedi.co.za
- Email: info@oratalesedi.co.za
- Phone: +27 13 656 0747
- Address: Business Park, 8 Corridor Cres, Ben Fleur, eMalahleni, 1049, Mpumalanga

---

## Final Check Before Going Live

✅ All environment variables set
✅ Build completes without errors
✅ Application starts successfully
✅ Contact form sends emails
✅ Quote form sends emails
✅ All pages accessible
✅ SSL certificate active
✅ Domain configured correctly
✅ Monitoring/logging active
✅ Backup strategy in place

**Once all items are checked, your website is ready to go live! 🚀**

Last Updated: September 30, 2025
