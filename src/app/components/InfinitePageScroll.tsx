import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/**
 * Infinite Page Scroll Component
 * Automatically navigates to the next page when scrolling to the bottom
 */

// Define the page order for navigation
const PAGE_ORDER = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/products', name: 'Products' },
  { path: '/projects', name: 'Projects' },
  { path: '/blog', name: 'Blog' },
  { path: '/contact', name: 'Contact' },
];

// Set to false to disable infinite scrolling
const INFINITE_SCROLL_ENABLED = false;

// Scroll threshold (how close to bottom before triggering)
const SCROLL_THRESHOLD = 100; // pixels from bottom

// Debounce delay to prevent rapid navigation
const NAVIGATION_DELAY = 0; // milliseconds - instant navigation

export function InfinitePageScroll() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showIndicator, setShowIndicator] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [nextPage, setNextPage] = useState<{ path: string; name: string } | null>(null);

  useEffect(() => {
    if (!INFINITE_SCROLL_ENABLED) return;

    // Find current page index
    const currentIndex = PAGE_ORDER.findIndex(page => page.path === location.pathname);

    // Get next page (or null if on last page)
    const next = currentIndex >= 0 && currentIndex < PAGE_ORDER.length - 1
      ? PAGE_ORDER[currentIndex + 1]
      : null;

    setNextPage(next);

    // Reset navigation state when route changes
    setIsNavigating(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!INFINITE_SCROLL_ENABLED || !nextPage) return;

    let navigationTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate distance from bottom
      const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);

      // Show indicator when getting close to bottom
      if (distanceFromBottom < 500 && !isNavigating) {
        setShowIndicator(true);
      } else {
        setShowIndicator(false);
      }

      // Trigger navigation when reaching bottom
      if (distanceFromBottom < SCROLL_THRESHOLD && !isNavigating && nextPage) {
        setIsNavigating(true);

        // Delay navigation slightly for smooth transition
        navigationTimeout = setTimeout(() => {
          navigate(nextPage.path);
        }, NAVIGATION_DELAY);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navigationTimeout) {
        clearTimeout(navigationTimeout);
      }
    };
  }, [navigate, nextPage, isNavigating]);

  // Don't render if disabled or no next page
  if (!INFINITE_SCROLL_ENABLED || !nextPage) {
    return null;
  }

  return (
    <>
      {/* Scroll Indicator */}
      <AnimatePresence>
        {showIndicator && !isNavigating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-3">
              <span className="text-sm font-semibold">Continue to {nextPage.name}</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Progress Indicator (Side) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
        <div className="flex flex-col space-y-3">
          {PAGE_ORDER.map((page) => {
            const isActive = location.pathname === page.path;
            const currentIndex = PAGE_ORDER.findIndex(p => p.path === location.pathname);
            const pageIndex = PAGE_ORDER.findIndex(p => p.path === page.path);
            const isPassed = pageIndex < currentIndex;

            return (
              <button
                key={page.path}
                onClick={() => navigate(page.path)}
                className="group flex items-center space-x-3"
                aria-label={`Go to ${page.name}`}
              >
                <span className={`text-xs font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  {page.name}
                </span>
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 scale-125 ring-4 ring-blue-200'
                    : isPassed
                    ? 'bg-blue-400'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
