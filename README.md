# 🔐 Authentication Pages

A modern, responsive authentication system built with React, Vite, and TailwindCSS featuring a multi-page user flow with beautiful UI components.

![Authentication Pages](https://img.shields.io/badge/React-19.1.1-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.2-purple.svg)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.12-teal.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🌐 Live Demo

- **Live Application**: https://authentication-page-ecru.vercel.app/
- **Repository**: https://github.com/your-username/AuthenticationPage

## 📱 Features

- **4-Page Authentication Flow**
  - Welcome/Landing Page
  - Sign In Page
  - Create Account Page  
  - Account Settings Page

- **Modern UI Components**
  - Custom Input Fields with validation styling
  - Custom Radio Button components
  - Responsive design (375px × 812px mobile-first)
  - Smooth transitions and hover effects

- **Advanced Navigation**
  - Circular page navigation (Page 4 → Page 1, Page 1 → Page 4)
  - Home button for quick navigation
  - Page indicators with prev/next controls

- **Styling & Design**
  - **Font**: Rubik font family from Google Fonts
  - **Color Scheme**: Purple accent (#6C25FF) with clean grays
  - **Background**: Light gray (#F7F8F9) container with white content areas
  - Custom profile photo with camera icon overlay

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd AuthenticationPage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
AuthenticationPage/
├── public/
│   ├── camera.svg          # Camera icon for profile photo
│   └── image.png          # Favicon
├── src/
│   ├── components/
│   │   ├── AccountSettingsPage.jsx    # User profile & settings
│   │   ├── CreateAccountPage.jsx      # Registration form
│   │   ├── InputField.jsx             # Reusable input component
│   │   ├── RadioButton.jsx            # Custom radio component
│   │   ├── SignInPage.jsx             # Login form
│   │   └── WelcomePage.jsx            # Landing page
│   ├── App.jsx            # Main app component with navigation
│   ├── App.css           # Component-specific styles
│   ├── index.css         # Global styles & Rubik font
│   └── main.jsx          # React entry point
├── index.html            # HTML template
├── package.json          # Dependencies & scripts
├── vite.config.js        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🎨 Component Overview

### Core Components

#### 1. **WelcomePage** (Page 1)
- Landing page with PopX branding
- Two action buttons: "Create Account" and "Already Registered? Login"
- Welcome message with Lorem ipsum content

#### 2. **SignInPage** (Page 2) 
- Email and password input fields
- Form validation with success redirect
- Uses custom InputField components

#### 3. **CreateAccountPage** (Page 3)
- Complete registration form with:
  - Full Name (required)
  - Phone Number (required)
  - Email Address (required)
  - Password (required)
  - Company Name (optional)
  - Agency selection (Yes/No radio buttons - defaults to "Yes")
- Custom RadioButton components with purple styling
- Form validation before proceeding

#### 4. **AccountSettingsPage** (Page 4)
- User profile display with:
  - Profile photo (76px × 76px) with camera icon overlay
  - User name and email
  - Full-width header with white background
  - Descriptive text content

### Reusable Components

#### **InputField**
- Consistent styling across all forms
- Props: `label`, `type`, `placeholder`, `required`, `value`, `onChange`
- Purple focus ring (#6C25FF)
- Required field indicators with red asterisk

#### **RadioButton**
- Custom-styled radio buttons
- Purple accent color (#6C25FF)
- Visual states: unselected (gray) and selected (purple border + filled center)
- Smooth hover and transition effects

## 🎯 Navigation System

The app features a sophisticated navigation system:

- **Circular Navigation**: Pages flow in a continuous loop (1→2→3→4→1)
- **Home Button**: Quick return to Welcome page from any page
- **Previous/Next**: Navigate between adjacent pages
- **Smart Redirects**: 
  - Successful login → Account Settings
  - Account creation → Account Settings

## 🎨 Design System

### Colors
- **Primary**: `#6C25FF` (Purple)
- **Text Primary**: `#1D2226` (Dark Gray)
- **Text Secondary**: `#6B7280` (Medium Gray)
- **Background**: `#F7F8F9` (Light Gray)
- **White**: `#FFFFFF`
- **Success**: Green accents for completed actions

### Typography
- **Font Family**: 'Rubik', sans-serif
- **Header**: 18px, normal weight
- **Body**: 14px-16px
- **Small**: 12px for secondary info

### Layout
- **Container**: 375px × 812px (Mobile-first design)
- **Padding**: 20px horizontal
- **Border Radius**: 8px for cards and inputs
- **Shadows**: Subtle drop shadows for depth

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: TailwindCSS 4.1.12
- **Font**: Google Fonts (Rubik)
- **Icons**: Custom SVG icons
- **Development**: ESLint for code quality

## 📱 Responsive Design

- Optimized for mobile devices (375px width)
- Fixed height container (812px) for consistent experience
- Touch-friendly button sizes and spacing
- Smooth transitions for better UX

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist/` folder will contain the production-ready files.

### Deploy to Vercel/Netlify
1. Connect your repository to your hosting platform
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 🎯 Future Enhancements

- [ ] Form validation with error messages
- [ ] Password strength indicator
- [ ] Email verification flow
- [ ] Social login integration (Google, GitHub)
- [ ] Dark mode toggle
- [ ] Accessibility improvements (ARIA labels)
- [ ] Internationalization (i18n)
- [ ] Unit tests with Jest/Vitest
- [ ] Backend API integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Subrata Mondal**
- Email: subrata24012005@gmail.com
- GitHub: [@your-github-username](https://github.com/your-github-username)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the excellent framework
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling
- [Vite](https://vitejs.dev/) for lightning-fast development
- [Google Fonts](https://fonts.google.com/) for the beautiful Rubik typeface

---

⭐ **If you found this project helpful, please give it a star!** ⭐
