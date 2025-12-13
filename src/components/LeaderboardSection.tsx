"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function LeaderboardSection() {
  return (
    <section className="relative w-full py-32 bg-black text-white border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-light tracking-tight mb-8 bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Unrivaled Performance
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            The industry standard for deepfake detection. Verified by independent benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              name: "Blackwell",
              role: "Text Reasoning",
              desc: "Named after the architecture it was trained on. Detects linguistic patterns and semantic inconsistencies in generated text with 99.9% accuracy.",
              color: "from-purple-500 to-indigo-600"
            },
            {
              name: "Sentinel",
              role: "Image Forensics",
              desc: "Analyzes pixel-level artifacts and frequency domain anomalies to identify manipulated imagery in milliseconds.",
              color: "from-blue-500 to-cyan-600"
            },
            {
              name: "Velora",
              role: "Propagation Analysis",
              desc: "Predicts viral spread patterns of disinformation campaigns, measuring potential reach and impact before they scale.",
              color: "from-emerald-500 to-teal-600"
            }
          ].map((model, i) => (
            <div key={i} className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-500">
              <div className="relative h-full bg-[#050505] rounded-2xl p-8 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${model.color} opacity-10 blur-[50px] group-hover:opacity-20 transition-opacity`}></div>
                <h3 className="text-2xl font-medium mb-2 tracking-wide text-white">{model.name}</h3>
                <div className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-wider">{model.role}</div>
                <p className="text-gray-400 leading-relaxed text-sm">{model.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          {/* Glow effects */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Realistic Leaderboard */}
          <div className="relative z-10 bg-[#050505] rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl">
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
                <span className="text-sm text-gray-400 font-mono">BENCHMARK_RESULTS_v4.2.0</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                LIVE UPDATES
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 text-gray-400 text-xs font-mono uppercase tracking-wider">
                    <th className="py-6 px-8 font-medium">Model Architecture</th>
                    <th className="py-6 px-8 font-medium">Deepfake Accuracy</th>
                    <th className="py-6 px-8 font-medium">Text Reasoning</th>
                    <th className="py-6 px-8 font-medium">Inference Time</th>
                  </tr>
                </thead>
                <tbody className="text-base divide-y divide-white/5">
                  <tr className="group bg-gradient-to-r from-indigo-500/10 to-purple-500/5 hover:from-indigo-500/20 transition-colors">
                    <td className="py-6 px-8 font-medium text-white flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold shadow-[0_0_15px_rgba(99,102,241,0.5)]">NX</div>
                      Nvyra X Platform
                    </td>
                    <td className="py-6 px-8 text-white font-medium">99.92%</td>
                    <td className="py-6 px-8 text-white font-medium">98.5%</td>
                    <td className="py-6 px-8 text-emerald-400 font-mono text-sm">12ms</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-8 font-medium text-gray-400 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-xs font-bold">O4</div>
                      OpenAI GPT-4o
                    </td>
                    <td className="py-6 px-8 text-gray-500">92.4%</td>
                    <td className="py-6 px-8 text-gray-500">95.1%</td>
                    <td className="py-6 px-8 text-gray-500 font-mono text-sm">45ms</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-8 font-medium text-gray-400 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-xs font-bold">C3</div>
                      Claude 3.5 Sonnet
                    </td>
                    <td className="py-6 px-8 text-gray-500">89.8%</td>
                    <td className="py-6 px-8 text-gray-500">96.2%</td>
                    <td className="py-6 px-8 text-gray-500 font-mono text-sm">120ms</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-6 px-8 font-medium text-gray-400 flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-xs font-bold">G1</div>
                      Gemini 1.5 Pro
                    </td>
                    <td className="py-6 px-8 text-gray-500">88.5%</td>
                    <td className="py-6 px-8 text-gray-500">94.8%</td>
                    <td className="py-6 px-8 text-gray-500 font-mono text-sm">90ms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}