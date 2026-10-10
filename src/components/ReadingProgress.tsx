import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Look for scrollable container inside BrowserChrome or fallback to window
    const scrollContainer = document.querySelector(".select-text.scroll-smooth") || window;

    const handleScroll = () => {
      let scrollTop = 0;
      let docHeight = 0;

      if (scrollContainer instanceof HTMLElement) {
        scrollTop = scrollContainer.scrollTop;
        docHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      } else {
        scrollTop = window.scrollY;
        docHeight = document.documentElement.scrollHeight - window.innerHeight;
      }

      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollProgress);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 left-0 right-0 h-1 bg-chrome-edge z-40">
      <div
        className="h-full bg-chrome-green transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
