import React, { useState } from 'react';

export const AgentBenchmarkChart: React.FC = () => {
  const [metric, setMetric] = useState<'latency' | 'tokens' | 'cost'>('latency');

  return (
    <div className="border border-chrome-edge bg-white relative">
      {/* Corner crosshairs */}
      <span className="pointer-events-none absolute size-2.5 border-current text-chrome-ink -top-px -left-px border-t-2 border-l-2"></span>
      <span className="pointer-events-none absolute size-2.5 border-current text-chrome-ink -top-px -right-px border-t-2 border-r-2"></span>
      <span className="pointer-events-none absolute size-2.5 border-current text-chrome-ink -bottom-px -left-px border-b-2 border-l-2"></span>
      <span className="pointer-events-none absolute size-2.5 border-current text-chrome-ink -bottom-px -right-px border-b-2 border-r-2"></span>

      {/* Top metric tab */}
      <div className="flex items-center gap-5 overflow-x-auto border-b border-chrome-edge px-5 py-3 font-bbmono text-xs lowercase">
        <button
          onClick={() => setMetric('latency')}
          className={`-my-1 inline-flex min-h-6 items-center py-1 transition-colors cursor-pointer ${
            metric === 'latency'
              ? 'text-chrome-ink underline decoration-chrome-green decoration-2 underline-offset-8 font-bold'
              : 'text-chrome-dim hover:text-chrome-ink'
          }`}
        >
          latency
        </button>
        <button
          onClick={() => setMetric('tokens')}
          className={`-my-1 inline-flex min-h-6 items-center py-1 transition-colors cursor-pointer ${
            metric === 'tokens'
              ? 'text-chrome-ink underline decoration-chrome-green decoration-2 underline-offset-8 font-bold'
              : 'text-chrome-dim hover:text-chrome-ink'
          }`}
        >
          tokens
        </button>
        <button
          onClick={() => setMetric('cost')}
          className={`-my-1 inline-flex min-h-6 items-center py-1 transition-colors cursor-pointer ${
            metric === 'cost'
              ? 'text-chrome-ink underline decoration-chrome-green decoration-2 underline-offset-8 font-bold'
              : 'text-chrome-dim hover:text-chrome-ink'
          }`}
        >
          cost savings
        </button>
        <span className="ml-auto hidden shrink-0 text-chrome-dim sm:block text-[11px]">
          production benchmark
        </span>
      </div>

      <div className="px-5 pt-5 pb-5">
        <h2 className="font-brand text-xl font-medium tracking-[-0.01em] text-chrome-ink">
          {metric === 'latency' && 'Workflow End-to-End Latency'}
          {metric === 'tokens' && 'Multimodal Document Token Load'}
          {metric === 'cost' && 'Hierarchical Agent Token Reduction'}
        </h2>
        <p className="mt-1 font-bbmono text-xs lowercase text-chrome-dim">
          {metric === 'cost' ? 'higher is better' : 'lower is better'}
        </p>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-5 font-bbmono text-xs text-chrome-dim">
          <span className="flex items-center gap-1.5 font-bold text-chrome-ink">
            <span className="size-2.5 bg-chrome-green"></span>
            Anshul's MVL-RAG Arch
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-2.5 bg-chrome-mute"></span>
            Standard Naive Pipeline
          </span>
        </div>

        {/* Chart View */}
        {metric === 'latency' && (
          <div className="relative mt-4 h-48 border-b border-chrome-rule pt-5">
            <div className="flex h-full items-stretch justify-around">
              <div className="flex items-stretch justify-center gap-2">
                <div className="relative h-full w-9 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-green-ink font-bold mb-1">114ms</span>
                  <div className="w-full bg-chrome-green transition-all duration-500 rounded-t-sm" style={{ height: '24%' }}></div>
                </div>
                <div className="relative h-full w-9 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-dim mb-1">840ms</span>
                  <div className="w-full bg-chrome-mute transition-all duration-500 rounded-t-sm" style={{ height: '90%' }}></div>
                </div>
              </div>

              <div className="flex items-stretch justify-center gap-2">
                <div className="relative h-full w-9 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-green-ink font-bold mb-1">38ms</span>
                  <div className="w-full bg-chrome-green transition-all duration-500 rounded-t-sm" style={{ height: '18%' }}></div>
                </div>
                <div className="relative h-full w-9 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-dim mb-1">420ms</span>
                  <div className="w-full bg-chrome-mute transition-all duration-500 rounded-t-sm" style={{ height: '75%' }}></div>
                </div>
              </div>

              <div className="flex items-stretch justify-center gap-2">
                <div className="relative h-full w-9 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-green-ink font-bold mb-1">82ms</span>
                  <div className="w-full bg-chrome-green transition-all duration-500 rounded-t-sm" style={{ height: '28%' }}></div>
                </div>
                <div className="relative h-full w-9 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-dim mb-1">650ms</span>
                  <div className="w-full bg-chrome-mute transition-all duration-500 rounded-t-sm" style={{ height: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-2 flex justify-around text-center font-bbmono text-[11px] text-chrome-dim">
              <span className="w-20">Full RAG Loop</span>
              <span className="w-20">Vector Lookup</span>
              <span className="w-20">Agent Synthesis</span>
            </div>
          </div>
        )}

        {metric === 'tokens' && (
          <div className="relative mt-4 h-48 border-b border-chrome-rule pt-5">
            <div className="flex h-full items-stretch justify-around">
              <div className="flex items-stretch justify-center gap-2">
                <div className="relative h-full w-9 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-green-ink font-bold mb-1">1.8k</span>
                  <div className="w-full bg-chrome-green transition-all duration-500 rounded-t-sm" style={{ height: '22%' }}></div>
                </div>
                <div className="relative h-full w-9 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-dim mb-1">14.2k</span>
                  <div className="w-full bg-chrome-mute transition-all duration-500 rounded-t-sm" style={{ height: '95%' }}></div>
                </div>
              </div>

              <div className="flex items-stretch justify-center gap-2">
                <div className="relative h-full w-9 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-green-ink font-bold mb-1">2.4k</span>
                  <div className="w-full bg-chrome-green transition-all duration-500 rounded-t-sm" style={{ height: '28%' }}></div>
                </div>
                <div className="relative h-full w-9 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-dim mb-1">18.5k</span>
                  <div className="w-full bg-chrome-mute transition-all duration-500 rounded-t-sm" style={{ height: '100%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-2 flex justify-around text-center font-bbmono text-[11px] text-chrome-dim">
              <span className="w-24">100-page PDF</span>
              <span className="w-24">Scanned Financials</span>
            </div>
          </div>
        )}

        {metric === 'cost' && (
          <div className="relative mt-4 h-48 border-b border-chrome-rule pt-5">
            <div className="flex h-full items-stretch justify-around">
              <div className="flex items-stretch justify-center gap-2">
                <div className="relative h-full w-12 flex flex-col justify-end">
                  <span className="text-center font-bbmono text-xs text-chrome-green-ink font-bold mb-1">76% - 90%</span>
                  <div className="w-full bg-chrome-green transition-all duration-500 rounded-t-sm" style={{ height: '88%' }}></div>
                </div>
              </div>
            </div>
            <div className="mt-2 text-center font-bbmono text-[11px] text-chrome-dim">
              Token cost reduction verified in ChunkSmith & Renewal Advisor
            </div>
          </div>
        )}

        {/* Footer note */}
        <div className="mt-4 flex items-center justify-between font-bbmono text-[11px] text-chrome-dim">
          <span>Unstructured.io + Qdrant + LangGraph</span>
          <span className="font-bold text-chrome-ink">Benchmark: 8.5x faster</span>
        </div>
      </div>
    </div>
  );
};
