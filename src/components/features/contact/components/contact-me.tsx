'use client';

// lib
import * as React from 'react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// components
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from '@/components/ui/select';

// components
import { SmartCVDownload } from './smart-cv-download';

// local type
import { ContactType, InputType } from '../api/type';

export interface IContactProps {
  infos: ContactType[];
  inputs: InputType[];
}

export function Contact({ infos, inputs }: IContactProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormData({ name: '', email: '', service: '', message: '' });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.6,
          ease: 'easeIn',
        },
      }}
      className="py-16 xl:py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring
            your ideas to life with innovative solutions.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          {/* Contact Info - Now on the left for better UX */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-1 order-1 xl:order-none"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Contact Information
              </h3>
              <ul className="flex flex-col gap-8">
                {infos.map((info, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-16 h-16 bg-accent/20 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <div className="text-2xl">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-muted-foreground text-sm font-medium mb-1">
                        {info.title}
                      </div>
                      <div className="text-foreground text-lg font-semibold">
                        {info.description}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>

              {/* CV Download Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-8 pt-8 border-t border-border"
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Download My CV
                </h4>
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Get a copy of my detailed resume to learn more about my
                  experience and skills.
                </p>

                {/* CV Download Button */}
                <SmartCVDownload />
              </motion.div>

              {/* About/Why Work With Me Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="mt-10 p-6 rounded-2xl border-l-4 border-accent bg-accent/5 shadow-sm"
              >
                <h4 className="text-xl font-bold text-accent mb-3 flex items-center gap-2">
                  <span role="img" aria-label="lightbulb">
                    💡
                  </span>{' '}
                  Why work with me?
                </h4>
                <p className="text-foreground mb-4 text-justify  ">
                  Innovative problem-solver with a passion for crafting
                  high-performance, scalable web & mobile applications.
                  Expertise in modern tech stacks, including{' '}
                  <span className="font-semibold text-accent">
                    React, React Native, Angular, Node.js
                  </span>
                  , and cloud platforms, to deliver seamless digital
                  experiences. Proven ability to architect robust systems,
                  optimize performance, and drive impactful solutions—from
                  concept to deployment. Let’s build the future, one line of
                  code at a time.
                </p>
                <ul className="mb-4 space-y-2 text-base text-muted-foreground">
                  <li className="flex items-start gap-2 text-justify ">
                    <span className="text-accent">✔</span> Full-stack
                    proficiency – From UI/UX (React, Angular) to backend
                    (Node.js) and cloud integrations.
                  </li>
                  <li className="flex items-start gap-2 text-justify ">
                    <span className="text-accent">✔</span> Mobile-first mindset
                    – Skilled in React Native & Expo for cross-platform excellence.
                  </li>
                  <li className="flex items-start gap-2 text-justify ">
                    <span className="text-accent">✔</span> Performance-driven –
                    Build scalable apps that handle real-world demands.
                  </li>
                  <li className="flex items-start gap-2 text-justify ">
                    <span className="text-accent">✔</span> Collaborative &
                    adaptable – Thrive in agile teams, startups, or enterprise
                    environments.
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-lg font-semibold text-accent mt-2">
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>{' '}
                  Let’s connect and create something extraordinary!
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="xl:w-[45%] order-2 xl:order-none"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Let's work together
              </h3>
              <p className="text-muted-foreground mb-8 text-justify">
                Ready to bring your ideas to life? Whether you need a full-stack
                application, mobile app, or custom software solution, I'm here
                to help. Let's discuss your project requirements and create
                something amazing together.
              </p>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
                >
                  <p className="text-green-600 font-medium">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
                >
                  <p className="text-blue-600 font-medium">
                    ❌ There was an error sending your message. Please try again
                    or contact me directly at bricefrkc@gmail.com
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <label
                      htmlFor="name"
                      className="text-base font-medium text-muted-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={e => handleInputChange('name', e.target.value)}
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-muted-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={e => handleInputChange('email', e.target.value)}
                      required
                    />
                  </motion.div>
                </div>

                {/* select */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                >
                  <label
                    htmlFor="service"
                    className="text-base font-medium text-muted-foreground"
                  >
                    Service
                  </label>
                  <SelectServices
                    value={formData.service}
                    onValueChange={value => handleInputChange('service', value)}
                  />
                </motion.div>

                {/* textArea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  <label
                    htmlFor="message"
                    className="text-base font-medium text-muted-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, timeline, and any specific requirements you have..."
                    className="min-h-[120px] text-base"
                    value={formData.message}
                    onChange={e => handleInputChange('message', e.target.value)}
                    required
                  />
                </motion.div>

                {/* button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <Button
                    size={'lg'}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// Select services
interface SelectServicesProps {
  value: string;
  onValueChange: (value: string) => void;
}

function SelectServices({ value, onValueChange }: SelectServicesProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a service</SelectLabel>
          <SelectItem value="TypeScript & Node.js Programming">
            TypeScript & Node.js Programming
          </SelectItem>
          <SelectItem value="Mobile Development">Mobile Development</SelectItem>
          <SelectItem value="Web Development - Frontend">
            Web Development - Frontend
          </SelectItem>
          <SelectItem value="Web Development - Backend">
            Web Development - Backend
          </SelectItem>
          <SelectItem value="Full-Stack Development">
            Full-Stack Development
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
