import { GitHubProjectsSection } from '@/components/features/github-projects';
import { GitHubProfileStats } from '@/components/features/github-projects/components/github-profile-stats';

interface GitHubProjectsPageProps {
  searchParams: Promise<{ filter?: string }>;
}

export default async function GitHubProjectsPage({
  searchParams,
}: GitHubProjectsPageProps) {
  const params = await searchParams;
  const filter = params.filter || '';

  return (
    <>
      <GitHubProfileStats />
      <GitHubProjectsSection filter={filter} />
    </>
  );
}
