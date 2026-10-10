import React, { useState } from 'react';

interface WirePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WirePanel: React.FC<WirePanelProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'agent' | 'dom' | 'telemetry'>('agent');

  if (!isOpen) return null;

  return (
    <aside className="w-80 sm:w-96 border-l border-chrome-line bg-white flex flex-col h-full shrink-0 z-30 transition-all duration-300">
      {/* Panel Header */}
      <div className="flex h-10 items-center justify-between border-b border-chrome-line px-3 bg-chrome-bg select-none">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-chrome-green animate-pulse"></span>
          <span className="font-bbmono text-xs font-bold text-chrome-ink">Agent Wire Inspector</span>
          <span className="bg-chrome-green/15 text-chrome-green-ink px-1.5 py-0.5 rounded font-bbmono text-[10px]">
            ONLINE
          </span>
        </div>
        <button
          onClick={onClose}
          className="size-6 flex items-center justify-center rounded hover:bg-black/10 text-chrome-icon cursor-pointer"
          aria-label="Close wire panel"
        >
          ✕
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-chrome-line bg-chrome-canvas px-2 pt-1 gap-1 font-bbmono text-xs select-none">
        {[
          { id: 'agent', label: 'Actions' },
          { id: 'dom', label: 'Knowledge Graph' },
          { id: 'telemetry', label: 'System Metrics' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-1.5 rounded-t border-t border-x transition-colors cursor-pointer ${
              activeTab === tab.id
                ? 'bg-white border-chrome-line text-chrome-ink font-bold -mb-px'
                : 'border-transparent text-chrome-dim hover:text-chrome-ink'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-4 font-bbmono text-xs text-chrome-ink space-y-4">
        {activeTab === 'agent' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] text-chrome-dim">
              <span>ACTIVE MODEL: Claude 3.5 Sonnet</span>
              <span>CACHE HIT: 96.4%</span>
            </div>

            <div className="rounded border border-chrome-edge p-2.5 bg-chrome-canvas space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-chrome-green-ink">01: LangGraph::Workflow</span>
                <span className="text-chrome-dim text-[10px]">14ms</span>
              </div>
              <p className="text-[11px] text-chrome-slate">Hierarchical multi-agent router evaluated intent query.</p>
            </div>

            <div className="rounded border border-chrome-edge p-2.5 bg-chrome-canvas space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-chrome-green-ink">02: ChunkSmith::VisionRAG</span>
                <span className="text-chrome-dim text-[10px]">38ms</span>
              </div>
              <p className="text-[11px] text-chrome-slate">Extracted charts & schematics using Unstructured.io parser.</p>
            </div>

            <div className="rounded border border-chrome-edge p-2.5 bg-chrome-canvas space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-chrome-green-ink">03: GraphRAG::Neo4j</span>
                <span className="text-chrome-dim text-[10px]">22ms</span>
              </div>
              <p className="text-[11px] text-chrome-slate">Synthesized knowledge entity relations with cosine similarity 0.94.</p>
            </div>

            <div className="rounded border border-chrome-edge p-2.5 bg-chrome-green/10 border-chrome-green/30 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-chrome-green-ink">04: Synthesis::Complete</span>
                <span className="text-chrome-dim text-[10px]">82ms</span>
              </div>
              <p className="text-[11px] text-chrome-slate">Streamed verified answer with 76% token reduction achieved.</p>
            </div>
          </div>
        )}

        {activeTab === 'dom' && (
          <div className="bg-dev-bg text-dev-ink p-3 rounded border border-dev-line overflow-x-auto text-[11px] leading-relaxed">
            <pre>{`(:Candidate {name: "Anshul Parate"})
  -[:MASTERS]-> (:Skill {name: "LangGraph"})
  -[:MASTERS]-> (:Skill {name: "FastAPI / Python"})
  -[:ARCHITECTED]-> (:Project {name: "ChunkSmith"})
      -[:USES]-> (:VectorDB {name: "Qdrant"})
      -[:USES]-> (:GraphDB {name: "Neo4j"})
  -[:ENGINEERED]-> (:Project {name: "Renewal Upsell Advisor"})
      -[:CONVERSION_BOOST]-> ("+35%")
  -[:SHIPPED]-> (:Project {name: "Finacal Adviser"})
      -[:BACKTESTED]-> ("5+ Years Market Data")`}</pre>
          </div>
        )}

        {activeTab === 'telemetry' && (
          <div className="space-y-3 text-[11px]">
            <div className="flex justify-between border-b border-chrome-edge pb-1">
              <span className="text-chrome-dim">Pipeline ID:</span>
              <span className="font-bold">mvl-agentic-rag-v2</span>
            </div>
            <div className="flex justify-between border-b border-chrome-edge pb-1">
              <span className="text-chrome-dim">Avg Response Latency:</span>
              <span className="text-chrome-green-ink font-bold">114ms</span>
            </div>
            <div className="flex justify-between border-b border-chrome-edge pb-1">
              <span className="text-chrome-dim">Token Optimization:</span>
              <span className="text-chrome-green-ink font-bold">-76% to -90%</span>
            </div>
            <div className="flex justify-between border-b border-chrome-edge pb-1">
              <span className="text-chrome-dim">Vector Similarity Score:</span>
              <span className="font-bold">0.965 Cosine</span>
            </div>
            <div className="flex justify-between border-b border-chrome-edge pb-1">
              <span className="text-chrome-dim">Active Runtime:</span>
              <span>FastAPI (Python 3.11) + React</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
