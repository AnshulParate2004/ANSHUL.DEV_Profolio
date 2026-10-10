import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface StagehandNavProps {
  onContactClick?: () => void;
  onProjectsClick?: () => void;
  onSkillsClick?: () => void;
}

export const StagehandNav: React.FC<StagehandNavProps> = ({
  onContactClick,
  onProjectsClick,
  onSkillsClick,
}) => {
  const location = useLocation();

  return (
    <nav className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-chrome-edge bg-white px-6 py-4 sm:px-10 md:gap-x-8 md:gap-y-2 sticky top-0 z-20 select-none">
      <div className="flex flex-wrap items-baseline gap-x-6 md:gap-x-8">
        <Link className="flex items-baseline gap-2.5 group" to="/">
          <span className="size-5 rounded-full bg-chrome-green flex items-center justify-center text-white text-[10px] font-bold self-center">
            AP
          </span>
          <span className="font-brand text-[22px] tracking-[-0.02em] font-medium text-chrome-ink">
            Anshul Parate
          </span>
          <span className="font-bbmono text-[13px] lowercase text-chrome-dim hidden sm:inline">
            ai engineer & full-stack
          </span>
        </Link>

        <div className="flex flex-wrap items-baseline font-bbmono text-[13px] lowercase text-chrome-dim gap-x-6 gap-y-2">
          {location.pathname === '/' ? (
            <>
              <button
                onClick={onProjectsClick}
                className="transition-colors hover:text-chrome-ink cursor-pointer"
              >
                projects
              </button>
              <button
                onClick={onSkillsClick}
                className="transition-colors hover:text-chrome-ink cursor-pointer"
              >
                stack
              </button>
              <button
                onClick={onContactClick}
                className="transition-colors hover:text-chrome-ink cursor-pointer"
              >
                contact
              </button>
            </>
          ) : (
            <Link to="/" className="transition-colors hover:text-chrome-ink">
              overview
            </Link>
          )}

          <Link
            to="/blogs"
            className={`transition-colors hover:text-chrome-ink ${
              location.pathname.startsWith('/blog')
                ? 'text-chrome-ink underline decoration-chrome-green decoration-2 underline-offset-4'
                : ''
            }`}
          >
            writing
          </Link>

          <a
            href="https://github.com/AnshulParate2004"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-chrome-ink flex items-center gap-1"
          >
            github
            <span className="tabular-nums flex items-center text-[11px]">
              <svg viewBox="0 0 16 16" aria-hidden="true" className="mr-[2px] size-[10px] fill-current">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
              </svg>
              star
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/anshulparate/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-chrome-ink"
          >
            linkedin
          </a>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <span className="hidden sm:inline-flex">
          <span className="relative inline-flex">
            <span className="pointer-events-none absolute size-2 border-current text-chrome-ink -top-px -left-px border-t border-l"></span>
            <span className="pointer-events-none absolute size-2 border-current text-chrome-ink -bottom-px -right-px border-b border-r"></span>
            <a
              href="/Resume_AnshulParate.pdf"
              download
              className="inline-flex h-9 items-center whitespace-nowrap font-bbmono gap-2 border bg-white px-4 text-xs lowercase border-chrome-edge hover:border-chrome-ink transition-colors"
            >
              resume .pdf
            </a>
          </span>
        </span>

        <button
          onClick={onContactClick || (() => window.location.href = 'mailto:anshulnparateweb@gmail.com')}
          className="inline-flex h-9 items-center whitespace-nowrap font-bbmono bg-chrome-ink px-4 text-xs text-white transition-opacity hover:opacity-85 cursor-pointer"
        >
          hire anshul
        </button>
      </div>
    </nav>
  );
};
