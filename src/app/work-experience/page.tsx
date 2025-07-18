import React from 'react';
import { WorkInterface } from '@/components/features/work';
import { GitHubProjectsSection } from '@/components/features/github-projects';

// generate metadata
export const metadata = {
  title: 'AVOM Brice - Work Experience & Projects',
  description:
    'Explore my portfolio projects and GitHub contributions showcasing full-stack development expertise.',
};

export default function WorkExperiencePage() {
  return (
    <>
      <WorkInterface />
      <GitHubProjectsSection isInWorkExperience={true} />
    </>
  );
}
