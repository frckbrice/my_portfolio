export interface GitHubProject {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  visibility: string;
  archived: boolean;
  fork: boolean;
}

export interface GitHubProjectsResponse {
  projects: GitHubProject[];
  loading: boolean;
  error: string | null;
}
