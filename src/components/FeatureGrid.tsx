"use client";

import Link from "next/link";
import { FiArrowRight, FiTerminal, FiZap, FiServer, FiShield } from "react-icons/fi";

export function FeatureGrid() {
  return (
    <section className="relative w-full bg-black py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-[1440px]">
        
        {/* Top Grid: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#333] border border-[#333] overflow-hidden rounded-lg mb-px">
          
          {/* Left Column: Developer Experience */}
          <div className="bg-[#111] p-12 flex flex-col justify-between h-full min-h-[500px]">
            <div>
              <span className="text-blue-400 mb-4 block text-sm font-medium uppercase tracking-widest">
                Developer Experience
              </span>
              <h2 className="text-white text-4xl lg:text-5xl font-normal leading-tight mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Scale simplified
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Fully managed and serverless for effortless scaling. Integrate our API with just a few lines of code.
              </p>
            </div>

            <div className="mt-12 space-y-8 divide-y divide-[#333]">
              <div className="pt-8 first:pt-0">
                <h3 className="text-white text-xl font-medium mb-2 flex items-center gap-2">
                  <FiZap className="text-blue-400" /> Rapid setup
                </h3>
                <p className="text-gray-500">Launch your detection pipelines in seconds.</p>
              </div>
              <div className="pt-8">
                <h3 className="text-white text-xl font-medium mb-2 flex items-center gap-2">
                  <FiServer className="text-purple-400" /> Serverless scaling
                </h3>
                <p className="text-gray-500">Resources adjust to meet your demand automatically.</p>
              </div>
              <div className="pt-8">
                <h3 className="text-white text-xl font-medium mb-2 flex items-center gap-2">
                  <FiShield className="text-green-400" /> Rock-solid reliability
                </h3>
                <p className="text-gray-500">Trust in consistent uptime for critical applications.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Code Block */}
          <div className="bg-[#111] p-12 flex flex-col justify-center border-l border-[#333]">
            <div className="w-full rounded-lg overflow-hidden border border-[#333] bg-[#0d0d0d] shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#333] bg-[#1a1a1a]">
                <div className="text-gray-400 text-sm font-mono">detect.py</div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="language-python">
                    <span className="text-purple-400">from</span> nvyra <span className="text-purple-400">import</span> NvyraClient{'\n\n'}
                    
                    <span className="text-gray-500"># Initialize the client</span>{'\n'}
                    client = NvyraClient(api_key=<span className="text-green-400">"nv_..."</span>){'\n\n'}
                    
                    <span className="text-gray-500"># Detect deepfakes in real-time</span>{'\n'}
                    result = client.detect({'\n'}
                    {'  '}image_url=<span className="text-green-400">"https://example.com/image.jpg"</span>,{'\n'}
                    {'  '}models=[<span className="text-green-400">"deepfake-v2"</span>, <span className="text-green-400">"gan-inspector"</span>]{'\n'}
                    ){'\n\n'}
                    
                    <span className="text-blue-400">print</span>(f<span className="text-green-400">"Is Fake: {'{result.is_fake}'}"</span>){'\n'}
                    <span className="text-blue-400">print</span>(f<span className="text-green-400">"Confidence: {'{result.confidence}'}"</span>)
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid: CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#333] border border-[#333] overflow-hidden rounded-lg">
          
          {/* Text Box */}
          <div className="bg-[#111] p-12 flex items-center border-r border-[#333]">
            <h2 className="text-3xl lg:text-4xl font-normal text-white leading-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Start building knowledgeable AI today
            </h2>
          </div>

          {/* Buttons Box */}
          <div className="bg-[#111] p-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/signup"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium text-lg rounded-none hover:bg-gray-200 transition-colors text-center"
            >
              Start Building
            </Link>
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white font-medium text-lg rounded-none hover:bg-white/10 transition-colors text-center"
            >
              Get a Demo
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
