'use client';

import React from 'react';
import Scene from '@/components/Scene';
import { FloorData } from '@/lib/data';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // Added for lazy loading
import Gallery1 from '../public/assets/gallery-1.png';
import Gallery2 from '../public/assets/gallery-2.png';
import Gallery3 from '../public/assets/gallery-3.png';

export default function Home() {
  const router = useRouter();

  const handleFloorClick = (floor: FloorData) => {
    router.push(`/floor/${floor.id}`);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900">
      {/* ======= HEADER (enhanced with stronger glassmorphism and subtle animation) ======= */}
      <header className="fixed inset-x-0 top-4 z-40 px-6 sm:px-12 pointer-events-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 bg-white/50 backdrop-blur-xl rounded-xl px-4 py-3 shadow-lg border border-white/50 transition-all hover:scale-105">
            <div className="rounded-md bg-gradient-to-br from-blue-600 to-purple-600 p-2 text-white font-bold">SH</div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold">Skyline Heights</div>
              <div className="text-xs text-slate-500">Interactive 3D building explorer</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => router.push('/contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">Schedule Viewing</button>
          </div>
        </div>
      </header>

      {/* ======= HERO: FULL-SCREEN BUILDING (unchanged as per request) ======= */}
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

      {/* ======= BELOW THE FOLD: Enhanced with animations, better spacing, and glassmorphism ======= */}
      <section id="overview" className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 transition-all hover:shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">Property Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed">Skyline Heights is a premium residential building located in Bashundhara R/A offering 1–4 BHK options. Use the 3D viewer above to inspect floors, layouts and pricing — then scroll here for full specs and CTA.</p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/80 p-5 rounded-2xl shadow-md border border-white/30 transition-all hover:scale-105"> <div className="text-xs text-slate-500">Total Floors</div><div className="font-bold text-xl">12</div></div>
                <div className="bg-white/80 p-5 rounded-2xl shadow-md border border-white/30 transition-all hover:scale-105"> <div className="text-xs text-slate-500">Possession</div><div className="font-bold text-xl">Ready</div></div>
              </div>
            </div>

            <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40 transition-all hover:shadow-2xl hover:scale-105"> <h4 className="text-xl font-bold mb-2">Prime Location</h4><p className="text-base text-slate-600">Close to schools, malls and major roads.</p></div>
              <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40 transition-all hover:shadow-2xl hover:scale-105"> <h4 className="text-xl font-bold mb-2">Amenities</h4><p className="text-base text-slate-600">Lift, generator, security, rooftop lounge.</p></div>
              <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40 transition-all hover:shadow-2xl hover:scale-105"> <h4 className="text-xl font-bold mb-2">Financing</h4><p className="text-base text-slate-600">EMI plans available.</p></div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/40 transition-all hover:shadow-2xl">
              <h4 className="text-xl font-bold mb-4">Quick Stats</h4>
              <div className="text-base text-slate-600">Area, Levels, Availability and more. Use the 3D model to open floor pages.</div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl transition-all hover:scale-105">
              <h4 className="text-2xl font-bold mb-3">Schedule Viewing</h4>
              <p className="text-base opacity-90 mt-2">Pick a date and we’ll show you the floor in-person.</p>
              <div className="mt-6">
                <button onClick={() => router.push('/contact')} className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105">Contact Sales</button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* GALLERY + CTA + FOOTER (enhanced with lazy loading and animations) */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <h3 className="text-3xl font-bold mb-6">Preview Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-md transition-all hover:shadow-2xl hover:scale-105">
            <Image src={Gallery1} alt="Gallery 1" width={400} height={200} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-md transition-all hover:shadow-2xl hover:scale-105">
            <Image src={Gallery2} alt="Gallery 2" width={400} height={200} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="h-80 rounded-2xl overflow-hidden bg-gray-100 shadow-md transition-all hover:shadow-2xl hover:scale-105">
            <Image src={Gallery3} alt="Gallery 3" width={400} height={200} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/30 py-10 bg-white/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          <div>
            <div className="text-xl font-bold">Skyline Heights</div>
            <div className="text-base text-slate-500">Road 10, Bashundhara R/A, Dhaka</div>
          </div>

          <div className="text-base text-slate-500">© {new Date().getFullYear()} Skyline Heights</div>
        </div>
      </footer>
    </main>
  );
}