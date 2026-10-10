import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WirePanel } from './WirePanel';

interface BrowserChromeProps {
  children: React.ReactNode;
}

export const BrowserChrome: React.FC<BrowserChromeProps> = ({ children }) => {
  const location = useLocation();
  const [wirePanelOpen, setWirePanelOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const tabs = [
    { label: 'anshul.dev — AI Engineer & Full-Stack', path: '/' },
    { label: 'Writing & Research', path: '/blogs' },
  ];

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="h-dvh overflow-hidden bg-[#d4d4d8] font-body text-chrome-ink p-2 sm:p-4 lg:px-6 lg:py-3 select-none flex flex-col">
      <div className={`mx-auto h-full w-full max-w-[102rem] flex flex-col transition-all duration-300 ${isMaximized ? 'fixed inset-0 p-0 max-w-none rounded-none z-50' : ''}`}>
        
        {/* Browser Outer Shell */}
        <div className={`flex flex-col overflow-clip border border-chrome-line bg-chrome-bg shadow-2xl relative h-full ${isMaximized ? 'rounded-none' : 'rounded-xl'}`}>
          
          {/* Top Bar: macOS window lights & Tabs */}
          <div className="flex h-10 items-end pr-2 pl-3.5 bg-chrome-bg select-none">
            {/* macOS Lights */}
            <div className="group/lights hidden shrink-0 sm:flex items-center gap-2 pb-[11px] mr-3">
              <Link
                to="/"
                aria-label="Close"
                title="Reset to home"
                className="size-3 rounded-full relative flex items-center justify-center text-black/55 active:brightness-90 cursor-pointer"
                style={{ backgroundColor: '#ff5f57' }}
              >
                <span className="opacity-0 group-hover/lights:opacity-100 text-[8px] font-bold">✕</span>
              </Link>
              <button
                aria-label="Minimize"
                title="Minimize window"
                className="size-3 rounded-full relative flex items-center justify-center text-black/55 active:brightness-90 cursor-pointer"
                style={{ backgroundColor: '#febc2e' }}
              >
                <span className="opacity-0 group-hover/lights:opacity-100 text-[8px] font-bold font-mono">−</span>
              </button>
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                aria-label="Toggle full screen"
                title="Toggle full screen"
                className="size-3 rounded-full relative flex items-center justify-center text-black/55 active:brightness-90 cursor-pointer"
                style={{ backgroundColor: '#28c840' }}
              >
                <span className="opacity-0 group-hover/lights:opacity-100 text-[7px] font-bold">⤢</span>
              </button>
            </div>

            {/* Browser Tabs List */}
            <div className="flex items-end flex-1 min-w-0 overflow-x-auto scrollbar-none">
              {tabs.map((tab) => {
                const isActive = location.pathname === tab.path || (tab.path === '/blogs' && location.pathname.startsWith('/blog'));
                return (
                  <Link
                    key={tab.path}
                    to={tab.path}
                    className={`relative flex h-[34px] w-52 sm:w-64 min-w-0 items-center gap-2 rounded-t-[10px] pr-2 pl-2.5 text-xs text-chrome-ink transition-colors shrink-0 ${
                      isActive
                        ? 'bg-chrome-canvas font-medium shadow-sm'
                        : 'hover:bg-black/5 text-chrome-dim hover:text-chrome-ink'
                    }`}
                  >
                    <span className="size-2 rounded-full bg-chrome-green"></span>
                    <span className="truncate">{tab.label}</span>
                    <span
                      role="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="ml-auto flex size-4 shrink-0 items-center justify-center rounded-full text-chrome-icon hover:bg-black/10 text-[10px]"
                    >
                      ✕
                    </span>
                  </Link>
                );
              })}

              <Link
                to="/blogs"
                title="Open writings tab"
                className="flex size-7 shrink-0 items-center justify-center rounded-full text-chrome-icon mb-[3px] ml-1 transition-colors hover:bg-black/5 cursor-pointer"
              >
                <svg viewBox="0 0 16 16" className="size-3.5" fill="none" strokeWidth="1.5">
                  <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation & Address Bar */}
          <div className="flex h-12 items-center gap-2 bg-chrome-canvas px-3 sm:gap-3 border-b border-chrome-line">
            {/* Back, Forward, Reload */}
            <div className="hidden sm:flex items-center text-chrome-icon gap-1">
              <button
                onClick={() => window.history.back()}
                aria-label="Go back"
                className="flex size-7 items-center justify-center rounded-full hover:bg-black/5 text-chrome-icon cursor-pointer"
              >
                <svg viewBox="0 0 16 16" className="size-4" fill="none" strokeWidth="1.5">
                  <path d="M13 8H3.5M7.5 4 3.5 8l4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button
                onClick={() => window.history.forward()}
                aria-label="Go forward"
                className="flex size-7 items-center justify-center rounded-full hover:bg-black/5 text-chrome-icon cursor-pointer"
              >
                <svg viewBox="0 0 16 16" className="size-4" fill="none" strokeWidth="1.5">
                  <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button
                onClick={handleReload}
                aria-label="Reload"
                className="flex size-7 items-center justify-center rounded-full hover:bg-black/5 text-chrome-icon cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-8 8s3.57 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
                </svg>
              </button>
            </div>

            {/* Address bar */}
            <div className="flex h-[30px] min-w-0 flex-1 items-center gap-2.5 rounded-full bg-chrome-field pr-3 pl-3 border border-black/5">
              <svg viewBox="0 0 16 16" className="size-3.5 shrink-0 text-chrome-green-ink" fill="none">
                <path d="M5.5 7.5V5.25a2.5 2.5 0 0 1 5 0V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                <rect x="3.75" y="7" width="8.5" height="6" rx="1.5" fill="currentColor"></rect>
              </svg>
              <div className="min-w-0 flex-1 font-mono text-[13px] text-chrome-ink truncate">
                https://anshul.dev{location.pathname === '/' ? '' : location.pathname}
              </div>

              {/* Status pill */}
              <div className="hidden sm:flex items-center gap-1.5 font-bbmono text-[10px] text-chrome-slate bg-chrome-edge/70 px-2 py-0.5 rounded-full">
                <span className="size-1.5 rounded-full bg-chrome-green"></span>
                <span>FASTAPI / AGENTS ONLINE</span>
              </div>
            </div>

            {/* Wire Panel toggle button */}
            <button
              onClick={() => setWirePanelOpen(!wirePanelOpen)}
              title="Inspect Agent Wire"
              className={`flex h-7 items-center gap-1.5 rounded px-2.5 font-bbmono text-xs transition-colors cursor-pointer ${
                wirePanelOpen
                  ? 'bg-chrome-ink text-white'
                  : 'bg-chrome-field hover:bg-black/5 text-chrome-slate border border-black/5'
              }`}
            >
              <svg viewBox="0 0 16 16" className="size-3.5" fill="none" strokeWidth="1.5">
                <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor"></rect>
                <path d="M10 3v10" stroke="currentColor"></path>
              </svg>
              <span className="hidden md:inline">Wire Panel</span>
            </button>
          </div>

          {/* Web View Area + Wire Panel Drawer */}
          <div className="relative flex-1 overflow-hidden flex bg-white">
            <div className="flex-1 overflow-y-auto select-text scroll-smooth">
              {children}
            </div>

            {/* Stagehand-style Wire Drawer */}
            <WirePanel isOpen={wirePanelOpen} onClose={() => setWirePanelOpen(false)} />
          </div>

        </div>
      </div>
    </div>
  );
};
