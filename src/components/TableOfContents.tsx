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
    <nav className="hidden xl:block fixed right-8 top-32 w-64">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">
        On this page
      </p>
      <ul className="space-y-2 text-sm border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-1 transition-colors hover:text-foreground ${
                item.level === 2 ? "pl-4" : "pl-6"
              } ${
                activeId === item.id
                  ? "text-foreground border-l-2 border-foreground -ml-px"
                  : "text-muted-foreground"
              }`}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
