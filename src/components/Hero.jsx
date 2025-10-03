import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_50%,rgba(0,0,0,0.8)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/10 to-neutral-950/80" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-[88vh] flex-col items-center justify-center text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-neutral-950/40 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600" />
              Production ready cloud backend
            </span>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-6xl">
              Build faster with a secure, scalable backend
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
              Streamline auth, data, and hosting. Focus on your product while we power your infrastructure with modern tooling.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a href="#get-started" className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-900/20 hover:opacity-95 transition">
                Deploy your app
              </a>
              <a href="#docs" className="inline-flex items-center rounded-md border border-white/15 bg-neutral-950/50 px-6 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/30 transition">
                Read the docs
              </a>
            </div>
            <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-4 text-left sm:grid-cols-4">
              {[
                { label: '99.99% uptime', value: 'SLA' },
                { label: 'Global CDN', value: 'Edge' },
                { label: 'SOC 2 Type II', value: 'Security' },
                { label: 'SDKs for web & mobile', value: 'SDKs' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-white/10 bg-neutral-950/40 p-3">
                  <div className="text-xs uppercase tracking-wide text-white/50">{item.value}</div>
                  <div className="mt-1 text-sm font-medium text-white/90">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
