# ODAA Medium Clinic Website

A professional full-stack website for ODAA Medium Clinic (Kilinika G/G Odaa) in Woliso Town, Ethiopia.

## Project Overview

- **Business:** ODAA Medium Clinic
- **Location:** Woliso Town, Southwest Shoa Zone, Oromia Region, Ethiopia
- **Owner:** Dr. Tadele Mulisa
- **Contact:** 0911350573 / 0113664663 / 0913852208

## Technology Stack

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Responsive Design (Mobile-first)
- Multi-language support (English, Amharic, Afan Oromo)

### Backend
- Node.js + Express.js
- JWT Authentication
- RESTful API

### Database
- MongoDB

### Hosting
- Frontend: Vercel/Netlify
- Backend: Railway/Heroku
- Database: MongoDB Atlas

## Project Structure

```
odaa-clinic-website/
├── frontend/
│   ├── index.html
│   ├── pages/
│   │   ├── services.html
│   │   ├── about.html
│   │   ├── appointments.html
│   │   ├── blog.html
│   │   ├── contact.html
│   │   └── gallery.html
│   ├── css/
│   │   ├── style.css
│   │   ├── responsive.css
│   │   └── admin.css
│   ├── js/
│   │   ├── main.js
│   │   ├── appointments.js
│   │   ├── language.js
│   │   ├── api.js
│   │   └── admin.js
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   └── admin/
│       └── dashboard.html
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── appointments.js
│   │   ├── services.js
│   │   ├── blog.js
│   │   └── contact.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Appointment.js
│   │   ├── Service.js
│   │   ├── Blog.js
│   │   └── Contact.js
│   ├── middleware/
│   │   └── auth.js
│   └── config/
│       └── db.js
│
├── .env.example
├── package.json
├── vercel.json
└── README.md
```

## Features

### Phase 1: Core Website
- ✅ Professional home page
- ✅ Services listing (General, Maternal & Child Health, Diagnostic, Dermatology, etc.)
- ✅ About clinic and Dr. Tadele profile
- ✅ Contact page with Google Maps and WhatsApp integration
- ✅ Health education blog
- ✅ Multi-language support
- ✅ Responsive mobile design

### Phase 2: Booking System
- ✅ Online appointment booking
- ✅ Service selection
- ✅ Date/time picker
- ✅ Patient information form

### Phase 3: Admin Dashboard
- ✅ Appointment management
- ✅ Service management
- ✅ Blog article management
- ✅ Contact inquiry management
- ✅ Analytics

## Getting Started

### Installation

```bash
# Clone repository
git clone <repo-url>
cd odaa-clinic-website

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Configuration

1. Create `.env` file in backend folder
2. Configure MongoDB connection string
3. Set up email service for contact forms
4. Add Google Maps API key

### Running Locally

```bash
# Frontend (open in browser)
cd frontend
python -m http.server 8000

# Backend
cd backend
npm start
```

## Color Palette

- Primary: #2C7A7B (Teal/Medical Green)
- Secondary: #FFFFFF (White)
- Accent: #4A5568 (Dark Gray)
- Medical Blue: #3182CE

## Languages Supported

1. English
2. Amharic (ኢትዮጵያ)
3. Afan Oromo (Oromiyaa)

## Contact Information

- **Phone:** 0911350573 / 0113664663 / 0913852208
- **Email:** dr.tadelemulisa@gmail.com
- **Hours:** Monday-Sunday, 8:00 AM - 8:00 PM (24/7 Emergency)
- **Address:** Woliso Town, Southwest Shoa Zone, Oromia Region, Ethiopia

## License

Created by Development Team for ODAA Medium Clinic © 2026

