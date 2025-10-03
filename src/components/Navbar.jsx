import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-red-600" />
            <span className="text-sm font-semibold tracking-wide text-white/90">Firebase Cloud</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#docs" className="hover:text-white transition">Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-md border border-white/15 px-3 py-1.5 text-sm text-white/80 hover:text-white hover:border-white/30 transition">Sign in</button>
            <button className="inline-flex items-center rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-900/20 hover:opacity-95 transition">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
