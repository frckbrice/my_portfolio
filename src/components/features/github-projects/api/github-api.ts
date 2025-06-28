import { GitHubProject, GitHubProjectsResponse } from './type';

const GITHUB_USERNAME = 'frckbrice';

export class GitHubAPI {
    static async fetchUserRepositories(): Promise<GitHubProject[]> {
        try {
            const response = await fetch(
                `/api/github?endpoint=/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12&type=owner`
            );

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status}`);
            }

            const repos = await response.json();

            // Filter out archived and forked repositories, and sort by stars
            return repos
                .filter((repo: GitHubProject) => !repo.archived && !repo.fork)
                .sort((a: GitHubProject, b: GitHubProject) => b.stargazers_count - a.stargazers_count)
                .slice(0, 8); // Limit to top 8 projects
        } catch (error) {
            console.error('Error fetching GitHub repositories:', error);
            throw error;
        }
    }

    static async fetchRepositoryTopics(repoName: string): Promise<string[]> {
        try {
            const response = await fetch(
                `/api/github?endpoint=/repos/${GITHUB_USERNAME}/${repoName}/topics`,
                {
                    headers: {
                        'Accept': 'application/vnd.github.mercy-preview+json',
                    },
                }
            );

            if (!response.ok) {
                return [];
            }

            const data = await response.json();
            return data.names || [];
        } catch (error) {
            console.error('Error fetching repository topics:', error);
            return [];
        }
    }

    static getLanguageColor(language: string | null): string {
        const colors: { [key: string]: string } = {
            'JavaScript': '#f1e05a',
            'TypeScript': '#2b7489',
            'Python': '#3572A5',
            'Java': '#b07219',
            'C++': '#f34b7d',
            'C#': '#178600',
            'PHP': '#4F5D95',
            'Ruby': '#701516',
            'Go': '#00ADD8',
            'Rust': '#dea584',
            'Swift': '#ffac45',
            'Kotlin': '#F18E33',
            'Dart': '#00B4AB',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'SCSS': '#c6538c',
            'Vue': '#41b883',
            'React': '#61dafb',
        };

        return colors[language || ''] || '#586069';
    }
} 