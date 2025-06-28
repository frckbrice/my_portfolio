import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'frckbrice';
const GITHUB_API_URL = 'https://api.github.com';

export async function GET() {
    try {
        const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'User-Agent': 'AVOM-Brice-Portfolio'
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const userData = await response.json();

        return NextResponse.json(userData);
    } catch (error) {
        console.error('Error fetching GitHub user data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch GitHub user data' },
            { status: 500 }
        );
    }
} 