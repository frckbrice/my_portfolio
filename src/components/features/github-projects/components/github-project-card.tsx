import React from 'react';
import { motion } from '@/lib/framer-motion';
import { GitHubProject } from '../api/type';
import { GitHubAPI } from '../api/github-api';
import { BsGithub, BsStar, BsGit, BsCalendar3 } from 'react-icons/bs';
import { ExternalLink } from 'lucide-react';

interface GitHubProjectCardProps {
  project: GitHubProject;
  index: number;
}

export function GitHubProjectCard({ project, index }: GitHubProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getLanguageColor = (language: string | null) => {
    return GitHubAPI.getLanguageColor(language);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-accent/50 transition-all duration-300 group theme-transition"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
            {project.name}
          </h3>
          {project.description && (
            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
              {project.description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 ml-4">
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card/50 hover:bg-accent/20 transition-colors duration-300"
              title="Live Demo"
              aria-label={`View live demo of ${project.name}`}
            >
              <ExternalLink className="w-4 h-4 text-foreground" />
            </a>
          )}
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-card/50 hover:bg-accent/20 transition-colors duration-300"
            title="View on GitHub"
            aria-label={`View ${project.name} on GitHub`}
          >
            <BsGithub className="w-4 h-4 text-foreground" />
          </a>
        </div>
      </div>

      {/* Language and Stats */}
      <div className="flex items-center justify-between mb-4">
        {project.language && (
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getLanguageColor(project.language) }}
            />
            <span className="text-muted-foreground text-sm">
              {project.language}
            </span>
          </div>
        )}
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <div className="flex items-center gap-1">
            <BsStar className="w-3 h-3" />
            <span>{project.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <BsGit className="w-3 h-3" />
            <span>{project.forks_count}</span>
          </div>
        </div>
      </div>

      {/* Topics */}
      {project.topics && project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics.slice(0, 3).map((topic, topicIndex) => (
            <span
              key={topicIndex}
              className="px-2 py-1 bg-accent/20 text-accent-foreground text-xs rounded-full"
            >
              {topic}
            </span>
          ))}
          {project.topics.length > 3 && (
            <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full">
              +{project.topics.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Updated Date */}
      <div className="flex items-center gap-2 text-muted-foreground text-xs">
        <BsCalendar3 className="w-3 h-3" />
        <span>Updated {formatDate(project.updated_at)}</span>
      </div>
    </motion.div>
  );
}
