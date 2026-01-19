export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  demo: string | null;
  image: string;
}

const projectsList: Project[] = [
  {
    title: "Aaliyah Momodu Portfolio",
    description:
      "A beautiful, responsive portfolio website showcasing my work as a frontend developer. Features smooth animations, glassmorphism design, dark mode, and full accessibility compliance. Built with Next.js, TypeScript, Framer Motion, and Tailwind CSS. Includes cinematic intro, flying princess mascot, and comprehensive project showcase.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "React", "GitHub"],
    github: "https://github.com/aaliyahwithadoublea/aaliyah-momodu-portfolio-v1",
    demo: "https://aaliyahwithadoublea-portfolio-v1.vercel.app/",
    image: "/images/my-portfolio.png",
  },
  {
    title: "Conference Ticket Generator",
    description:
      "A dynamic conference ticket generator application built for HNGX Stage 2. Features ticket customization, QR code generation, and beautiful ticket designs. Built with React and Vite for optimal performance.",
    tech: ["React", "Vite", "JavaScript", "Tailwind CSS", "HTML5"],
    github: "https://github.com/aaliyahwithadoublea/hngx-stage2-Conference-Ticket-Generator",
    demo: "https://hngx-stage2-conference-ticket-generator-six.vercel.app/",
    image: "/images/ticket-gen.png",
  },
  {
    title: "Color Master Game",
    description:
      "An interactive color perception game that tests your ability to match colors. Features multiple difficulty levels, streak tracking, accuracy scoring, and a timer. Built with vanilla JavaScript for optimal performance.",
    tech: ["JavaScript", "HTML5", "CSS3", "Vanilla JS"],
    github: "https://github.com/aaliyahwithadoublea/color-game",
    demo: "https://color-game-smoky.vercel.app/",
    image: "/images/color-game.png",
  },
  {
    title: "PDF Annotation Tool",
    description:
      "A modern, feature-rich PDF annotation web application built with Next.js and React. Upload PDF documents with drag-and-drop, annotate with customizable highlights and underlines, draw and place signatures, and export annotated PDFs with all changes embedded. Features real-time preview, color picker, resizable signatures, and toast notifications.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PDF.js", "pdf-lib", "react-signature-canvas", "react-dropzone"],
    github: "https://github.com/aaliyahwithadoublea/my-frontend-test",
    demo: "https://my-frontend-test-phi.vercel.app/",
    image: "/images/anotting.png",
  },
  {
    title: "Grundpay",
    description:
      "A fintech platform designed to simplify installment payments for real estate purchases. Enables buyers to manage structured payment plans, while developers and brokers can track transactions efficiently. Features secure transactions, automated payment tracking, robust wallet system, referral earnings, and intuitive property exploration. Built as a Progressive Web App (PWA).",
    tech: ["React", "Vite", "JavaScript", "TailwindCSS", "Framer Motion", "Context API", "Axios", "TanStack Query", "Chart.js", "Recharts", "React Hook Form", "React Router v7", "PWA"],
    github: null,
    demo: "https://grundpay.com/",
    image: "/images/grundy.png",
  },
  {
    title: "HESED EduSuite",
    description:
      "A comprehensive school management system designed to streamline educational administration. Features staff management, secure payment processing with Paystack, automated grading, student enrollment, attendance tracking, and parent-teacher communication tools. Includes centralized dashboard, workflow automation, and 24/7 customer support.",
    tech: ["React", "TypeScript", "Next.js", "Paystack API", "Tailwind CSS", "Context API", "Axios", "React Hook Form", "Chart.js", "School Management"],
    github: null,
    demo: "https://hesedsms.com/",
    image: "/images/hesedy.png",
  },
  {
    title: "HESED Viewer Dashboard",
    description:
      "A comprehensive analytics dashboard providing real-time metrics, trends, and insights for school administrators and executives. Features school-level and company-level dashboards with attendance tracking, academic performance, revenue analytics, student engagement metrics, and notice board management. Results can be filtered by date and timeframe for detailed analysis.",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Chart.js", "Data Visualization", "Real-time Analytics", "Dashboard"],
    github: null,
    demo: "https://hesed-viewer.vercel.app/",
    image: "/images/viewer-dashboard.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A modern, full-featured e-commerce platform built with Next.js, featuring product catalog, shopping cart, and checkout flow. Optimized for performance and accessibility.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Zod"],
    github: null,
    demo: "#",
    image: "/api/placeholder/600/400",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and modern state management.",
    tech: ["React", "TypeScript", "Zustand", "Framer Motion", "Tailwind CSS"],
    github: null,
    demo: "#",
    image: "/api/placeholder/600/400",
  },
  {
    title: "Weather Dashboard",
    description:
      "An elegant weather dashboard with location-based forecasts, interactive maps, and beautiful data visualizations. Includes dark mode and responsive design.",
    tech: ["React", "TypeScript", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    github: null,
    demo: "#",
    image: "/api/placeholder/600/400",
  },
  {
    title: "Social Media Analytics",
    description:
      "A comprehensive analytics platform for tracking social media performance. Features real-time metrics, engagement tracking, and detailed reporting dashboards.",
    tech: ["Next.js", "TypeScript", "GraphQL", "Chart.js", "Tailwind CSS"],
    github: null,
    demo: "#",
    image: "/api/placeholder/600/400",
  },
  {
    title: "Counter Mobile App",
    description:
      "A mobile application built with React Native for counting and tracking various metrics. Features an intuitive interface, smooth animations, and responsive design. The app is available as a web version for easy access and testing.",
    tech: ["React Native", "JavaScript", "Mobile Development", "React", "Web App"],
    github: "https://github.com/aaliyahwithadoublea/Counter-Mobile-App",
    demo: "https://counter-mobile-jvp8xdnql-aaliyahwithadoubleas-projects.vercel.app/",
    image: "/api/placeholder/600/400",
  },
  {
    title: "Mental Health Chatbot",
    description:
      "A chatbot designed to provide support, information, and guidance related to mental health. Built with Flask and Python, featuring natural language processing capabilities. The chatbot offers empathetic responses, mental health resources, and support guidance to help users navigate their mental wellness journey.",
    tech: ["Python", "Flask", "Machine Learning", "NLP", "HTML", "CSS", "TensorFlow", "Natural Language Processing"],
    github: "https://github.com/aaliyahwithadoublea/Chatbot",
    demo: null, // No live demo available
    image: "/images/chatbot.png",
  },
  {
    title: "Restaurant Seat Reservations",
    description:
      "A functional UI for booking and reservation of seats in a restaurant. Built with React and Vite, featuring an intuitive interface for customers to select and reserve restaurant seats. Includes real-time seat availability, booking management, and a clean, responsive design optimized for restaurant operations.",
    tech: ["React", "Vite", "JavaScript", "CSS3", "HTML5", "Netlify", "Restaurant Booking"],
    github: "https://github.com/Alori-Daniel/RestaurantSeatReservations",
    demo: "https://crisp-crave.netlify.app/",
    image: "/images/crispy.png",
  },
  {
    title: "CognoRise InfoTech",
    description:
      "A collection of three interactive web applications: a Calculator for performing mathematical operations, a Countdown Timer for tracking time-based events, and a TO-DO List for task management. Each application features a clean, user-friendly interface built with vanilla JavaScript, HTML, and CSS. Perfect for demonstrating core JavaScript skills and DOM manipulation.",
    tech: ["JavaScript", "HTML5", "CSS3", "Vanilla JS", "DOM Manipulation"],
    github: "https://github.com/aaliyahwithadoublea/CognoRise-InfoTech",
    demo: "https://cognorise-infotech-chi.vercel.app/",
    image: "/images/cognorise.png",
  },
  {
    title: "Trakmama",
    description:
      "A mobile platform for expectant mothers and new parents to track maternal and child health indicators, receive personalized guidance, and schedule appointments. Helps conceiving mothers stay healthy from start to childbirth with daily reminders, healthy tips, and motivations. Connects pregnant women to share experiences and provides education about healthy pregnancy, preeclampsia, diabetes, postpartum care, and hypertension.",
    tech: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS", "Mobile App", "Health Tracking", "Vercel"],
    github: "https://github.com/Adaobilynda1234/Trakmama-project",
    demo: "https://trakmama-project.vercel.app/",
    image: "/images/trakmama.png",
  },
];

// Sort projects alphabetically by title
export const allProjects: Project[] = projectsList.sort((a, b) => 
  a.title.localeCompare(b.title)
);
