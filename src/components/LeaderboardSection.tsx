"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function LeaderboardSection() {
  return (
    <section className="relative w-full py-24 bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-normal tracking-tight mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Leading the Industry
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Our detection models consistently outperform the competition on standard benchmarks.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Placeholder for "PNG or something of us" */}
          <div className="relative z-10 bg-[#111] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Header Image Placeholder */}
            <div className="w-full h-64 relative bg-gradient-to-r from-indigo-900 to-purple-900 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              {/* This is where the user's PNG would go */}
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 mb-4">
                  <span className="text-4xl">🏆</span>
                </div>
                <h3 className="text-2xl font-medium tracking-wide">Nvyra X Sentinel</h3>
              </div>
            </div>

            {/* Leaderboard Table Mock */}
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider">
                      <th className="py-4 px-4 font-medium">Model</th>
                      <th className="py-4 px-4 font-medium">Accuracy</th>
                      <th className="py-4 px-4 font-medium">Deepfake Detection</th>
                      <th className="py-4 px-4 font-medium">Latency</th>
                    </tr>
                  </thead>
                  <tbody className="text-lg">
                    <tr className="border-b border-white/5 bg-white/5">
                      <td className="py-4 px-4 font-medium text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Nvyra X Sentinel
                      </td>
                      <td className="py-4 px-4 text-green-400 font-bold">99.8%</td>
                      <td className="py-4 px-4 text-white">99.5%</td>
                      <td className="py-4 px-4 text-white">12ms</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4 font-medium text-gray-400">Competitor A</td>
                      <td className="py-4 px-4 text-gray-400">94.2%</td>
                      <td className="py-4 px-4 text-gray-400">92.1%</td>
                      <td className="py-4 px-4 text-gray-400">45ms</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4 font-medium text-gray-400">Competitor B</td>
                      <td className="py-4 px-4 text-gray-400">89.5%</td>
                      <td className="py-4 px-4 text-gray-400">88.3%</td>
                      <td className="py-4 px-4 text-gray-400">120ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
