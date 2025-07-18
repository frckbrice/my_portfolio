// 'use client';

// import React, { useRef } from 'react';
// import { Button } from '@/components/ui/button';
// import { Download, FileText, Printer } from 'lucide-react';
// import { motion } from '@/lib/framer-motion';

// export function CVDownload() {
//   const cvRef = useRef<HTMLDivElement>(null);

//   const openCVForPrint = () => {
//     if (!cvRef.current) return;

//     const cvWindow = window.open('', '_blank');
//     if (cvWindow) {
//       cvWindow.document.write(`
//                 <!DOCTYPE html>
//                 <html>
//                     <head>
//                         <title>Brice AVOM - CV</title>
//                         <style>
//                             @media print {
//                                 body { margin: 0; }
//                                 .no-print { display: none; }
//                             }
//                             body {
//                                 font-family: Arial, sans-serif;
//                                 margin: 20px;
//                                 background: white;
//                                 color: black;
//                                 line-height: 1.6;
//                             }
//                             .cv-content {
//                                 max-width: 800px;
//                                 margin: 0 auto;
//                                 padding: 20px;
//                                 background: white;
//                                 font-size: 14px;
//                             }
//                             .print-button {
//                                 position: fixed;
//                                 top: 20px;
//                                 right: 20px;
//                                 padding: 10px 20px;
//                                 background: #007bff;
//                                 color: white;
//                                 border: none;
//                                 border-radius: 5px;
//                                 cursor: pointer;
//                                 font-size: 16px;
//                             }
//                             .print-button:hover {
//                                 background: #0056b3;
//                             }
//                             h1 { font-size: 32px; font-weight: bold; margin: 0; color: #333; }
//                             h2 { font-size: 20px; font-weight: bold; color: #333; border-bottom: 2px solid #333; padding-bottom: 8px; margin-bottom: 15px; margin-top: 25px; }
//                             h3 { font-size: 16px; font-weight: bold; color: #444; margin: 0 0 8px 0; }
//                             p { margin: 4px 0; font-size: 14px; }
//                             .contact-info { font-size: 14px; color: #666; }
//                             .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px; }
//                             .skill-category h3 { font-size: 16px; font-weight: bold; color: #555; margin-bottom: 8px; }
//                             .skill-category p { font-size: 13px; margin: 0; line-height: 1.5; }
//                             .project { margin-bottom: 15px; }
//                             .project h3 { font-size: 16px; font-weight: bold; color: #444; margin: 0 0 5px 0; }
//                             .project h3 a { color: #007bff; text-decoration: none; }
//                             .project h3 a:hover { text-decoration: underline; }
//                             .project p { font-size: 13px; margin: 0; color: #666; line-height: 1.4; }
//                             .languages-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px; }
//                             .language-item { margin-bottom: 8px; }
//                             .language-name { font-weight: bold; color: #555; }
//                             .language-level { color: #666; font-style: italic; }
//                             .certification { margin-bottom: 12px; }
//                             .certification h4 { font-size: 15px; font-weight: bold; color: #444; margin: 0 0 3px 0; }
//                             .certification p { font-size: 13px; margin: 0; color: #666; }
//                             .section { margin-bottom: 25px; }
//                             .header-section { text-align: center; margin-bottom: 25px; border-bottom: 3px solid #333; padding-bottom: 20px; }
//                             .summary-text { text-align: justify; margin: 0; font-size: 14px; line-height: 1.6; }
//                         </style>
//                     </head>
//                     <body>
//                         <button class="print-button no-print" onclick="window.print()">
//                             🖨️ Print CV
//                         </button>
//                         <div class="cv-content">
//                             ${cvRef.current.innerHTML}
//                         </div>
//                         <script>
//                             // Auto-print after a short delay
//                             setTimeout(() => {
//                                 if (confirm('Would you like to print your CV now?')) {
//                                     window.print();
//                                 }
//                             }, 1000);
//                         </script>
//                     </body>
//                 </html>
//             `);
//       cvWindow.document.close();
//     }
//   };

