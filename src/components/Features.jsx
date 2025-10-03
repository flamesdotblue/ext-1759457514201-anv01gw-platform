import React from 'react';
import { Rocket, Shield, Bolt, LineChart } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Instant setup',
    desc: 'Provision projects, enable services, and connect your app in minutes with guided flows.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'Built-in auth, rules, and monitoring to protect your data at every layer.',
  },
  {
    icon: Bolt,
    title: 'Real-time and serverless',
    desc: 'Sync state in real time and run on-demand functions at the edge or cloud.',
  },
  {
    icon: LineChart,
    title: 'Scales with you',
    desc: 'Auto-scaling infrastructure and analytics to keep performance predictable.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full border-t border-white/10 bg-neutral-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to launch</h2>
          <p className="mt-3 text-white/70">
            A streamlined toolkit to authenticate users, store data, deploy, and observe your app—without the overhead.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5 transition hover:border-white/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-md shadow-red-900/20">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="inline-flex items-center rounded-md bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition">View pricing</a>
          <a href="#contact" className="inline-flex items-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 hover:text-white hover:border-white/30 transition">Talk to sales</a>
        </div>
      </div>
    </section>
  );
}
