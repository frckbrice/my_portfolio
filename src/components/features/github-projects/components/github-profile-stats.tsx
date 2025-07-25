'use client';

import React, { useEffect, useState } from 'react';
import { motion } from '@/lib/framer-motion';
import {
  BsGithub,
  BsStar,
  BsGit,
  BsEye,
  BsCalendar3,
  BsTrophy,
  BsCodeSlash,
  BsPeople,
  BsGlobe,
  BsArrowUpRight,
} from 'react-icons/bs';
import {
  TrendingUp,
  Calendar,
  Award,
  Activity,
  MapPin,
  Link as LinkIcon,
} from 'lucide-react';

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalFollowers: number;
  totalFollowing: number;
  publicRepos: number;
  privateRepos: number;
  topLanguages: { [key: string]: number };
  joinDate: string;
  location: string;
  bio: string;
  website: string;
  company: string;
  twitter: string;
}

export function GitHubProfileStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true);

        // Fetch user profile
        const profileResponse = await fetch('/api/github/user');
        const profileData = await profileResponse.json();

        // Fetch repositories for detailed stats
        const reposResponse = await fetch('/api/github/repos');
        const reposData = await reposResponse.json();

        // Calculate statistics
        const totalStars = reposData.reduce(
          (sum: number, repo: any) => sum + repo.stargazers_count,
          0
        );
        const totalForks = reposData.reduce(
          (sum: number, repo: any) => sum + repo.forks_count,
          0
        );
        const publicRepos = reposData.filter(
          (repo: any) => !repo.private
        ).length;
        const privateRepos = reposData.filter(
          (repo: any) => repo.private
        ).length;

        // Calculate top languages
        const languageStats: { [key: string]: number } = {};
        reposData.forEach((repo: any) => {
          if (repo.language) {
            languageStats[repo.language] =
              (languageStats[repo.language] || 0) + 1;
          }
        });

        // Sort languages by frequency
        const topLanguages = Object.fromEntries(
          Object.entries(languageStats)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
        );

        const statsData: GitHubStats = {
          totalRepos: reposData.length,
          totalStars,
          totalForks,
          totalFollowers: profileData.followers || 0,
          totalFollowing: profileData.following || 0,
          publicRepos,
          privateRepos,
          topLanguages,
          joinDate: profileData.created_at || '',
          location: profileData.location || 'Not specified',
          bio:
            profileData.bio ||
            'Full-stack software engineer passionate about creating innovative digital solutions.',
          website: profileData.blog || '',
          company: profileData.company || '',
          twitter: profileData.twitter_username || '',
        };

        setStats(statsData);
      } catch (err) {
        console.error('Error fetching GitHub stats:', err);
        // Don't set error state, let the fallback data handle it
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground">
              Loading GitHub statistics...
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Show stats even if there was an error (fallback data will be used)
  if (!stats) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Unable to load live GitHub data
            </p>
            <p className="text-sm text-muted-foreground">
              Please check my GitHub profile directly
            </p>
            <a
              href="https://github.com/frckbrice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
            >
              <BsGithub className="w-4 h-4" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl xl:text-6xl font-bold text-foreground mb-6">
            GitHub <span className="text-accent">Profile</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            {stats.bio}
          </p>

          {/* Profile Link */}
          <motion.a
            href="https://github.com/frckbrice"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-card/50 border border-border rounded-xl hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <BsGithub className="w-6 h-6 text-accent" />
            <span className="text-foreground font-semibold">
              View Full Profile
            </span>
            <BsArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent" />
          </motion.a>
        </motion.div>

        {/* Main Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:border-accent/50 transition-all duration-300">
            <BsGithub className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">
              {formatNumber(stats.totalRepos)}
            </div>
            <div className="text-sm text-muted-foreground">
              Total Repositories
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:border-accent/50 transition-all duration-300">
            <BsStar className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">
              {formatNumber(stats.totalStars)}
            </div>
            <div className="text-sm text-muted-foreground">Total Stars</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:border-accent/50 transition-all duration-300">
            <BsGit className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">
              {formatNumber(stats.totalForks)}
            </div>
            <div className="text-sm text-muted-foreground">Total Forks</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border text-center hover:border-accent/50 transition-all duration-300">
            <BsPeople className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">
              {formatNumber(stats.totalFollowers)}
            </div>
            <div className="text-sm text-muted-foreground">Followers</div>
          </div>
        </motion.div>

        {/* Detailed Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Repository Breakdown */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <BsCodeSlash className="w-6 h-6 text-accent" />
              Repository Breakdown
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">
                  Public Repositories
                </span>
                <span className="font-semibold text-foreground">
                  {stats.publicRepos}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">
                  Private Repositories
                </span>
                <span className="font-semibold text-foreground">
                  {stats.privateRepos}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Following</span>
                <span className="font-semibold text-foreground">
                  {stats.totalFollowing}
                </span>
              </div>
            </div>
          </div>

          {/* Top Languages */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-accent" />
              Top Languages
            </h3>
            <div className="space-y-4">
              {Object.entries(stats.topLanguages).map(
                ([language, count], index) => (
                  <div
                    key={language}
                    className="flex justify-between items-center"
                  >
                    <span className="text-muted-foreground">{language}</span>
                    <span className="font-semibold text-foreground">
                      {count} repos
                    </span>
                  </div>
                )
              )}
              {Object.keys(stats.topLanguages).length === 0 && (
                <p className="text-muted-foreground text-sm">
                  No language data available
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Profile Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Profile <span className="text-accent">Information</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-accent" />
              <div>
                <div className="text-sm text-muted-foreground">
                  Member since
                </div>
                <div className="font-semibold text-foreground">
                  {formatDate(stats.joinDate)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-semibold text-foreground">
                  {stats.location}
                </div>
              </div>
            </div>

            {stats.website && (
              <div className="flex items-center gap-3">
                <LinkIcon className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Website</div>
                  <a
                    href={stats.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent hover:underline"
                  >
                    Visit
                  </a>
                </div>
              </div>
            )}

            {stats.company && (
              <div className="flex items-center gap-3">
                <BsGlobe className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Company</div>
                  <div className="font-semibold text-foreground">
                    {stats.company}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