//   return (
//     <>
//       {/* Hidden CV for display */}
//       <div
//         ref={cvRef}
//         className="hidden"
//         style={{
//           width: '210mm',
//           minHeight: '297mm',
//           padding: '20mm',
//           backgroundColor: 'white',
//           color: 'black',
//           fontFamily: 'Arial, sans-serif',
//           fontSize: '14px',
//           lineHeight: '1.6',
//         }}
//       >
//         {/* Header Section */}
//         <div className="header-section">
//           <h1
//             style={{
//               fontSize: '32px',
//               fontWeight: 'bold',
//               margin: '0',
//               color: '#333',
//             }}
//           >
//             Brice AVOM
//           </h1>
//           <p style={{ fontSize: '20px', margin: '8px 0', color: '#666' }}>
//             Full-Stack Developer & Mobile App Developer
//           </p>
//           <div style={{ fontSize: '14px', color: '#666' }}>
//             <p style={{ margin: '4px 0' }}>📍 Cameroon</p>
//             <p style={{ margin: '4px 0' }}>📧 bricefrkc@gmail.com</p>
//             <p style={{ margin: '4px 0' }}>🔗 github.com/frckbrice</p>
//             {/* add linkedIn link */}
//             <p style={{ margin: '4px 0' }}>
//               🔗 <a href="https://www.linkedin.com/in/avombrice/" target="_blank" rel="noopener noreferrer">linkedin.com/in/avom-brice</a>
//             </p>
//             <p style={{ margin: '4px 0' }}>📱 +237 674 85 23 04 / +237 658 52 79 73</p>
//           </div>
//         </div>

//         {/* Professional Summary */}
//         <div className="section">
//           <h2
//             style={{
//               fontSize: '20px',
//               fontWeight: 'bold',
//               color: '#333',
//               borderBottom: '2px solid #333',
//               paddingBottom: '8px',
//               marginBottom: '15px',
//             }}
//           >
//             PROFESSIONAL SUMMARY
//           </h2>
//           <p className="summary-text">
//             Full-Stack Developer with 3+ years of experience building scalable web applications and mobile solutions using modern technologies. Specialized in microservices architecture, real-time applications, and cross-platform mobile development. Demonstrated success delivering high-performance applications across diverse industries, with strong focus on clean code principles, design patterns, and maintainable architecture.
//           </p>
//         </div>

//         {/* Technical Skills */}
//         <div className="section">
//           <h2
//             style={{
//               fontSize: '20px',
//               fontWeight: 'bold',
//               color: '#333',
//               borderBottom: '2px solid #333',
//               paddingBottom: '8px',
//               marginBottom: '15px',
//             }}
//           >
//             TECHNICAL SKILLS
//           </h2>
//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '20px',
//             }}
//           >
//             <div>
//               <h3
//                 style={{
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   color: '#555',
//                   marginBottom: '8px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Frontend Development
//               </h3>

//               <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
//                 <div style={{ marginBottom: '6px' }}>
//                   <strong style={{ color: '#333' }}>Languages:</strong> JavaScript (ES6+), TypeScript, HTML5, CSS3
//                 </div>

//                 <div style={{ marginBottom: '6px' }}>
//                   <strong style={{ color: '#333' }}>Frameworks & Libraries:</strong> React, Next.js, Angular 2, React Query
//                 </div>

//                 <div style={{ marginBottom: '6px' }}>
//                   <strong style={{ color: '#333' }}>Styling & UI:</strong> Tailwind CSS, Shadcn/ui, SCSS
//                 </div>

//                 <div style={{ marginBottom: '6px' }}>
//                   <strong style={{ color: '#333' }}>State Management:</strong> Redux, Zustand, React context API, React Query.
//                 </div>

//                 <div style={{ marginBottom: '6px' }}>
//                   <strong style={{ color: '#333' }}>Build Tools:</strong> Vite, Webpack.
//                 </div>

//                 <div style={{ marginBottom: '0' }}>
//                   <strong style={{ color: '#333' }}>Testing:</strong> Vitest, React Testing Library, Playwright, Jest, Cypress.
//                 </div>
//               </div>
//             </div>
//             <div>
//               <h3
//                 style={{
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   color: '#555',
//                   marginBottom: '8px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Backend Development
//               </h3>
//               <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
//                 Node.js, Express.js, NestJS, TypeScript, RESTful APIs, GraphQL,
//                 Microservices Architecture
//               </p>
//             </div>
//             <div>
//               <h3
//                 style={{
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   color: '#555',
//                   marginBottom: '8px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Mobile Development
//               </h3>
//               <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
//                 React Native, Expo, Android, iOS, FCM, APN, MMKV, Expo
//                 EAS/Workflow, Mobile App Deployment
//               </p>
//             </div>
//             <div>
//               <h3
//                 style={{
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   color: '#555',
//                   marginBottom: '8px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Databases & Cloud
//               </h3>
//               <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
//                 MongoDB, PostgreSQL, MySQL, SQLite, Redis, Firebase, Supabase,
//                 AWS S3, Cloud Storage
//               </p>
//             </div>
//             <div>
//               <h3
//                 style={{
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   color: '#555',
//                   marginBottom: '8px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 DevOps & Tools
//               </h3>
//               <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
//                 Git, Docker, Kubernetes, CI/CD, Vercel, Heroku, Netlify,
//                 Cloudflare, Nginx, Apache
//               </p>
//             </div>
//             <div>
//               <h3
//                 style={{
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   color: '#555',
//                   marginBottom: '8px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Payment & APIs
//               </h3>
//               <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
//                 Stripe API, PayPal, Orange Money API, MTN Mobile Money API,
//                 Third-party API Integration
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Languages */}
//         <div className="section">
//           <h2
//             style={{
//               fontSize: '20px',
//               fontWeight: 'bold',
//               color: '#333',
//               borderBottom: '2px solid #333',
//               paddingBottom: '8px',
//               marginBottom: '15px',
//             }}
//           >
//             LANGUAGES
//           </h2>
//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '15px',
//             }}
//           >
//             <div className="language-item">
//               <span className="language-name">English</span> -{' '}
//               <span className="language-level">
//                 Professional Working Proficiency
//               </span>
//             </div>
//             <div className="language-item">
//               <span className="language-name">French</span> -{' '}
//               <span className="language-level">Native Proficiency</span>
//             </div>
//             <div className="language-item">
//               <span className="language-name">Cameroonian Pidgin</span> -{' '}
//               <span className="language-level">Native Proficiency</span>
//             </div>
//           </div>
//         </div>

