# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases my projects, experience, and skills with interactive animations and a clean, professional design.

## 🚀 Live Demo

Visit the live portfolio: [https://Vishalsomaraju.github.io/Portfolio/](https://Vishalsomaraju.github.io/Portfolio/)

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Interactive Animations**: Smooth transitions and particle effects using TSParticles
- **Modern UI**: Clean design with Tailwind CSS
- **Contact Form**: Functional contact form powered by EmailJS
- **Section Navigation**: Easy navigation between different sections
- **Project Showcase**: Display of featured projects with links and descriptions

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: TSParticles, React TSParticles
- **Icons**: React Icons
- **Routing**: React Router DOM
- **Email Service**: EmailJS
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
src/
├── components/
│   ├── navbar/         # Navigation component
│   ├── home/           # Landing/hero section
│   ├── about/          # About me section
│   ├── experience/     # Work experience section
│   ├── projects/       # Projects showcase
│   └── contact/        # Contact form
├── assets/             # Images and static assets
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Vishalsomaraju/Portfolio.git
cd Portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

To customize this portfolio for your own use:

1. Update personal information in the components
2. Replace images in the `src/assets/` directory
3. Modify the color scheme in `tailwind.config.js`
4. Update project information in the Projects component
5. Configure EmailJS for the contact form

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Add your service ID, template ID, and public key to the Contact component

## 🚀 Deployment

This portfolio is configured for deployment on GitHub Pages:

```bash
npm run deploy
```

The `gh-pages` package will automatically build and deploy to the `gh-pages` branch.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.
