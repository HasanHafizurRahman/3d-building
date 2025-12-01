'use client';

import React from 'react';
import Scene from '@/components/Scene';
import { FloorData } from '@/lib/data';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleFloorClick = (floor: FloorData) => {
    router.push(`/floor/${floor.id}`);
  };

  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* ======= HEADER (minimal overlay so it doesn't occupy hero space) ======= */}
      <header className="fixed inset-x-0 top-4 z-40 px-6 sm:px-12 pointer-events-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 bg-white/70 backdrop-blur rounded-xl px-3 py-2 shadow-md border border-white/40">
            <div className="rounded-md bg-gradient-to-br from-blue-600 to-purple-600 p-2 text-white font-bold">SH</div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold">Skyline Heights</div>
              <div className="text-xs text-slate-500">Interactive 3D building explorer</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => router.push('/contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm">Schedule Viewing</button>
          </div>
        </div>
      </header>

      {/* ======= HERO: FULL-SCREEN BUILDING (no sibling content inside the hero) ======= */}
      <section id="hero" className="relative h-screen w-full">
        {/* Scene fills the hero area. Scene component itself uses full-screen sizing; keep it as the single visual child here. */}
        <div className="absolute inset-0">
          <Scene onFloorClick={handleFloorClick} />
        </div>

        {/* Minimal floating hints/controls (small and non-obtrusive) */}
        <div className="absolute left-6 bottom-6 z-30">
          <div className="bg-white/85 backdrop-blur-md border border-white/30 rounded-2xl p-3 shadow text-sm">
            <div className="text-xs text-slate-500">Interact</div>
            <div className="text-sm font-semibold">Click a floor to view details</div>
          </div>
        </div>

        <div className="absolute right-6 top-6 z-30 flex flex-col gap-2">
          <button onClick={() => window.dispatchEvent(new Event('reset-orbit'))} className="bg-white/85 backdrop-blur-md px-3 py-2 rounded-lg shadow border text-sm">Reset</button>
          <button onClick={() => window.dispatchEvent(new Event('toggle-autorotate'))} className="bg-white/85 backdrop-blur-md px-3 py-2 rounded-lg shadow border text-sm">Auto</button>
        </div>
      </section>

      {/* ======= BELOW THE FOLD: All other content lives here so it never competes with the hero space ======= */}
      <section id="overview" className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow border border-white/40">
              <h2 className="text-2xl font-bold mb-2">Property Overview</h2>
              <p className="text-slate-600">Skyline Heights is a premium residential building located in Bashundhara R/A offering 1–4 BHK options. Use the 3D viewer above to inspect floors, layouts and pricing — then scroll here for full specs and CTA.</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-white p-4 rounded-2xl shadow-sm border"> <div className="text-xs text-slate-500">Total Floors</div><div className="font-bold">12</div></div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border"> <div className="text-xs text-slate-500">Possession</div><div className="font-bold">Ready</div></div>
              </div>
            </div>

            <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow"> <h4 className="font-bold">Prime Location</h4><p className="text-sm text-slate-600">Close to schools, malls and major roads.</p></div>
              <div className="bg-white p-6 rounded-2xl shadow"> <h4 className="font-bold">Amenities</h4><p className="text-sm text-slate-600">Lift, generator, security, rooftop lounge.</p></div>
              <div className="bg-white p-6 rounded-2xl shadow"> <h4 className="font-bold">Financing</h4><p className="text-sm text-slate-600">EMI plans available.</p></div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow border">
              <h4 className="font-bold">Quick Stats</h4>
              <div className="mt-3 text-sm text-slate-600">Area, Levels, Availability and more. Use the 3D model to open floor pages.</div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
              <h4 className="text-lg font-bold">Schedule Viewing</h4>
              <p className="text-sm opacity-90 mt-2">Pick a date and we’ll show you the floor in-person.</p>
              <div className="mt-4">
                <button onClick={() => router.push('/contact')} className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold">Contact Sales</button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* GALLERY + CTA + FOOTER (kept after hero) */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 sm:px-12 py-8">
        <h3 className="text-2xl font-bold mb-4">Preview gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="h-40 rounded-xl overflow-hidden bg-gray-100 shadow"><img src="/images/gallery-1.jpg" alt="gallery" className="w-full h-full object-cover" /></div>
          <div className="h-40 rounded-xl overflow-hidden bg-gray-100 shadow"><img src="/images/gallery-2.jpg" alt="gallery" className="w-full h-full object-cover" /></div>
          <div className="h-40 rounded-xl overflow-hidden bg-gray-100 shadow"><img src="/images/gallery-3.jpg" alt="gallery" className="w-full h-full object-cover" /></div>
        </div>
      </section>

      <footer className="border-t border-white/50 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold">Skyline Heights</div>
            <div className="text-sm text-slate-500">Road 10, Bashundhara R/A, Dhaka</div>
          </div>

          <div className="text-sm text-slate-500">© {new Date().getFullYear()} Skyline Heights</div>
        </div>
      </footer>
    </main>
  );
}
