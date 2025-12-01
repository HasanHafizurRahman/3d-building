'use client';

import Scene from '@/components/Scene';
import { FloorData } from '@/lib/data';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleFloorClick = (floor: FloorData) => {
    router.push(`/floor/${floor.id}`);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-white">
      {/* Top Branding */}
      <div className="absolute top-6 left-10 z-20">
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight drop-shadow-sm">
          Skyline Heights
        </h1>
        <p className="text-gray-600 mt-1 text-sm tracking-wide">
          Explore the building floor by floor
        </p>
      </div>

      {/* Floating Right Panel */}
      <div className="absolute top-6 right-10 z-20 bg-white/90 backdrop-blur-lg border border-gray-200 
                      rounded-2xl shadow-xl p-6 w-64 space-y-4">

        <h2 className="text-lg font-bold text-gray-900">Property Overview</h2>

        <div className="text-sm space-y-1 text-gray-700">
          <p><span className="font-semibold">Location:</span> Bashundhara R/A</p>
          <p><span className="font-semibold">Status:</span> Ready Flat</p>
          <p><span className="font-semibold">Total Floors:</span> 12</p>
        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-2.5 rounded-xl 
                     text-sm font-semibold text-white"
        >
          Download Brochure
        </button>

        <button
          className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all py-2.5 rounded-xl 
                     text-sm font-semibold text-white"
        >
          Contact Sales Team
        </button>
      </div>

      {/* Soft fade for ground area (light-mode version) */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 
                      bg-gradient-to-t from-white to-transparent z-10" />

      <Scene onFloorClick={handleFloorClick} />
    </main>
  );
}
