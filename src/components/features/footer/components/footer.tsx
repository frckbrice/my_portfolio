'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
} from 'lucide-react';
import { ModeToggle } from '../../header/components/toggle-theme';

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/frckbrice',
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/avombrice/',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    name: 'Email',
    url: 'mailto:bricefrkc@gmail.com',
    icon: <Mail className="w-5 h-5" />,
  },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work Experience', href: '/work-experience' },
  { name: 'GitHub Projects', href: '/github-projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gradient-to-t from-muted/20 to-transparent border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              AVOM <span className="text-accent">Brice</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Full-stack software engineer passionate about creating innovative
              digital solutions that drive business growth and user
              satisfaction.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="p-2 bg-card/50 rounded-lg hover:bg-accent/20 hover:text-accent transition-all duration-300 theme-transition"
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Web Development</li>
              <li className="text-muted-foreground">Mobile Development</li>
              <li className="text-muted-foreground">Full-Stack Solutions</li>
              <li className="text-muted-foreground">API Development</li>
              <li className="text-muted-foreground">Database Design</li>
              <li className="text-muted-foreground">Technical Consulting</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>bricefrkc@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span>(+237) 658 527 973</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Yaounde, Cameroon</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>&copy; {currentYear} AVOM Brice. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400" /> in Cameroon
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <ModeToggle />
            </motion.div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-accent/20 rounded-full hover:bg-accent/30 transition-colors duration-300"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-accent" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