//         {/* Key Projects */}
//         <div className="section">
//           <h2
//             style={{
//               fontSize: '20px',
//               fontWeight: 'bold',
//               color: '#333',
//               borderBottom: '2px solid #333',
//               paddingBottom: '8px',
//               marginBottom: '15px',
//             }}
//           >
//             KEY PROJECTS
//           </h2>
//           <div style={{ marginBottom: '15px' }}>
//             <h3
//               style={{
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 color: '#444',
//                 margin: '0 0 5px 0',
//               }}
//             >
//               <a
//                 href="https://github.com/frckbrice/real-time-collaborative-plateform"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Real-time Collaborative Platform
//               </a>
//             </h3>
//             <p
//               style={{
//                 fontSize: '13px',
//                 margin: '0',
//                 color: '#666',
//                 lineHeight: '1.4',
//               }}
//             >
//               Next.js 14, TypeScript, Supabase, Supabase Auth, Supabase
//               Realtime, Drizzle ORM, Real-time collaboration features, User
//               authentication, Database management
//             </p>
//           </div>
//           <div style={{ marginBottom: '15px' }}>
//             <h3
//               style={{
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 color: '#444',
//                 margin: '0 0 5px 0',
//               }}
//             >
//               <a
//                 href="https://github.com/frckbriceClean-code-arch-REST-API"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 E-commerce Backend
//               </a>
//             </h3>
//             <p
//               style={{
//                 fontSize: '13px',
//                 margin: '0',
//                 color: '#666',
//                 lineHeight: '1.4',
//               }}
//             >
//               Node.js, MongoDB, Clean Architecture, TypeScript, Express.js,
//               RESTful APIs, Payment integration, Order management system
//             </p>
//           </div>
//           <div style={{ marginBottom: '15px' }}>
//             <h3
//               style={{
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 color: '#444',
//                 margin: '0 0 5px 0',
//               }}
//             >
//               <a
//                 href="https://github.com/frckbrice/ra-mobile-project"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Mobile App for Cocoa Management (RainForest Alliance)
//               </a>
//             </h3>
//             <p
//               style={{
//                 fontSize: '13px',
//                 margin: '0',
//                 color: '#666',
//                 lineHeight: '1.4',
//               }}
//             >
//               React Native, Expo, TypeScript, AWS S3, Orange Money API, MTN
//               Mobile Money API, PayPal Payment Gateway, FCM, APN, MMKV,
//               Compliance with RainForest Alliance specifications
//             </p>
//           </div>
//           <div style={{ marginBottom: '15px' }}>
//             <h3
//               style={{
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 color: '#444',
//                 margin: '0 0 5px 0',
//               }}
//             >
//               <a
//                 href="https://github.com/frckbrice/HotelMgt"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Full-stack Web Application for Hotel Management
//               </a>
//             </h3>
//             <p
//               style={{
//                 fontSize: '13px',
//                 margin: '0',
//                 color: '#666',
//                 lineHeight: '1.4',
//               }}
//             >
//               Next.js 14, TypeScript, Sanity.io CMS, Service Worker, Next-auth,
//               Stripe API, TailwindCSS, Progressive Web App (PWA), Booking
//               system, Payment processing
//             </p>
//           </div>
//         </div>

