import { NextRequest, NextResponse } from 'next/server';

const GITHUB_USERNAME = 'frckbrice';
const GITHUB_API_BASE = 'https://api.github.com';

// Fallback data in case GitHub API is unavailable
const fallbackUserData = {
    login: 'frckbrice',
    name: 'AVOM Brice',
    bio: 'Full-stack software engineer passionate about creating innovative digital solutions',
    public_repos: 25,
    followers: 15,
    following: 20,
    created_at: '2021-01-01T00:00:00Z',
    location: 'Yaounde, Cameroon',
    blog: 'https://avombrice.com',
    company: 'Freelance',
    twitter_username: null
};

const fallbackReposData = [
    {
        id: 1,
        name: 'portfolio-website',
        description: 'My personal portfolio website built with Next.js and TypeScript',
        html_url: 'https://github.com/frckbrice/portfolio-website',
        homepage: 'https://avombrice.com',
        language: 'TypeScript',
        stargazers_count: 5,
        forks_count: 2,
        updated_at: '2024-12-01T00:00:00Z',
        topics: ['nextjs', 'typescript', 'portfolio']
    },
    {
        id: 2,
        name: 'ecommerce-app',
        description: 'Full-stack ecommerce application with React and Node.js',
        html_url: 'https://github.com/frckbrice/ecommerce-app',
        homepage: null,
        language: 'JavaScript',
        stargazers_count: 8,
        forks_count: 3,
        updated_at: '2024-11-15T00:00:00Z',
        topics: ['react', 'nodejs', 'ecommerce']
    },
    {
        id: 3,
        name: 'mobile-app',
        description: 'Cross-platform mobile application built with React Native',
        html_url: 'https://github.com/frckbrice/mobile-app',
        homepage: null,
        language: 'JavaScript',
        stargazers_count: 12,
        forks_count: 5,
        updated_at: '2024-10-20T00:00:00Z',
        topics: ['react-native', 'mobile', 'cross-platform']
    }
];

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const endpoint = searchParams.get('endpoint');

        if (!endpoint) {
            return NextResponse.json({ error: 'Endpoint parameter is required' }, { status: 400 });
        }

        const url = `${GITHUB_API_BASE}${endpoint}`;

        const response = await fetch(url, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'AVOM-Brice-Portfolio/1.0.0'
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        // Handle rate limiting and other errors gracefully
        if (response.status === 403) {
            console.warn('GitHub API rate limited, using fallback data');
            // Return fallback data based on the endpoint
            if (endpoint.includes('/users/')) {
                return NextResponse.json(fallbackUserData);
            } else if (endpoint.includes('/repos')) {
                return NextResponse.json(fallbackReposData);
            }
        }

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error('GitHub API error:', error);

        // Return fallback data on any error
        if (request.url.includes('/users/')) {
            return NextResponse.json(fallbackUserData);
        } else if (request.url.includes('/repos')) {
            return NextResponse.json(fallbackReposData);
        }

        return NextResponse.json(
            { error: 'Failed to fetch GitHub data' },
            { status: 500 }
        );
    }
} 