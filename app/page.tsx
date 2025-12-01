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
    <main className="relative w-full h-screen overflow-hidden bg-gray-50">
      <div className="absolute top-4 left-4 z-10">
        <h1 className="text-3xl font-bold text-blue-900 tracking-tight">Skyline Heights</h1>
        <p className="text-gray-500">Interactive 3D Building Explorer</p>
      </div>

      <Scene onFloorClick={handleFloorClick} />
    </main>
  );
}
