# Mirabel & Godspower - Wedding Invite

A cinematic wedding invitation website for Mirabel and Godspower's special day on September 4, 2026.

## Features

- 🎬 **Cinematic Hero Section** - Animated title with Framer Motion
- ⏱️ **Live Countdown Timer** - Real-time countdown to the wedding
- 💕 **Love Story Timeline** - Our journey together
- 📸 **Photo Gallery** - Beautiful moments captured
- 📅 **Wedding Timeline** - Events schedule
- 📍 **Venue Information** - Location details
- ✅ **RSVP System** - Guest confirmations with backend integration
- 👥 **Guest List** - View confirmed guests
- ❓ **FAQ Section** - Common questions answered
- ✨ **Particle Animations** - Animated background effects

## Tech Stack

- **Framework**: Next.js 14.2.0
- **Styling**: CSS-in-JS + Tailwind CSS
- **Animations**: Framer Motion 11.0.0
- **UI**: React 18.2.0
- **Backend**: Next.js API Routes

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## Project Structure

```
app/
├── api/rsvp/          # RSVP backend endpoint
├── layout.tsx         # Root layout
└── page.tsx          # Main page

components/
├── Hero.tsx          # Hero section
├── Countdown.tsx     # Countdown timer
├── LoveStory.tsx     # Love story timeline
├── Gallery.tsx       # Photo gallery
├── Timeline.tsx      # Wedding timeline
├── Venue.tsx         # Venue details
├── RSVP.tsx          # RSVP form
├── GuestList.tsx     # Guest confirmations
├── FAQ.tsx           # Frequently asked questions
└── Particles.tsx     # Background particles

styles/
├── globals.css       # Global styles
├── tailwind.config.js
└── postcss.config.js
```

## Features Explained

### RSVP System
- Submit name, phone, and optional message
- Real-time validation
- Backend storage
- Live guest list updates

### Gallery
- Showcases 6 memorable moments
- Modal view for individual photos
- Smooth animations

### Timeline
- Three-event wedding schedule
- Visual timeline representation
- Location information

### Performance Optimizations
- Image compression enabled
- SWC minification
- Optimized metadata
- Browser caching

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- Firebase Hosting
- AWS Amplify
- Docker containers

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## Future Enhancements

- Database integration for RSVP storage
- Email notifications
- Image upload for gallery
- Multiple language support
- Live streaming integration

## Contact

For questions about the wedding, please contact the couple directly.

---

Made with ❤️ for Mirabel & Godspower
