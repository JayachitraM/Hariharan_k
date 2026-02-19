# Hariharan K - Portfolio Website

A modern, interactive, dark-theme developer portfolio built with React.js and Tailwind CSS, showcasing the work and expertise of Hariharan K, a Software Developer and QA Engineer.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and gradient accents
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Elements**: Hover effects, scroll animations, and smooth transitions
- **Professional Sections**:
  - Hero with typing animation
  - About Me with stats and highlights
  - Skills showcase with animated progress bars
  - Experience timeline with expandable details
  - Projects gallery with modal views
  - Education and certifications
  - Contact form with validation

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hari_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Design System

### Colors
- **Background**: #0F172A (slate-900)
- **Accent**: Cyan/Blue/Purple gradients
- **Text**: White/Gray variations

### Typography
- **Headings**: Poppins
- **Body**: Inter

### Components
- Glassmorphism cards with backdrop blur
- Gradient text effects
- Neon hover glows
- Smooth scroll animations

## 📁 Project Structure

```
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Education/
│   ├── Experience/
│   ├── Footer/
│   ├── Hero/
│   ├── Navigation/
│   ├── Projects/
│   ├── Skills/
│   └── UI/
├── data/
│   ├── education.js
│   ├── experience.js
│   ├── personal.js
│   ├── projects.js
│   └── skills.js
├── hooks/
│   └── useScrollAnimation.js
├── utils/
│   └── animations.js
└── App.jsx
```

## 🔧 Customization

### Personal Information
Update the data files in `src/data/` to customize:
- Personal details and bio
- Skills and expertise levels
- Work experience and achievements
- Project portfolio
- Education and certifications

### Styling
- Modify `tailwind.config.js` for custom colors and animations
- Update `src/index.css` for global styles
- Customize component styles in individual component files

### Content
- Replace placeholder images in the `public/` directory
- Update social media links and contact information
- Modify project descriptions and technologies

## 🌟 Key Features Explained

### Hero Section
- Animated typing effect showing different roles
- Floating particle background
- Call-to-action buttons with smooth hover effects

### Skills Section
- Categorized skill display with progress bars
- Interactive category tabs
- Animated skill level indicators

### Experience Timeline
- Vertical timeline with alternating layout
- Expandable cards showing detailed information
- Technology tags and achievements

### Projects Showcase
- Filterable project grid
- Modal popups with detailed project information
- Hover effects and smooth transitions

### Contact Form
- Functional contact form with validation
- Multiple contact methods
- Social media integration

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚡ Performance

- Optimized animations with Framer Motion
- Lazy loading for images
- Efficient component structure
- Minimal bundle size

## 🚀 Deployment

The portfolio can be deployed to various platforms:

### Vercel
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the dist/ folder to GitHub Pages
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

**Hariharan K**
- Email: hariharan.k@example.com
- LinkedIn: [linkedin.com/in/hariharan-k](https://linkedin.com/in/hariharan-k)
- GitHub: [github.com/hariharan-k](https://github.com/hariharan-k)

---

**Made with ❤️ by Hariharan K**