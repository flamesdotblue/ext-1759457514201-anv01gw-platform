import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-orange-500 to-red-600" />
            <span className="text-sm font-semibold tracking-wide text-white/90">Firebase Cloud</span>
          </div>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Firebase Cloud. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
