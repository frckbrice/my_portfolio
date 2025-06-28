import { GitHubProjectsSection } from "@/components/features/github-projects";
import { GitHubProfileStats } from "@/components/features/github-projects/components/github-profile-stats";

interface GitHubProjectsPageProps {
    searchParams: { filter?: string };
}

export default function GitHubProjectsPage({ searchParams }: GitHubProjectsPageProps) {
    const filter = searchParams.filter || '';

    return (
        <>
            <GitHubProfileStats />
            <GitHubProjectsSection filter={filter} />
        </>
    );
} 