// libraries
import * as React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  MapPin,
  Phone,
  Globe,
  Calendar,
  Linkedin,
} from 'lucide-react';

// type
import { ExperienceType } from '../api/type';

export interface IAboutProps {
  aboutMe: Partial<ExperienceType>;
}

export function About({ aboutMe }: IAboutProps) {
  const getIconForField = (fieldName: string) => {
    const field = fieldName.toLowerCase();
    if (field.includes('email') || field.includes('mail'))
      return <Mail className="w-4 h-4" />;
    if (field.includes('location') || field.includes('address'))
      return <MapPin className="w-4 h-4" />;
    if (field.includes('phone') || field.includes('mobile'))
      return <Phone className="w-4 h-4" />;
    if (field.includes('linkedin')) return <Linkedin className="w-4 h-4" />;
    if (field.includes('website') || field.includes('portfolio'))
      return <Globe className="w-4 h-4" />;
    if (field.includes('birth') || field.includes('age'))
      return <Calendar className="w-4 h-4" />;
    return <User className="w-4 h-4" />;
  };

  const formatFieldValue = (
    fieldName: string,
    fieldValue: string | undefined
  ) => {
    if (!fieldValue) return '';

    const field = fieldName.toLowerCase();

    // Handle LinkedIn links
    if (field.includes('linkedin')) {
      const username = fieldValue.split('/').pop() || 'avombrice';
      return (
        <a
          href={fieldValue}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 transition-colors duration-300 break-all"
        >
          <span className="hidden sm:inline">linkedin.com/in/</span>
          {username}
        </a>
      );
    }

    // Handle email links
    if (field.includes('email')) {
      return (
        <a
          href={`mailto:${fieldValue}`}
          className="text-accent hover:text-accent/80 transition-colors duration-300 break-all"
        >
          {fieldValue}
        </a>
      );
    }

    // Handle phone numbers
    if (field.includes('phone')) {
      return (
        <a
          href={`tel:${fieldValue.replace(/\s+/g, '')}`}
          className="text-accent hover:text-accent/80 transition-colors duration-300 break-all"
        >
          {fieldValue}
        </a>
      );
    }

    // Default case
    return fieldValue;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      {/* Header Section */}
      <div className="text-center xl:text-left space-y-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl xl:text-5xl font-bold
           text-foreground bg-gradient-to-r 
           from-foreground to-muted-foreground 
           bg-clip-text  leading-tight"
        >
          {aboutMe.title}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full  xl:mx-0"
        >
          <p
            className="text-muted-foreground 
          text-lg xl:text-xl leading-relaxed 
           xl:text-left text-justify px-4"
          >
            {aboutMe.description}
          </p>
        </motion.div>
      </div>

      {/* Personal Information Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8"
      >
        {aboutMe.info?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            className="group"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 xl:p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <div className="text-accent group-hover:text-accent-foreground transition-colors duration-300">
                    {item.fieldName && getIconForField(item.fieldName)}
                  </div>
                </div>
                <div className="flex-1 space-y-2 min-w-0">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {item.fieldName}
                  </p>
                  <div className="text-lg xl:text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                    {item.fieldName &&
                      item.fieldValue &&
                      formatFieldValue(item.fieldName, item.fieldValue)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
