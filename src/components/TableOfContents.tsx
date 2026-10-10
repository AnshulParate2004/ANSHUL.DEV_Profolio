import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (items.length === 0) return null;

  return (
    <nav className="w-56 shrink-0 font-bbmono text-xs select-none">
      <div className="sticky top-20">
        <p className="text-[11px] font-bold uppercase tracking-wider text-chrome-dim mb-3">
          // ON THIS PAGE
        </p>
        <ul className="space-y-1.5 border-l border-chrome-edge">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-0.5 transition-colors cursor-pointer ${
                    item.level === 2 ? "pl-3.5" : "pl-6"
                  } ${
                    isActive
                      ? "text-chrome-ink font-bold border-l-2 border-chrome-ink -ml-px bg-chrome-field/50"
                      : "text-chrome-slate hover:text-chrome-ink"
                  }`}
                >
                  {item.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default TableOfContents;
