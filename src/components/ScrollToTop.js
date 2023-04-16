import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// A component that ensures that the page scrolls to the top of the window
// whenever the user navigates to a new page using React Router.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // Change this delay to match the duration of your exit animation

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
