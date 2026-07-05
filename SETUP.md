# Setup & Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- MongoDB Atlas account (free tier available)
- Gmail account (for email notifications)

### 1. Clone & Install

```bash
git clone https://github.com/youngricky017-debug/Fodc2
cd Fodc2
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/wedding?retryWrites=true&w=majority

# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@wedding.com

# Admin Dashboard
NEXT_PUBLIC_ADMIN_PASSWORD=your-secure-password

# API
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Create a database user with username & password
5. Get connection string and replace in `.env.local`

### 4. Gmail App Password

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [Google Account Security](https://myaccount.google.com/apppasswords)
3. Create an "App Password" for Mail
4. Use this 16-character password as `EMAIL_PASS`

### 5. Run Development Server

```bash
npm run dev
```

Visit:
- **Main Site**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin

### 6. Build for Production

```bash
npm run build
npm start
```

---

## 📦 Deployment to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Deploy wedding site"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Add environment variables (same as `.env.local`)
5. Click "Deploy"

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Follow DNS configuration instructions

---

## 🔧 Features Configuration

### Email Notifications
- Guests receive confirmation emails after RSVP
- Admin receives notification for each submission
- Customize email templates in `lib/email.ts`

### Admin Dashboard
- URL: `/admin`
- Password protected (set in env variables)
- View all RSVPs with details
- Export guest list as CSV
- Real-time updates

### RSVP Storage
- All submissions stored in MongoDB
- Persistent storage across restarts
- Full guest history maintained

---

## 📊 Usage

### For Guests
1. Visit the main wedding website
2. Fill out RSVP form (name, phone, email optional, message optional)
3. Receive confirmation email
4. See yourself in guest list

### For Admin
1. Visit `/admin`
2. Enter admin password
3. View all confirmations with timestamps
4. Click on entry to see full message
5. Export guest list to CSV

---

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify connection string is correct
- Check IP whitelist in MongoDB Atlas settings
- Ensure username/password has no special characters (or properly URL encoded)

### Email Not Sending
- Verify Gmail app password (16 characters)
- Check spam folder
- Ensure EMAIL_USER and EMAIL_PASS are correct
- For Gmail, use [app-specific passwords](https://myaccount.google.com/apppasswords)

### Admin Dashboard Not Loading
- Verify `NEXT_PUBLIC_ADMIN_PASSWORD` env variable is set
- Check browser console for errors
- Ensure `/api/rsvp` endpoint is accessible

### Database Errors
- Check MongoDB Atlas cluster is running
- Verify database name is "wedding"
- Check collection "rsvps" exists

---

## 📱 Mobile Optimization

The site is fully responsive for:
- iOS Safari
- Android Chrome
- All modern browsers

---

## 🔒 Security

- Admin dashboard password protected
- Environment variables never exposed
- Email addresses encrypted
- CORS configured for API

---

## 📈 Analytics

Monitor your wedding site:
- Total RSVPs received
- Confirmation timestamp
- Guest attendance tracking
- Export data for further analysis

---

## 🎉 Success!

Your wedding website is now live! Share the link with your guests and watch the RSVPs roll in! 💍

For support, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Vercel Documentation](https://vercel.com/docs)