//         {/* Work Experience */}
//         <div className="section">
//           <h2
//             style={{
//               fontSize: '20px',
//               fontWeight: 'bold',
//               color: '#333',
//               borderBottom: '2px solid #333',
//               paddingBottom: '8px',
//               marginBottom: '15px',
//             }}
//           >
//             WORK EXPERIENCE
//           </h2>
//           <div style={{ marginBottom: '15px' }}>
//             <h3
//               style={{
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 color: '#444',
//                 margin: '0 0 5px 0',
//               }}
//             >
//               Full-Stack Developer - Freelance
//             </h3>
//             <p
//               style={{
//                 fontSize: '13px',
//                 margin: '0',
//                 color: '#666',
//                 fontStyle: 'italic',
//               }}
//             >
//               2020 - Present
//             </p>
//             <p
//               style={{
//                 fontSize: '13px',
//                 margin: '8px 0 0 0',
//                 color: '#666',
//                 lineHeight: '1.4',
//               }}
//             >
//               • Developed and maintained full-stack web applications using
//               React, Next.js, and Node.js
//               <br />
//               • Built mobile applications with React Native and Expo for iOS and
//               Android platforms
//               <br />
//               • Implemented payment gateways and third-party API integrations
//               <br />• Collaborated with clients to understand requirements and
//               deliver scalable solutions
//             </p>
//           </div>
//         </div>

//         {/* Certifications */}
//         <div className="section">
//           <h2
//             style={{
//               fontSize: '20px',
//               fontWeight: 'bold',
//               color: '#333',
//               borderBottom: '2px solid #333',
//               paddingBottom: '8px',
//               marginBottom: '15px',
//             }}
//           >
//             CERTIFICATIONS & TRAINING
//           </h2>
//           <div className="certification">
//             <h4
//               style={{
//                 fontSize: '15px',
//                 fontWeight: 'bold',
//                 color: '#444',
//                 margin: '0 0 3px 0',
//               }}
//             >
//               React Native Development - Udemy
//             </h4>
//             <p style={{ fontSize: '13px', margin: '0', color: '#666' }}>
//               Advanced mobile app development with React Native and Expo
//             </p>
//           </div>
//           <div className="certification">
//             <h4
//               style={{
//                 fontSize: '15px',
//                 fontWeight: 'bold',
//                 color: '#444',
//                 margin: '0 0 3px 0',
//               }}
//             >
//               Next.js 14 Masterclass - Udemy
//             </h4>
//             <p style={{ fontSize: '13px', margin: '0', color: '#666' }}>
//               Full-stack development with Next.js, TypeScript, and modern web
//               technologies
//             </p>
//           </div>
//           <div className="certification">
//             <h4
//               style={{
//                 fontSize: '15px',
//                 fontWeight: 'bold',
//                 color: '#444',
//                 margin: '0 0 3px 0',
//               }}
//             >
//               Professional Cloud Developer - Google Skill Boost
//             </h4>
//             <p style={{ fontSize: '13px', margin: '0', color: '#666' }}>
//               Cloud computing fundamentals and GCP services
//             </p>
//           </div>
//         </div>

//         {/* Education */}
//         <div className="section">
//           <h2
//             style={{
//               fontSize: '20px',
//               fontWeight: 'bold',
//               color: '#333',
//               borderBottom: '2px solid #333',
//               paddingBottom: '8px',
//               marginBottom: '15px',
//             }}
//           >
//             EDUCATION
//           </h2>
//           <div>
//             <h3
//               style={{
//                 fontSize: '16px',
//                 fontWeight: 'bold',
//                 color: '#444',
//                 margin: '0 0 5px 0',
//               }}
//             >
//               University of Bamenda
//             </h3>
//             <p
//               style={{
//                 fontSize: '13px',
//                 color: '#666',
//                 margin: '0',
//                 fontStyle: 'italic',
//               }}
//             >
//               Computer Science | 2016 - 2017
//             </p>
//             <p
//               style={{
//                 fontSize: '13px',
//                 color: '#666',
//                 margin: '8px 0 0 0',
//                 lineHeight: '1.4',
//               }}
//             >
//               Focused on software engineering, algorithms, data structures, and
//               computer systems. Completed projects in web development and
//               database management.
//             </p>
//           </div>
//         </div>

//         {/* Additional Information */}
//         <div className="section">
//           <h2
//             style={{
//               fontSize: '20px',
//               fontWeight: 'bold',
//               color: '#333',
//               borderBottom: '2px solid #333',
//               paddingBottom: '8px',
//               marginBottom: '15px',
//             }}
//           >
//             ADDITIONAL INFORMATION
//           </h2>
//           <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.5' }}>
//             <p style={{ margin: '4px 0' }}>
//               • <strong>Agile Methodologies:</strong> Scrum, Kanban, Sprint
//               Planning
//             </p>
//             <p style={{ margin: '4px 0' }}>
//               • <strong>Version Control:</strong> Git, GitHub, Git Actions
//             </p>
//             <p style={{ margin: '4px 0' }}>
//               • <strong>Testing:</strong> Jest, Cypress
//             </p>
//             <p style={{ margin: '4px 0' }}>
//               • <strong>Performance:</strong> Lighthouse, Core Web Vitals, SEO
//               optimization
//             </p>
//             <p style={{ margin: '4px 0' }}>
//               • <strong>Security:</strong> OAuth 2.0, JWT, HTTPS, Data
//               encryption
//             </p>
//             <p style={{ margin: '4px 0' }}>
//               • <strong>Soft Skills:</strong> Problem-solving, Team
//               collaboration, Communication, Time management
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Download Button */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.8, duration: 0.6 }}
//         className="flex justify-center"
//       >
//         <Button
//           onClick={openCVForPrint}
//           size="lg"
//           className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold group"
//         >
//           <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
//           View & Print CV
//           <Printer className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
//         </Button>
//       </motion.div>
//     </>
//   );
// }

