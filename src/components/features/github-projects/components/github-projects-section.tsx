'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from '@/lib/framer-motion';
import { GitHubProject } from '../api/type';
import { GitHubAPI } from '../api/github-api';
import { GitHubProjectCard } from './github-project-card';
import { services } from '../../services/api/data';
import { X } from 'lucide-react';
import Link from 'next/link';
import { exclusionKeywords } from '../api/data';

interface GitHubProjectsSectionProps {
  filter?: string;
  isInWorkExperience?: boolean;
}



export function GitHubProjectsSection({ filter, isInWorkExperience }: GitHubProjectsSectionProps) {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get filter info
  const filterInfo = useMemo(() => {
    if (!filter) return null;
    return services.find(service => service.href.includes(`filter=${filter}`));
  }, [filter]);

  // Filter projects based on the filter parameter
  const filteredProjects = useMemo(() => {
    if (!filter || !filterInfo?.filterKeywords) return projects;

    return projects.filter(project => {
      const searchText =
        `${project.name} ${project.description || ''} ${project.topics?.join(' ') || ''}`.toLowerCase();

      // Check if project matches the current filter
      const matchesCurrentFilter = filterInfo.filterKeywords!.some(keyword => {
        // Use word boundary matching for more accurate results
        const regex = new RegExp(`\\b${keyword.toLowerCase()}\\b`);
        return regex.test(searchText);
      });

      // For more accuracy, exclude projects that clearly belong to other categories
      if (matchesCurrentFilter) {
        // Define exclusion keywords for each category


        const currentExclusions =
          exclusionKeywords[filter as keyof typeof exclusionKeywords] || [];
        const hasExclusionKeywords = currentExclusions.some(keyword => {
          const regex = new RegExp(`\\b${keyword.toLowerCase()}\\b`);
          return regex.test(searchText);
        });

        return !hasExclusionKeywords;
      }

      return false;
    });
  }, [projects, filter, filterInfo]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const repos = await GitHubAPI.fetchUserRepositories();

        // Check if we got any repositories
        if (!repos || repos.length === 0) {
          setError('No repositories found or GitHub API is unavailable');
          return;
        }

        // Fetch topics for each repository
        const reposWithTopics = await Promise.all(
          repos.map(async repo => {
            const topics = await GitHubAPI.fetchRepositoryTopics(repo.name);
            return { ...repo, topics };
          })
        );

        setProjects(reposWithTopics);
      } catch (err) {
        setError('Failed to fetch GitHub projects');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Auto-scroll to projects when coming from services page
  useEffect(() => {
    if (filter && !loading && filteredProjects.length > 0) {
      // Small delay to ensure the page has rendered
      const timer = setTimeout(() => {
        const projectsSection = document.querySelector(
          '[data-projects-section]'
        );
        if (projectsSection) {
          projectsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [filter, loading, filteredProjects.length]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[60vh] flex items-center justify-center"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading GitHub projects...</p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[60vh] flex items-center justify-center"
      >
        <div className="text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
          >
            Try Again
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 xl:px-0"
    >
      {/* add separator between work experience and github projects */}
      {isInWorkExperience && <div className="h-16 w-full my-16"></div>}
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl xl:text-4xl font-bold text-foreground mb-4">
            {filterInfo ? `${filterInfo.title} ` : ''}
            <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {filterInfo
              ? `Projects related to ${filterInfo.title.toLowerCase()}`
              : 'A showcase of my latest repositories and contributions. Each project demonstrates different technologies and problem-solving approaches.'}
          </p>

          {/* Filter Indicator */}
          {filterInfo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex items-center justify-center gap-3"
            >
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Filtered by: {filterInfo.title}
              </span>
              <Link
                href="/github-projects"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                title="Clear filter"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </Link>
            </motion.div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          data-projects-section
        >
          {filteredProjects.map((project, index) => (
            <GitHubProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && !loading && !error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground mb-4">
              {filterInfo
                ? `No projects found for ${filterInfo.title.toLowerCase()}.`
                : 'No public repositories found.'}
            </p>
            {filterInfo && (
              <Link
                href="/github-projects"
                className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
              >
                View All Projects
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
