// Now let's update the main page to showcase both buildings

// app/page.tsx
'use client';

import React, { useState } from 'react';
import Scene from '@/components/Scene';
import { buildingsData, BuildingData, FloorData } from '@/lib/data';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Gallery1 from '../public/assets/gallery-1.png';
import Gallery2 from '../public/assets/gallery-2.jpg';
import Gallery3 from '../public/assets/gallery-3.png';

export default function Home() {
  const router = useRouter();
  const [selectedBuildingId, setSelectedBuildingId] = useState(buildingsData[0].id);
  const selectedBuilding = buildingsData.find(b => b.id === selectedBuildingId) || buildingsData[0];

  const handleFloorClick = (floor: FloorData) => {
    router.push(`/building/${selectedBuildingId}/floor/${floor.id}`);
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900">
      {/* Enhanced Header with Branding */}
      <header className="fixed inset-x-0 top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-12 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-gradient-to-br from-blue-600 to-purple-600 p-2 text-white font-bold">EP</div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold">Elite Properties</div>
              <div className="text-xs text-slate-500">Premium Real Estate Solutions</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => router.push('/contact')} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">Schedule Viewing</button>
          </div>
        </div>
      </header>

      {/* Building Selector */}
      <section className="pt-20 px-6 sm:px-12 py-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Our Premium Properties</h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {buildingsData.map((building) => (
              <button
                key={building.id}
                onClick={() => setSelectedBuildingId(building.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedBuildingId === building.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/70 backdrop-blur-xl text-slate-700 hover:bg-white/90'
                  }`}
              >
                {building.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Building Viewer */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0">
          <Scene
            buildingModelPath={selectedBuilding.modelPath}
            floors={selectedBuilding.floors}
            onFloorClick={handleFloorClick}
          />
        </div>

        {/* Building Information Overlay */}
        <div className="absolute left-6 bottom-6 z-30 max-w-md">
          <div className="bg-white/85 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-2">{selectedBuilding.name}</h2>
            <p className="text-slate-600 mb-4">{selectedBuilding.description}</p>
            <div className="flex gap-4 text-sm">
              <div>
                <span className="text-slate-500">Location:</span>
                <span className="ml-2 font-semibold">{selectedBuilding.location}</span>
              </div>
              <div>
                <span className="text-slate-500">Status:</span>
                <span className="ml-2 font-semibold">{selectedBuilding.possession}</span>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <span className="text-slate-500">Total Floors:</span>
              <span className="ml-2 font-semibold">{selectedBuilding.totalFloors}</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute right-6 top-6 z-30 flex flex-col gap-2">
          <button onClick={() => window.dispatchEvent(new Event('reset-orbit'))} className="bg-white/85 backdrop-blur-md px-3 py-2 rounded-lg shadow border text-sm">Reset View</button>
          <button onClick={() => window.dispatchEvent(new Event('toggle-autorotate'))} className="bg-white/85 backdrop-blur-md px-3 py-2 rounded-lg shadow border text-sm">Auto Rotate</button>
        </div>
      </section>

      {/* Building Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Building Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedBuilding.features.map((feature, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/40 transition-all hover:shadow-2xl hover:scale-105 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
        <h3 className="text-3xl font-bold mb-6 text-center">Gallery</h3>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in {selectedBuilding.name}?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Schedule a personalized tour to experience these premium properties in person. Our team is ready to assist you with all your real estate needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => router.push('/contact')} className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105">Schedule Viewing</button>
            <button className="bg-blue-500/30 backdrop-blur-sm hover:bg-blue-500/40 text-white font-semibold px-8 py-3 rounded-lg transition-all border-2 border-white/30 hover:border-white/50">Download Brochure</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/30 py-10 bg-white/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xl font-bold">Elite Properties</div>
            <div className="text-base text-slate-500">Premium Real Estate Solutions</div>
          </div>
          <div className="text-base text-slate-500">© {new Date().getFullYear()} Elite Properties</div>
        </div>
      </footer>
    </main>
  );
}