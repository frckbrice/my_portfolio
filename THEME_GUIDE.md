# Dark/Light Mode Theme System

This portfolio now supports both dark and light modes with smooth transitions and consistent styling across all components.

## 🎨 Features

### Theme Switching

- **Toggle Button**: Located in the header navigation
- **System Preference**: Automatically detects user's system theme preference
- **Manual Override**: Users can manually switch between themes
- **Persistent**: Theme choice is saved in localStorage

### Visual Design

- **Smooth Transitions**: 300ms transitions between themes
- **Consistent Colors**: CSS custom properties for consistent theming
- **Accessibility**: High contrast ratios in both modes
- **Glass Morphism**: Theme-aware glass effects

## 🛠️ Implementation

### CSS Variables

The theme system uses CSS custom properties defined in `globals.css`:

```css
:root {
  --background: 0 0% 100%; /* Light mode background */
  --foreground: 20 14.3% 4.1%; /* Light mode text */
  --accent: 160 84% 39%; /* Accent color (same in both) */
  /* ... more variables */
}

.dark {
  --background: 20 14.3% 4.1%; /* Dark mode background */
  --foreground: 60 9.1% 97.8%; /* Dark mode text */
  /* ... same variables with dark values */
}
```

### Theme-Aware Classes

Use these Tailwind classes for theme-aware styling:

```tsx
// Text colors
className = 'text-foreground'; // Primary text
className = 'text-muted-foreground'; // Secondary text
className = 'text-accent'; // Accent color

// Background colors
className = 'bg-background'; // Primary background
className = 'bg-card'; // Card background
className = 'bg-muted'; // Muted background

// Borders
className = 'border-border'; // Standard border
className = 'border-accent'; // Accent border

// Transitions
className = 'theme-transition'; // Smooth theme transition
```

### Components Updated

All major components have been updated to support both themes:

- ✅ **Header/Navigation** - Theme toggle button
- ✅ **Home Page** - All sections use theme-aware colors
- ✅ **Footer** - Complete theme support
- ✅ **GitHub Projects** - Cards adapt to theme
- ✅ **Work Experience** - Project showcase
- ✅ **Services** - Service cards
- ✅ **Resume** - Professional information
- ✅ **Contact** - Contact form

## 🎯 Usage Examples

### Basic Theme-Aware Component

```tsx
export function MyComponent() {
  return (
    <div className="bg-background text-foreground theme-transition">
      <h1 className="text-foreground">Title</h1>
      <p className="text-muted-foreground">Description</p>
      <button className="bg-accent text-accent-foreground hover:bg-accent/90">
        Action
      </button>
    </div>
  );
}
```

### Glass Morphism Effect

```tsx
<div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg">
  {/* Content */}
</div>
```

### Gradient Backgrounds

```tsx
<div className="gradient-primary">  {/* Accent gradient */}
<div className="gradient-secondary"> {/* Muted gradient */}
```

## 🔧 Customization

### Adding New Theme Colors

1. Add CSS variables to `:root` and `.dark` in `globals.css`
2. Use `hsl(var(--variable-name))` in Tailwind classes
3. Update components to use new variables

### Custom Theme Classes

```css
@layer utilities {
  .my-theme-class {
    @apply bg-background text-foreground border-border;
  }
}
```

### Theme Hooks

Use the custom hooks for advanced theme management:

```tsx
import { useThemeMode, useThemeClasses } from '@/hooks/use-theme';

function MyComponent() {
  const { isDark, toggleTheme } = useThemeMode();
  const classes = useThemeClasses();

  return (
    <div className={classes.glass}>
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}
```

## 🎨 Color Palette

### Light Mode

- **Background**: Pure white (#FFFFFF)
- **Foreground**: Dark gray (#1c1c22)
- **Muted**: Light gray (#f5f5f5)
- **Accent**: Teal green (#00ff99)
- **Border**: Light gray (#e5e5e5)

### Dark Mode

- **Background**: Dark gray (#1c1c22)
- **Foreground**: Light gray (#f5f5f5)
- **Muted**: Medium gray (#2a2a2a)
- **Accent**: Teal green (#00ff99) - Same as light
- **Border**: Medium gray (#2a2a2a)

## 🚀 Performance

- **CSS Variables**: Efficient theme switching without re-renders
- **Tailwind JIT**: Only includes used classes
- **Smooth Transitions**: Hardware-accelerated animations
- **No Flash**: Proper SSR handling with next-themes

## 🔍 Testing

### Manual Testing

1. Click theme toggle in header
2. Check all components adapt properly
3. Verify transitions are smooth
4. Test on different screen sizes

### Accessibility Testing

- High contrast ratios maintained
- Color not the only indicator
- Keyboard navigation works
- Screen reader compatible

## 📱 Responsive Design

The theme system works seamlessly across all devices:

- **Desktop**: Full theme experience
- **Tablet**: Optimized layouts
- **Mobile**: Touch-friendly controls

## 🎯 Best Practices

1. **Always use theme-aware classes** instead of hardcoded colors
2. **Test in both themes** during development
3. **Use semantic color names** (foreground, background, accent)
4. **Maintain contrast ratios** for accessibility
5. **Add smooth transitions** for better UX

## 🔄 Future Enhancements

- [ ] Custom theme colors
- [ ] Theme-specific animations
- [ ] Reduced motion support
- [ ] High contrast mode
- [ ] Theme presets
