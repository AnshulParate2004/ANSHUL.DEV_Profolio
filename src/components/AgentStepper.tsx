import React, { useState } from 'react';

export const AgentStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    {
      num: '01',
      code: 'const parser = new ChunkSmithEngine({ multimodal: true });',
      label: 'Document partitioned · OCR & table layout isolated',
      output: 'Parsed 84 pages into semantic visual blocks. 94% accuracy.',
      tag: 'PARSER',
    },
    {
      num: '02',
      code: 'const graph = await LangGraph.compile({ stateSchema });',
      label: 'Hierarchical multi-agent state machines initialized',
      output: '4 specialized agents loaded: Researcher, Auditor, Synthesizer, Guardrail.',
      tag: 'ROUTER',
    },
    {
      num: '03',
      code: 'await qdrant.hybridSearch({ dense, sparse, limit: 10 });',
      label: 'Reciprocal Rank Fusion executed across Qdrant & Neo4j',
      output: 'Retrieved 8 contextual nodes with 0.965 cosine relevance score.',
      tag: 'RAG',
    },
    {
      num: '04',
      code: 'const decision = await revenueAgent.execute({ churnScore: 0.82 });',
      label: 'Renewal Upsell Advisor autonomous voice & workflow trigger',
      output: 'Triggered retention flow with +35% conversion lift verified.',
      tag: 'AGENT',
    },
    {
      num: '05',
      code: 'return streamSSE(FastAPI.verifyPayload({ payload }));',
      label: 'Zero-hallucination guardrail validation streamed to client',
      output: 'Stream completed in 114ms total latency · 76% token budget saved.',
      tag: 'FASTAPI',
    },
  ];

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.2fr_auto_1fr]">
      {/* Code / Stepper */}
      <div className="flex flex-col">
        <div className="flex flex-1 flex-col bg-dev-bg border border-dev-line rounded-lg overflow-hidden">
          <div className="flex items-center justify-between border-b border-dev-line px-4 py-2.5 font-bbmono text-xs text-dev-dim">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full animate-pulse bg-chrome-green"></span>
              agent-runtime — anshul-pipeline.ts
            </span>
            <span className="text-chrome-green">fastapi + langgraph</span>
          </div>

          <pre className="overflow-x-auto p-4 font-bbmono text-xs leading-[2.2]">
            <code className="block">
              {steps.map((step, idx) => (
                <button
                  key={step.num}
                  onClick={() => setCurrentStep(idx)}
                  className={`flex w-max min-w-full gap-3 px-2 py-0.5 text-left transition-colors duration-200 cursor-pointer rounded ${
                    currentStep === idx
                      ? 'bg-chrome-green/15 text-chrome-green'
                      : 'hover:bg-white/5 text-dev-dim'
                  }`}
                >
                  <span className={`w-2 shrink-0 ${currentStep === idx ? 'text-chrome-green' : 'text-transparent'}`}>▸</span>
                  <span className={currentStep === idx ? 'text-chrome-green font-bold' : 'text-dev-dim'}>{step.num}</span>
                  <span className={currentStep === idx ? 'text-dev-ink font-bold' : 'text-dev-dim'}>{step.code}</span>
                </button>
              ))}
            </code>
          </pre>
        </div>

        <div className="flex items-center gap-2 border-t border-dev-line bg-dev-shell px-4 py-2.5 font-bbmono text-xs leading-[1.6] rounded-b-lg mt-0.5">
          <span className="text-chrome-green">›</span>
          <span className="text-dev-ink">{steps[currentStep].label}</span>
          <span className="ml-auto text-dev-dim">
            {steps[currentStep].num} / 05
          </span>
        </div>
      </div>

      {/* Arrow separator */}
      <span className="flex items-center justify-center self-center text-lg text-chrome-green-ink">
        <span className="lg:hidden">↓</span>
        <span className="hidden lg:inline">→</span>
      </span>

      {/* Execution Viewport */}
      <div className="relative min-h-72 border border-chrome-edge bg-white p-5 rounded-lg shadow-sm flex flex-col justify-between">
        {/* Corner alignment markers */}
        <span className="pointer-events-none absolute size-2.5 border-t-2 border-l-2 border-chrome-green-ink top-0 left-0"></span>
        <span className="pointer-events-none absolute size-2.5 border-t-2 border-r-2 border-chrome-green-ink top-0 right-0"></span>
        <span className="pointer-events-none absolute size-2.5 border-b-2 border-l-2 border-chrome-green-ink bottom-0 left-0"></span>
        <span className="pointer-events-none absolute size-2.5 border-b-2 border-r-2 border-chrome-green-ink bottom-0 right-0"></span>

        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="font-bbmono text-xs lowercase text-chrome-mute">
              live step execution inspection
            </p>
            <span className="font-bbmono text-[10px] px-2 py-0.5 bg-chrome-green/10 text-chrome-green-ink border border-chrome-green/30 rounded">
              {steps[currentStep].tag}
            </span>
          </div>

          <div className="rounded border border-chrome-edge bg-chrome-field p-3.5 mb-4">
            <span className="font-bbmono text-[11px] text-chrome-dim block mb-1">
              Active Call:
            </span>
            <code className="font-bbmono text-xs font-bold text-chrome-ink block break-all">
              {steps[currentStep].code}
            </code>
          </div>

          <div className="rounded border border-chrome-edge bg-white p-3.5 space-y-2">
            <span className="font-bbmono text-[11px] text-chrome-dim block">
              Observed Output:
            </span>
            <p className="font-bbmono text-xs text-chrome-slate leading-relaxed">
              {steps[currentStep].output}
            </p>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-chrome-rule flex items-center justify-between font-bbmono text-xs">
          <span className="text-chrome-dim">Pipeline: Autonomous Multi-Agent</span>
          <span className="text-chrome-green-ink font-bold">100% Deterministic</span>
        </div>
      </div>
    </div>
  );
};
