import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: false,
    theme: "default",
    securityLevel: "loose",
});

interface MermaidProps {
    chart: string;
}

const Mermaid = ({ chart }: MermaidProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart)
                .then(({ svg }) => {
                    if (ref.current) {
                        ref.current.innerHTML = svg;
                    }
                })
                .catch((error) => {
                    console.error("Mermaid failed to render", error);
                    if (ref.current) {
                        ref.current.innerHTML = "Failed to render diagram";
                    }
                });
        }
    }, [chart]);

    return <div className="mermaid" ref={ref} />;
};

export default Mermaid;