'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Printer } from 'lucide-react';
import { motion } from '@/lib/framer-motion';

export function CVDownload() {
  const cvRef = useRef<HTMLDivElement>(null);

  const openCVForPrint = () => {
    if (!cvRef.current) return;

    const cvWindow = window.open('', '_blank');
    if (cvWindow) {
      cvWindow.document.write(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Brice AVOM - Senior Full-Stack Developer</title>
                        <style>
                            @media print {
                                body { margin: 0; }
                                .no-print { display: none; }
                            }
                            body { 
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
                                margin: 20px; 
                                background: white;
                                color: #333;
                                line-height: 1.6;
                            }
                            .cv-content { 
                                max-width: 800px; 
                                margin: 0 auto; 
                                padding: 20px;
                                background: white;
                                font-size: 14px;
                            }
                            .print-button {
                                position: fixed;
                                top: 20px;
                                right: 20px;
                                padding: 10px 20px;
                                background: #2563eb;
                                color: white;
                                border: none;
                                border-radius: 8px;
                                cursor: pointer;
                                font-size: 16px;
                                font-weight: 600;
                                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                            }
                            .print-button:hover {
                                background: #1d4ed8;
                            }
                            .header { 
                                text-align: center; 
                                margin-bottom: 30px; 
                                border-bottom: 3px solid #2563eb; 
                                padding-bottom: 20px; 
                            }
                            .name { 
                                font-size: 36px; 
                                font-weight: 700; 
                                margin: 0 0 8px 0; 
                                color: #1f2937; 
                                letter-spacing: -0.5px;
                            }
                            .title { 
                                font-size: 18px; 
                                margin: 0 0 15px 0; 
                                color: #2563eb; 
                                font-weight: 600;
                            }
                            .contact-info { 
                                font-size: 14px; 
                                color: #6b7280; 
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                                gap: 20px;
                            }
                            .contact-item {
                                display: flex;
                                align-items: center;
                                gap: 4px;
                            }
                            .section { 
                                margin-bottom: 25px; 
                            }
                            .section-title { 
                                font-size: 18px; 
                                font-weight: 700; 
                                color: #1f2937; 
                                border-bottom: 2px solid #2563eb; 
                                padding-bottom: 6px; 
                                margin-bottom: 15px; 
                                text-transform: uppercase;
                                letter-spacing: 0.5px;
                            }
                            .summary { 
                                font-size: 15px; 
                                line-height: 1.7; 
                                color: #374151; 
                                text-align: justify;
                                margin: 0;
                            }
                            .skills-grid { 
                                display: grid; 
                                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
                                gap: 20px; 
                                margin-top: 10px; 
                            }
                            .skill-category { 
                                background: #f9fafb;
                                padding: 15px;
                                border-radius: 8px;
                                border-left: 4px solid #2563eb;
                            }
                            .skill-title { 
                                font-size: 16px; 
                                font-weight: 600; 
                                color: #1f2937; 
                                margin-bottom: 10px; 
                            }
                            .skill-item { 
                                margin-bottom: 6px; 
                                font-size: 13px; 
                                line-height: 1.5; 
                            }
                            .skill-label { 
                                font-weight: 600; 
                                color: #374151; 
                                min-width: 80px;
                                display: inline-block;
                            }
                            .experience-item, .project-item { 
                                margin-bottom: 20px; 
                                padding: 15px;
                                background: #f9fafb;
                                border-radius: 8px;
                                border-left: 4px solid #10b981;
                            }
                            .job-title, .project-title { 
                                font-size: 16px; 
                                font-weight: 600; 
                                color: #1f2937; 
                                margin: 0 0 5px 0; 
                            }
                            .company, .project-tech { 
                                font-size: 14px; 
                                color: #2563eb; 
                                font-weight: 500; 
                                margin: 0 0 8px 0; 
                            }
                            .duration { 
                                font-size: 13px; 
                                color: #6b7280; 
                                font-style: italic; 
                                margin: 0 0 8px 0; 
                            }
                            .description { 
                                font-size: 13px; 
                                color: #4b5563; 
                                line-height: 1.5; 
                                margin: 0; 
                            }
                            .achievement { 
                                margin: 4px 0; 
                                padding-left: 15px; 
                                position: relative; 
                            }
                            .achievement::before { 
                                content: "▶"; 
                                position: absolute; 
                                left: 0; 
                                color: #10b981; 
                                font-size: 10px; 
                            }
                            .languages-grid { 
                                display: grid; 
                                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
                                gap: 15px; 
                                margin-top: 10px; 
                            }
                            .language-item { 
                                background: #f0f9ff;
                                padding: 12px;
                                border-radius: 6px;
                                border-left: 3px solid #0ea5e9;
                            }
                            .language-name { 
                                font-weight: 600; 
                                color: #1f2937; 
                                display: block; 
                                margin-bottom: 4px; 
                            }
                            .language-level { 
                                color: #6b7280; 
                                font-size: 13px; 
                            }
                            .education-item { 
                                background: #fef3c7;
                                padding: 15px;
                                border-radius: 8px;
                                border-left: 4px solid #f59e0b;
                            }
                            .school { 
                                font-size: 16px; 
                                font-weight: 600; 
                                color: #1f2937; 
                                margin: 0 0 5px 0; 
                            }
                            .degree { 
                                font-size: 14px; 
                                color: #f59e0b; 
                                font-weight: 500; 
                                margin: 0 0 5px 0; 
                            }
                            .additional-info { 
                                display: grid; 
                                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
                                gap: 15px; 
                                margin-top: 10px; 
                            }
                            .info-category { 
                                background: #f3f4f6;
                                padding: 12px;
                                border-radius: 6px;
                                border-left: 3px solid #6b7280;
                            }
                            .info-title { 
                                font-weight: 600; 
                                color: #1f2937; 
                                margin-bottom: 8px; 
                            }
                            .info-item { 
                                font-size: 13px; 
                                color: #4b5563; 
                                margin: 2px 0; 
                            }
                            .project-link { 
                                color: #2563eb; 
                                text-decoration: none; 
                                font-weight: 500; 
                            }
                            .project-link:hover { 
                                text-decoration: underline; 
                            }
                        </style>
                    </head>
                    <body>
                        <button class="print-button no-print" onclick="window.print()">
                            🖨️ Print CV
                        </button>
                        <div class="cv-content">
                            ${cvRef.current.innerHTML}
                        </div>
                        <script>
                            setTimeout(() => {
                                if (confirm('Would you like to print your CV now?')) {
                                    window.print();
                                }
                            }, 1000);
                        </script>
                    </body>
                </html>
            `);
      cvWindow.document.close();
    }
  };

  return (
    <>
      {/* Hidden CV for display */}
      <div
        ref={cvRef}
        className="hidden"
        style={{
          width: '210mm',
          minHeight: '297mm',
          padding: '20mm',
          backgroundColor: 'white',
          color: '#333',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '14px',
          lineHeight: '1.6',
        }}
      >
        {/* Header Section */}
        <div className="header">
          <h1 className="name">Brice AVOM</h1>
          <p className="title">
            Senior Full-Stack Developer & Mobile App Specialist
          </p>
          <div className="contact-info">
            <div className="contact-item">📍 Yaoundé, Cameroon</div>
            <div className="contact-item">📧 bricefrkc@gmail.com</div>
            <div className="contact-item">📱 +237 674 85 23 04</div>
            <div className="contact-item">
              🔗{' '}
              <a href="https://github.com/frckbrice" className="project-link">
                GitHub
              </a>
            </div>
            <div className="contact-item">
              💼{' '}
              <a
                href="https://www.linkedin.com/in/avombrice/"
                className="project-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary">
            Results-driven Senior Full-Stack Developer with 3+ years of proven
            expertise in building scalable web applications and mobile
            solutions. Specialized in modern JavaScript ecosystem, microservices
            architecture, and cross-platform development. Demonstrated track
            record of delivering high-performance applications across diverse
            industries, with strong emphasis on clean code principles, optimal
            user experience, and maintainable architecture. Experienced in
            leading development projects from conception to deployment.
          </p>
        </div>

        {/* Work Experience */}
        <div className="section">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-item">
            <h3 className="job-title">Senior Full-Stack Developer</h3>
            <p className="company">Freelance & Contract Work</p>
            <p className="duration">2020 - Present | 3+ Years</p>
            <div className="description">
              <div className="achievement">
                Led end-to-end development of 10+ web applications and mobile
                apps, serving 1000+ active users
              </div>
              <div className="achievement">
                Architected and implemented microservices solutions using
                Node.js, reducing system response time by 40%
              </div>
              <div className="achievement">
                Developed cross-platform mobile applications with React Native,
                achieving 95% code reuse between iOS and Android
              </div>
              <div className="achievement">
                Integrated multiple payment gateways (Stripe, PayPal, Orange
                Money, MTN) processing $50K+ in transactions
              </div>
              <div className="achievement">
                Collaborated with international clients to deliver custom
                solutions meeting specific business requirements
              </div>
              <div className="achievement">
                Implemented CI/CD pipelines and automated testing, reducing
                deployment time by 60%
              </div>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div className="section">
          <h2 className="section-title">Featured Projects</h2>

          <div className="project-item">
            <h3 className="project-title">
              <a
                href="https://github.com/frckbrice/ra-mobile-project"
                className="project-link"
              >
                RainForest Alliance - Cocoa Management Mobile App
              </a>
            </h3>
            <p className="project-tech">
              React Native • TypeScript • AWS S3 • Payment APIs • Push
              Notifications
            </p>
            <p className="description">
              Enterprise-grade mobile application for cocoa supply chain
              management, compliant with RainForest Alliance specifications.
              Features include farmer registration, harvest tracking, payment
              processing, and real-time data synchronization. Integrated
              multiple African payment gateways and cloud storage solutions.
            </p>
          </div>

          <div className="project-item">
            <h3 className="project-title">
              <a
                href="https://github.com/frckbrice/real-time-collaborative-plateform"
                className="project-link"
              >
                Real-time Collaborative Platform
              </a>
            </h3>
            <p className="project-tech">
              Next.js 14 • TypeScript • Supabase • WebSockets • Drizzle ORM
            </p>
            <p className="description">
              Modern collaborative workspace with real-time features, user
              authentication, and database management. Implements live document
              editing, user presence indicators, and seamless data
              synchronization across multiple clients.
            </p>
          </div>

          <div className="project-item">
            <h3 className="project-title">
              <a
                href="https://github.com/frckbrice/HotelMgt"
                className="project-link"
              >
                Hotel Management System (PWA)
              </a>
            </h3>
            <p className="project-tech">
              Next.js 14 • TypeScript • Sanity CMS • Stripe • Service Workers
            </p>
            <p className="description">
              Full-featured hotel management system with booking engine, payment
              processing, and content management. Built as Progressive Web App
              with offline capabilities, achieving 95+ Lighthouse performance
              score.
            </p>
          </div>

          <div className="project-item">
            <h3 className="project-title">
              <a
                href="https://github.com/frckbrice/Clean-code-arch-REST-API"
                className="project-link"
              >
                E-commerce Backend API
              </a>
            </h3>
            <p className="project-tech">
              Node.js • MongoDB • Clean Architecture • TypeScript • Express.js
            </p>
            <p className="description">
              Scalable e-commerce backend following clean architecture
              principles. Features include order management, inventory tracking,
              user authentication, and comprehensive API documentation. Handles
              1000+ concurrent users with optimized database queries.
            </p>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="section">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-title">Frontend Development</h3>
              <div className="skill-item">
                <span className="skill-label">Languages:</span> JavaScript
                (ES6+), TypeScript, HTML5, CSS3
              </div>
              <div className="skill-item">
                <span className="skill-label">Frameworks:</span> React, Next.js,
                Angular 2
              </div>
              <div className="skill-item">
                <span className="skill-label">State Mgmt:</span> Redux, Zustand,
                React Query, Context API
              </div>
              <div className="skill-item">
                <span className="skill-label">Styling:</span> Tailwind CSS,
                SCSS, Shadcn/ui
              </div>
              <div className="skill-item">
                <span className="skill-label">Build Tools:</span> Vite, Webpack,
                Turbo
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">Backend Development</h3>
              <div className="skill-item">
                <span className="skill-label">Runtime:</span> Node.js, Bun
              </div>
              <div className="skill-item">
                <span className="skill-label">Frameworks:</span> Express.js,
                NestJS, Fastify
              </div>
              <div className="skill-item">
                <span className="skill-label">Communication & APIs:</span>{' '}
                RESTful, GraphQL, WebSockets, gRPC
              </div>
              <div className="skill-item">
                <span className="skill-label">Architecture:</span>{' '}
                Microservices, Clean Architecture, Event-Driven Architecture,
                DDD, CQRS
              </div>
              <div className="skill-item">
                <span className="skill-label">Languages:</span> TypeScript,
                JavaScript
              </div>
              <div className="skill-item">
                <span className="skill-label">Message Brokers:</span> Apache
                Kafka, RabbitMQ, Redis Pub/Sub
              </div>
              <div className="skill-item">
                <span className="skill-label">API Gateway:</span> API Gateway
                implementation, API versioning, API documentation
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">Mobile Development</h3>
              <div className="skill-item">
                <span className="skill-label">Framework:</span> React Native,
                Expo
              </div>
              <div className="skill-item">
                <span className="skill-label">Platforms:</span> iOS, Android
              </div>
              <div className="skill-item">
                <span className="skill-label">Features:</span> Push
                Notifications (FCM, APN)
              </div>
              <div className="skill-item">
                <span className="skill-label">Storage:</span> MMKV, AsyncStorage
              </div>
              <div className="skill-item">
                <span className="skill-label">Deployment:</span> Expo EAS, App
                Store, Google Play
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">Database & Cloud</h3>
              <div className="skill-item">
                <span className="skill-label">SQL:</span> PostgreSQL, MySQL,
                SQLite
              </div>
              <div className="skill-item">
                <span className="skill-label">NoSQL:</span> MongoDB, Redis
              </div>
              <div className="skill-item">
                <span className="skill-label">BaaS:</span> Firebase, Supabase
              </div>
              <div className="skill-item">
                <span className="skill-label">Cloud:</span> AWS S3, Vercel,
                Netlify, Cloudinary, Cloud Storage
              </div>
              <div className="skill-item">
                <span className="skill-label">ORMs:</span> Prisma, Drizzle,
                Mongoose, Sequelize
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">DevOps & Tools</h3>
              <div className="skill-item">
                <span className="skill-label">Version Control:</span> Git,
                GitHub Actions
              </div>
              <div className="skill-item">
                <span className="skill-label">Containers:</span> Docker,
                Kubernetes
              </div>
              <div className="skill-item">
                <span className="skill-label">CI/CD:</span> GitHub Actions,
                Vercel
              </div>
              <div className="skill-item">
                <span className="skill-label">Monitoring:</span> Lighthouse,
                Sentry
              </div>
              <div className="skill-item">
                <span className="skill-label">Testing:</span> Jest, Cypress,
                Playwright, Vitest
              </div>
            </div>

            <div className="skill-category">
              <h3 className="skill-title">Integration & APIs</h3>
              <div className="skill-item">
                <span className="skill-label">Payments:</span> Stripe, PayPal,
                Orange Money, MTN
              </div>
              <div className="skill-item">
                <span className="skill-label">Auth:</span> OAuth 2.0, JWT,
                NextAuth
              </div>
              <div className="skill-item">
                <span className="skill-label">CMS:</span> Sanity.io, Strapi,
                Comvex
              </div>
              <div className="skill-item">
                <span className="skill-label">APIs:</span> REST, GraphQL,
                WebSockets
              </div>
              <div className="skill-item">
                <span className="skill-label">Third-party:</span> Google Maps,
                Twilio, SendGrid
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="section">
          <h2 className="section-title">Education</h2>
          <div className="education-item">
            <h3 className="school">University of Bamenda</h3>
            <p className="degree">Bachelor's in Computer Science</p>
            <p className="duration">2016 - 2017</p>
            <p className="description">
              Specialized in software engineering, algorithms, and data
              structures. Completed advanced coursework in web development,
              database systems, and software architecture patterns.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="section">
          <h2 className="section-title">Certifications & Training</h2>
          <div className="additional-info">
            <div className="info-category">
              <div className="info-title">React Native Development</div>
              <div className="info-item">
                Advanced mobile app development with React Native and Expo
                (Udemy)
              </div>
            </div>
            <div className="info-category">
              <div className="info-title">Next.js 14 Masterclass</div>
              <div className="info-item">
                Full-stack development with Next.js and TypeScript (Udemy)
              </div>
            </div>
            <div className="info-category">
              <div className="info-title">Google Cloud Professional</div>
              <div className="info-item">
                Cloud computing fundamentals and GCP services (Google Skill
                Boost)
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="section">
          <h2 className="section-title">Languages</h2>
          <div className="languages-grid">
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">
                Professional Working Proficiency
              </span>
            </div>
            <div className="language-item">
              <span className="language-name">French</span>
              <span className="language-level">Native Proficiency</span>
            </div>
            <div className="language-item">
              <span className="language-name">Cameroonian Pidgin</span>
              <span className="language-level">Native Proficiency</span>
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="section">
          <h2 className="section-title">Additional Skills & Methodologies</h2>
          <div className="additional-info">
            <div className="info-category">
              <div className="info-title">Methodologies</div>
              <div className="info-item">• Agile/Scrum Development</div>
              <div className="info-item">• Test-Driven Development (TDD)</div>
              <div className="info-item">• Clean Code Principles</div>
            </div>
            <div className="info-category">
              <div className="info-title">Performance & Security</div>
              <div className="info-item">• Web Performance Optimization</div>
              <div className="info-item">• Security Best Practices</div>
              <div className="info-item">• SEO & Accessibility</div>
            </div>
            <div className="info-category">
              <div className="info-title">Soft Skills</div>
              <div className="info-item">• Project Leadership</div>
              <div className="info-item">• Client Communication</div>
              <div className="info-item">• Problem-Solving</div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex justify-center"
      >
        <Button
          onClick={openCVForPrint}
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold group"
        >
          <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
          View & Print CV
          <Printer className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
        </Button>
      </motion.div>
    </>
  );
}
