# ShadowFox Development Tasks

This repository contains two comprehensive web development projects showcasing modern React applications with different use cases and technologies.

## 📂 Repository Structure

```
ShadowFox/
├── Task-1/          # Portfolio Website
└── Task-2/          # E-commerce Application
```

---

## 🎯 Task 1: Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases projects, experience, and skills with interactive animations and a clean, professional design.

### 🌟 Key Features

- **Responsive Design**: Optimized for all device sizes (desktop, tablet, mobile)
- **Interactive Animations**: Smooth transitions and particle effects using TSParticles
- **Modern UI**: Clean design with Tailwind CSS and custom styling
- **Contact Form**: Functional contact form powered by EmailJS
- **Section Navigation**: Easy navigation between different portfolio sections
- **Project Showcase**: Display of featured projects with links and descriptions
- **Performance Optimized**: Built with Vite for fast development and production builds

### 🛠️ Tech Stack

| Category          | Technologies                   |
| ----------------- | ------------------------------ |
| **Frontend**      | React 19, JavaScript (ES6+)    |
| **Styling**       | Tailwind CSS 4.1.8             |
| **Build Tool**    | Vite 6.3.5                     |
| **Animations**    | TSParticles, React TSParticles |
| **Icons**         | React Icons                    |
| **Routing**       | React Router DOM 7.6.2         |
| **Email Service** | EmailJS                        |
| **Deployment**    | GitHub Pages                   |

### 📁 Project Structure

```
Task-1/
├── src/
│   ├── components/
│   │   ├── navbar/         # Navigation component
│   │   ├── home/           # Landing/hero section
│   │   ├── about/          # About me section
│   │   ├── experience/     # Work experience section
│   │   ├── projects/       # Projects showcase
│   │   └── contact/        # Contact form
│   ├── assets/             # Images and static assets
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── public/                 # Static files
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

### 🚀 Getting Started

1. **Navigate to Task-1 directory**

   ```bash
   cd Task-1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

### 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

### 🌐 Live Demo

[**View Portfolio Website**](https://Vishalsomaraju.github.io/Portfolio/)

---

## 🛒 Task 2: E-commerce Application

A comprehensive e-commerce web application built with React, providing a complete shopping experience with product browsing, cart management, user authentication, and modern UI/UX.

### 🌟 Key Features

- **Product Management**: Complete product catalog with categories and search
- **Shopping Cart**: Full cart functionality with add/remove/update capabilities
- **User Authentication**: Secure login and registration with Clerk
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Advanced Filtering**: Category-based and search filtering
- **Single Product View**: Detailed product pages with images and descriptions
- **Contact System**: Contact form with EmailJS integration
- **Loading States**: Beautiful loading animations and transitions
- **Toast Notifications**: User-friendly feedback system
- **Protected Routes**: Secure authentication-required pages
- **Location Services**: Geolocation integration capabilities

### 🛠️ Tech Stack

| Category           | Technologies                |
| ------------------ | --------------------------- |
| **Frontend**       | React 19, JavaScript (ES6+) |
| **Build Tool**     | Vite 6.3.1                  |
| **Styling**        | Tailwind CSS 4.1.4          |
| **Routing**        | React Router DOM 7.6.2      |
| **Authentication** | Clerk 5.29.0                |
| **HTTP Client**    | Axios 1.8.4                 |
| **Notifications**  | React Toastify 11.0.5       |
| **Icons**          | Lucide React, React Icons   |
| **Animations**     | Lottie React 2.4.1          |
| **Carousel**       | React Slick 0.30.3          |
| **Email Service**  | EmailJS 4.4.1               |
| **Deployment**     | GitHub Pages, Netlify       |

### 📁 Project Structure

```
Task-2/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Footer.jsx      # Footer component
│   │   ├── ProductCard.jsx # Product card component
│   │   ├── Carousel.jsx    # Image carousel
│   │   ├── FilterSection.jsx # Product filtering
│   │   ├── Breadcrums.jsx  # Breadcrumb navigation
│   │   ├── Category.jsx    # Category components
│   │   ├── Features.jsx    # Feature highlights
│   │   ├── LoginHandler.jsx # Authentication handler
│   │   ├── MidBanner.jsx   # Marketing banners
│   │   ├── MobileFilter.jsx # Mobile filtering
│   │   ├── Pagination.jsx  # Page navigation
│   │   ├── ProductListView.jsx # List view component
│   │   └── ProtectedRoute.jsx # Route protection
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page
│   │   ├── Products.jsx    # Products listing page
│   │   ├── Cart.jsx        # Shopping cart page
│   │   ├── Contact.jsx     # Contact page
│   │   ├── CategoryProduct.jsx # Category products
│   │   └── SingleProduct.jsx # Product details
│   ├── context/            # React context providers
│   │   ├── CartContext.jsx # Cart state management
│   │   └── DataContext.jsx # Product data management
│   ├── assets/             # Static assets
│   │   ├── banner1.jpg     # Marketing banners
│   │   ├── empty-cart.png  # Empty state images
│   │   ├── Loading.gif     # Loading animations
│   │   └── notfound.json   # 404 animations
│   ├── App.jsx             # Main application component
│   └── main.jsx           # Application entry point
├── public/                 # Static files
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── netlify.toml           # Netlify deployment config
└── README.md              # Project documentation
```

### 🚀 Getting Started

1. **Navigate to Task-2 directory**

   ```bash
   cd Task-2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:5173`

### 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

### 🌐 Live Demo

[**View E-commerce Application**](https://Vishalsomaraju.github.io/Ecommerce/)

---

## 🎨 Development Highlights

### Task 1 - Portfolio Website

- **Modern Design**: Clean, professional layout with particle animations
- **Performance**: Optimized with Vite and modern React patterns
- **Accessibility**: Responsive design with proper semantic HTML
- **Contact Integration**: Direct email functionality through EmailJS
- **Interactive Elements**: Smooth scrolling and hover effects

### Task 2 - E-commerce Application

- **Full-Stack Features**: Complete shopping experience simulation
- **State Management**: Context API for cart and product data
- **Authentication**: Secure user management with Clerk
- **API Integration**: Fetches product data from external APIs
- **Modern UX**: Loading states, toast notifications, and smooth transitions

---

## 🔧 Common Development Patterns

Both projects showcase:

- **Modern React**: Hooks, functional components, and Context API
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimization**: Code splitting and lazy loading
- **Clean Architecture**: Component-based structure with separation of concerns
- **Modern Tooling**: Vite for fast development and builds
- **Code Quality**: ESLint configuration and best practices

---

## 🚀 Deployment

Both applications are configured for multiple deployment platforms:

### GitHub Pages

```bash
npm run deploy
```

### Netlify

- Automatic deployment from repository
- Environment variable configuration
- Custom domain support

---

## 🛠️ Development Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git for version control
- Modern web browser for testing

### Global Setup

1. Clone the repository
2. Navigate to desired task directory
3. Follow individual project setup instructions
4. Start development server
5. Begin development

---

## 📝 License

Both projects are open source and available under the MIT License.

---

## 👨‍💻 Author

**Vishal Somaraju**

- GitHub: [@Vishalsomaraju](https://github.com/Vishalsomaraju)
- Portfolio: [Live Portfolio](https://Vishalsomaraju.github.io/Portfolio/)

---

## 🙏 Acknowledgments

- React team for the excellent framework
- Vite team for the amazing build tool
- Tailwind CSS for the utility-first CSS framework
- Clerk for authentication services
- EmailJS for email integration
- All open-source contributors who made these projects possible

---
