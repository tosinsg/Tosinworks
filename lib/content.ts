export const NAV = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["Education", "#education"],
  ["Certifications", "#certifications"],
  ["Blog", "#blog"],
  ["Contact", "#contact"],
] as const

export const SOCIALS = [
  ["WhatsApp", "https://wa.me/2348104220096"],
  ["X / tosinworks", "https://x.com/tosinworks"],
  ["LinkedIn", "https://linkedin.com/in/tosinworks"],
  ["GitHub", "https://github.com/tosinsg"],
] as const

export const SERVICES = [
  ["Web & App Development", "Creating responsive, user-friendly websites and applications with modern technologies."],
  ["UI/UX Design & Wireframing", "Designing intuitive interfaces and seamless user experiences that engage and delight."],
  ["Graphics Design", "Crafting visually appealing graphics that communicate your brand's message effectively."],
  ["API Integration", "Connecting your applications with third-party services to extend functionality."],
  ["Chatbot & Game Development", "Building interactive bots and engaging games for various platforms."],
] as const

export const PROJECTS = [
  ["Rental Booking Website", "A complete platform for apartment reservations with user authentication, payment integration, and booking management.", ["React", "Node.js", "MongoDB", "Stripe"]],
  ["Online Course Platform", "An interactive learning platform with video courses, quizzes, progress tracking, and certification.", ["Next.js", "Firebase", "Tailwind CSS"]],
  ["Print Company Website", "A modern website for a print company showcasing their services and portfolio.", ["React", "Tailwind CSS"]],
  ["Telegram Bots Collection", "A collection of engaging bots for games, automation, and utility purposes on the Telegram platform.", ["Python", "Telegram API", "AWS Lambda"]],
] as const

export const SKILLS = [
  ["Frontend", [["HTML & CSS", 95], ["JavaScript", 90], ["React", 85], ["Next.js", 80]]],
  ["Backend", [["Node.js", 85], ["Express", 80], ["MongoDB", 75], ["Python", 70]]],
  ["Design", [["Figma", 90], ["Axure RP", 85], ["UI/UX Principles", 90], ["Responsive Design", 95]]],
  ["Tools", [["VS Code", 95], ["Git & GitHub", 85], ["Vercel", 80], ["Firebase", 75]]],
] as const

export const EDUCATION = [
  ["NIIT (National Institute of Information Technology)", "Diploma in Software Engineering", "Lagos, Nigeria", "Jan 2024 – Present", true],
  ["Normal College", "Senior School Certificate (WAEC & NECO)", "Lagos State, Nigeria", "Sept 2022 – Jul 2024", false],
] as const

export const CERTIFICATIONS = [
  ["Certified by BrightChamps", "Professional certification in web development and digital design", "2022"],
  ["1st Place – Science & Robotics Innovation Challenge", "Award for outstanding achievement in robotics and technological innovation", "2021"],
] as const

export const BLOG_POSTS = [
  ["How I Built My First Full-Stack App", "A walkthrough of building my event management system from scratch using modern web technologies.", "12 min read"],
  ["Top 5 Free Tools for Beginner Web Developers", "Essential free tools that every new developer should know about to boost productivity.", "5 min read"],
  ["How I Started My Tech Career Without a University Degree", "My unconventional path into tech and how you can do it too with dedication.", "10 min read"],
] as const
