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
                        <title>Brice AVOM - CV</title>
                        <style>
                            @media print {
                                body { margin: 0; }
                                .no-print { display: none; }
                            }
                            body { 
                                font-family: Arial, sans-serif; 
                                margin: 20px; 
                                background: white;
                                color: black;
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
                                background: #007bff;
                                color: white;
                                border: none;
                                border-radius: 5px;
                                cursor: pointer;
                                font-size: 16px;
                            }
                            .print-button:hover {
                                background: #0056b3;
                            }
                            h1 { font-size: 32px; font-weight: bold; margin: 0; color: #333; }
                            h2 { font-size: 20px; font-weight: bold; color: #333; border-bottom: 2px solid #333; padding-bottom: 8px; margin-bottom: 15px; margin-top: 25px; }
                            h3 { font-size: 16px; font-weight: bold; color: #444; margin: 0 0 8px 0; }
                            p { margin: 4px 0; font-size: 14px; }
                            .contact-info { font-size: 14px; color: #666; }
                            .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px; }
                            .skill-category h3 { font-size: 16px; font-weight: bold; color: #555; margin-bottom: 8px; }
                            .skill-category p { font-size: 13px; margin: 0; line-height: 1.5; }
                            .project { margin-bottom: 15px; }
                            .project h3 { font-size: 16px; font-weight: bold; color: #444; margin: 0 0 5px 0; }
                            .project h3 a { color: #007bff; text-decoration: none; }
                            .project h3 a:hover { text-decoration: underline; }
                            .project p { font-size: 13px; margin: 0; color: #666; line-height: 1.4; }
                            .languages-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px; }
                            .language-item { margin-bottom: 8px; }
                            .language-name { font-weight: bold; color: #555; }
                            .language-level { color: #666; font-style: italic; }
                            .certification { margin-bottom: 12px; }
                            .certification h4 { font-size: 15px; font-weight: bold; color: #444; margin: 0 0 3px 0; }
                            .certification p { font-size: 13px; margin: 0; color: #666; }
                            .section { margin-bottom: 25px; }
                            .header-section { text-align: center; margin-bottom: 25px; border-bottom: 3px solid #333; padding-bottom: 20px; }
                            .summary-text { text-align: justify; margin: 0; font-size: 14px; line-height: 1.6; }
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
                            // Auto-print after a short delay
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
          color: 'black',
          fontFamily: 'Arial, sans-serif',
          fontSize: '14px',
          lineHeight: '1.6',
        }}
      >
        {/* Header Section */}
        <div className="header-section">
          <h1
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              margin: '0',
              color: '#333',
            }}
          >
            Brice AVOM
          </h1>
          <p style={{ fontSize: '20px', margin: '8px 0', color: '#666' }}>
            Full-Stack Developer & Mobile App Developer
          </p>
          <div style={{ fontSize: '14px', color: '#666' }}>
            <p style={{ margin: '4px 0' }}>📍 Cameroon</p>
            <p style={{ margin: '4px 0' }}>📧 bricefrkc@gmail.com</p>
            <p style={{ margin: '4px 0' }}>🔗 github.com/frckbrice</p>
            <p style={{ margin: '4px 0' }}>📱 +237 6XX XXX XXX</p>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="section">
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              borderBottom: '2px solid #333',
              paddingBottom: '8px',
              marginBottom: '15px',
            }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p className="summary-text">
            Experienced Full-Stack Developer with 4+ years of expertise in
            modern web technologies and mobile app development. Specialized in
            React, Next.js, TypeScript, Node.js, and React Native. Passionate
            about creating scalable, user-friendly applications with clean
            architecture and best practices. Proven track record of delivering
            high-quality solutions for diverse industries including e-commerce,
            real-time collaboration, and mobile applications.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="section">
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              borderBottom: '2px solid #333',
              paddingBottom: '8px',
              marginBottom: '15px',
            }}
          >
            TECHNICAL SKILLS
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#555',
                  marginBottom: '8px',
                }}
              >
                Frontend Development
              </h3>
              <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
                React, Next.js, TypeScript, Angular 2, Tailwind CSS, Vite,
                HTML5, CSS3, JavaScript (ES6+), Redux, Zustand, React Query
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#555',
                  marginBottom: '8px',
                }}
              >
                Backend Development
              </h3>
              <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
                Node.js, Express.js, NestJS, TypeScript, RESTful APIs, GraphQL,
                Microservices Architecture
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#555',
                  marginBottom: '8px',
                }}
              >
                Mobile Development
              </h3>
              <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
                React Native, Expo, Android, iOS, FCM, APN, MMKV, Expo
                EAS/Workflow, Mobile App Deployment
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#555',
                  marginBottom: '8px',
                }}
              >
                Databases & Cloud
              </h3>
              <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
                MongoDB, PostgreSQL, MySQL, SQLite, Redis, Firebase, Supabase,
                AWS S3, Cloud Storage
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#555',
                  marginBottom: '8px',
                }}
              >
                DevOps & Tools
              </h3>
              <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
                Git, Docker, Kubernetes, CI/CD, Vercel, Heroku, Netlify,
                Cloudflare, Nginx, Apache
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#555',
                  marginBottom: '8px',
                }}
              >
                Payment & APIs
              </h3>
              <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5' }}>
                Stripe API, PayPal, Orange Money API, MTN Mobile Money API,
                Third-party API Integration
              </p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="section">
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              borderBottom: '2px solid #333',
              paddingBottom: '8px',
              marginBottom: '15px',
            }}
          >
            LANGUAGES
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
            }}
          >
            <div className="language-item">
              <span className="language-name">English</span> -{' '}
              <span className="language-level">
                Professional Working Proficiency
              </span>
            </div>
            <div className="language-item">
              <span className="language-name">French</span> -{' '}
              <span className="language-level">Native Proficiency</span>
            </div>
            <div className="language-item">
              <span className="language-name">Cameroonian Pidgin</span> -{' '}
              <span className="language-level">Native Proficiency</span>
            </div>
          </div>
        </div>

        {/* Key Projects */}
        <div className="section">
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              borderBottom: '2px solid #333',
              paddingBottom: '8px',
              marginBottom: '15px',
            }}
          >
            KEY PROJECTS
          </h2>
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#444',
                margin: '0 0 5px 0',
              }}
            >
              <a
                href="https://github.com/frckbrice/real-time-collaborative-plateform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Real-time Collaborative Platform
              </a>
            </h3>
            <p
              style={{
                fontSize: '13px',
                margin: '0',
                color: '#666',
                lineHeight: '1.4',
              }}
            >
              Next.js 14, TypeScript, Supabase, Supabase Auth, Supabase
              Realtime, Drizzle ORM, Real-time collaboration features, User
              authentication, Database management
            </p>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#444',
                margin: '0 0 5px 0',
              }}
            >
              <a
                href="https://github.com/frckbriceClean-code-arch-REST-API"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-commerce Backend
              </a>
            </h3>
            <p
              style={{
                fontSize: '13px',
                margin: '0',
                color: '#666',
                lineHeight: '1.4',
              }}
            >
              Node.js, MongoDB, Clean Architecture, TypeScript, Express.js,
              RESTful APIs, Payment integration, Order management system
            </p>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#444',
                margin: '0 0 5px 0',
              }}
            >
              <a
                href="https://github.com/frckbrice/ra-mobile-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mobile App for Cocoa Management (RainForest Alliance)
              </a>
            </h3>
            <p
              style={{
                fontSize: '13px',
                margin: '0',
                color: '#666',
                lineHeight: '1.4',
              }}
            >
              React Native, Expo, TypeScript, AWS S3, Orange Money API, MTN
              Mobile Money API, PayPal Payment Gateway, FCM, APN, MMKV,
              Compliance with RainForest Alliance specifications
            </p>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#444',
                margin: '0 0 5px 0',
              }}
            >
              <a
                href="https://github.com/frckbrice/HotelMgt"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full-stack Web Application for Hotel Management
              </a>
            </h3>
            <p
              style={{
                fontSize: '13px',
                margin: '0',
                color: '#666',
                lineHeight: '1.4',
              }}
            >
              Next.js 14, TypeScript, Sanity.io CMS, Service Worker, Next-auth,
              Stripe API, TailwindCSS, Progressive Web App (PWA), Booking
              system, Payment processing
            </p>
          </div>
        </div>

        {/* Work Experience */}
        <div className="section">
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              borderBottom: '2px solid #333',
              paddingBottom: '8px',
              marginBottom: '15px',
            }}
          >
            WORK EXPERIENCE
          </h2>
          <div style={{ marginBottom: '15px' }}>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#444',
                margin: '0 0 5px 0',
              }}
            >
              Full-Stack Developer - Freelance
            </h3>
            <p
              style={{
                fontSize: '13px',
                margin: '0',
                color: '#666',
                fontStyle: 'italic',
              }}
            >
              2020 - Present
            </p>
            <p
              style={{
                fontSize: '13px',
                margin: '8px 0 0 0',
                color: '#666',
                lineHeight: '1.4',
              }}
            >
              • Developed and maintained full-stack web applications using
              React, Next.js, and Node.js
              <br />
              • Built mobile applications with React Native and Expo for iOS and
              Android platforms
              <br />
              • Implemented payment gateways and third-party API integrations
              <br />• Collaborated with clients to understand requirements and
              deliver scalable solutions
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="section">
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              borderBottom: '2px solid #333',
              paddingBottom: '8px',
              marginBottom: '15px',
            }}
          >
            CERTIFICATIONS & TRAINING
          </h2>
          <div className="certification">
            <h4
              style={{
                fontSize: '15px',
                fontWeight: 'bold',
                color: '#444',
                margin: '0 0 3px 0',
              }}
            >
              React Native Development - Udemy
            </h4>
            <p style={{ fontSize: '13px', margin: '0', color: '#666' }}>
              Advanced mobile app development with React Native and Expo
            </p>
          </div>
          <div className="certification">
            <h4
              style={{
                fontSize: '15px',
                fontWeight: 'bold',
                color: '#444',
                margin: '0 0 3px 0',
              }}
            >
              Next.js 14 Masterclass - Udemy
            </h4>
            <p style={{ fontSize: '13px', margin: '0', color: '#666' }}>
              Full-stack development with Next.js, TypeScript, and modern web
              technologies
            </p>
          </div>
          <div className="certification">
            <h4
              style={{
                fontSize: '15px',
                fontWeight: 'bold',
                color: '#444',
                margin: '0 0 3px 0',
              }}
            >
              Professional Cloud Developer - Google Skill Boost
            </h4>
            <p style={{ fontSize: '13px', margin: '0', color: '#666' }}>
              Cloud computing fundamentals and GCP services
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="section">
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              borderBottom: '2px solid #333',
              paddingBottom: '8px',
              marginBottom: '15px',
            }}
          >
            EDUCATION
          </h2>
          <div>
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#444',
                margin: '0 0 5px 0',
              }}
            >
              University of Bamenda
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: '#666',
                margin: '0',
                fontStyle: 'italic',
              }}
            >
              Computer Science | 2016 - 2017
            </p>
            <p
              style={{
                fontSize: '13px',
                color: '#666',
                margin: '8px 0 0 0',
                lineHeight: '1.4',
              }}
            >
              Focused on software engineering, algorithms, data structures, and
              computer systems. Completed projects in web development and
              database management.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="section">
          <h2
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#333',
              borderBottom: '2px solid #333',
              paddingBottom: '8px',
              marginBottom: '15px',
            }}
          >
            ADDITIONAL INFORMATION
          </h2>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.5' }}>
            <p style={{ margin: '4px 0' }}>
              • <strong>Agile Methodologies:</strong> Scrum, Kanban, Sprint
              Planning
            </p>
            <p style={{ margin: '4px 0' }}>
              • <strong>Version Control:</strong> Git, GitHub, Git Actions
            </p>
            <p style={{ margin: '4px 0' }}>
              • <strong>Testing:</strong> Jest, Cypress
            </p>
            <p style={{ margin: '4px 0' }}>
              • <strong>Performance:</strong> Lighthouse, Core Web Vitals, SEO
              optimization
            </p>
            <p style={{ margin: '4px 0' }}>
              • <strong>Security:</strong> OAuth 2.0, JWT, HTTPS, Data
              encryption
            </p>
            <p style={{ margin: '4px 0' }}>
              • <strong>Soft Skills:</strong> Problem-solving, Team
              collaboration, Communication, Time management
            </p>
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
