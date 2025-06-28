"use client";

import { useEffect } from 'react';

// Type definitions for Performance API
interface LayoutShift extends PerformanceEntry {
    value: number;
    sources: Array<{
        node: Node;
        currentRect: DOMRectReadOnly;
        previousRect: DOMRectReadOnly;
    }>;
}

interface PerformanceEventTiming extends PerformanceEntry {
    processingStart: number;
    processingEnd: number;
    target?: EventTarget;
}

export function PerformanceMonitor() {
    useEffect(() => {
        // Performance monitoring
        if (typeof window !== 'undefined') {
            // Track Core Web Vitals
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    switch (entry.entryType) {
                        case 'largest-contentful-paint':
                            console.log('LCP:', entry.startTime);
                            // Send to analytics
                            break;
                        case 'first-input':
                            const firstInputEntry = entry as PerformanceEventTiming;
                            console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
                            // Send to analytics
                            break;
                        case 'layout-shift':
                            const layoutShiftEntry = entry as LayoutShift;
                            console.log('CLS:', layoutShiftEntry.value);
                            // Send to analytics
                            break;
                    }
                }
            });

            observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

            // Track page load performance
            window.addEventListener('load', () => {
                const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
                if (navigation) {
                    console.log('Page Load Time:', navigation.loadEventEnd - navigation.loadEventStart);
                    console.log('DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
                }
            });

            return () => observer.disconnect();
        }
    }, []);

    return null; // This component doesn't render anything
}

// Performance optimization utilities
export const performanceUtils = {
    // Preload critical resources
    preloadResource: (href: string, as: string) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        document.head.appendChild(link);
    },

    // Lazy load images
    lazyLoadImage: (img: HTMLImageElement) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target as HTMLImageElement;
                    img.src = img.dataset.src || '';
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        observer.observe(img);
    },

    // Debounce function for performance
    debounce: <T extends (...args: any[]) => any>(
        func: T,
        wait: number
    ): ((...args: Parameters<T>) => void) => {
        let timeout: NodeJS.Timeout;
        return (...args: Parameters<T>) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    },

    // Throttle function for performance
    throttle: <T extends (...args: any[]) => any>(
        func: T,
        limit: number
    ): ((...args: Parameters<T>) => void) => {
        let inThrottle: boolean;
        return (...args: Parameters<T>) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    },
}; 