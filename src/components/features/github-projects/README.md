# GitHub Projects Integration

This feature automatically fetches and displays your GitHub projects in your portfolio.

## Features

- **Real-time Data**: Fetches live data from your GitHub profile
- **Project Cards**: Beautiful cards showing project details
- **Language Colors**: Displays programming languages with their official colors
- **Topics/Tags**: Shows repository topics and tags
- **Stats**: Displays stars, forks, and last updated date
- **Responsive Design**: Works on all screen sizes
- **Loading States**: Smooth loading animations
- **Error Handling**: Graceful error handling with retry options

## How it Works

1. **API Integration**: Uses GitHub's public API to fetch repository data
2. **Local API Route**: `/api/github` handles CORS and rate limiting
3. **Data Processing**: Filters and sorts repositories by relevance
4. **Dynamic Display**: Renders projects in a responsive grid

## Configuration

### GitHub Username

Update the username in `api/github-api.ts`:

```typescript
const GITHUB_USERNAME = 'your-github-username';
```

### API Rate Limiting

The GitHub API has rate limits for unauthenticated requests. For higher limits, you can:

1. Add a GitHub token to your environment variables
2. Use the local API route to cache responses

### Customization

#### Styling

- Modify `github-project-card.tsx` for card appearance
- Update colors in `github-api.ts` for language colors
- Adjust grid layout in `github-projects-section.tsx`

#### Data Display

- Change the number of projects displayed
- Modify sorting criteria
- Add/remove project information fields

## Pages

- **Dedicated Page**: `/github-projects` - Full GitHub projects showcase
- **Integrated**: Added to `/work-experience` page
- **Navigation**: Added "GitHub" link to main navigation

## API Endpoints

- `GET /api/github?endpoint=/users/{username}/repos` - Fetch user repositories
- `GET /api/github?endpoint=/repos/{username}/{repo}/topics` - Fetch repository topics

## Error Handling

- Network errors show retry button
- API errors display user-friendly messages
- Loading states prevent layout shifts
- Fallback content for empty states
