
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollAnimationProviderProps {
  children: React.ReactNode;
}

const ScrollAnimationProvider = ({ children }: ScrollAnimationProviderProps) => {
  const location = useLocation();

  useEffect(() => {
    // Ensure all elements are visible immediately
    const initializeElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right');
      elements.forEach((el) => {
        el.classList.add('animate');
      });
    };

    // Initialize immediately
    initializeElements();

    // Also initialize after a brief delay to catch dynamically loaded content
    const timeoutId = setTimeout(initializeElements, 100);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animation elements
    const elementsToObserve = document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right');
    elementsToObserve.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname]); // Re-run when route changes

  return <>{children}</>;
};

export default ScrollAnimationProvider;
