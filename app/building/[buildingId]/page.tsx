// app/building/[buildingId]/page.tsx
import { getBuildingById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, Building } from 'lucide-react';
import Image from 'next/image';
import BuildingSceneWrapper from '@/components/BuildingSceneWrapper';

export async function generateStaticParams() {
    // This would be better implemented with a proper data fetching strategy
    // For now, we'll return an empty array and use fallback: 'blocking'
    return [];
}

export default async function BuildingPage({
    params
}: {
    params: Promise<{ buildingId: string }>
}) {
    const { buildingId } = await params;
    const building = getBuildingById(buildingId);

    if (!building) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900">
            {/* Header */}
            <header className="fixed inset-x-0 top-0 z-40 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
                <div className="max-w-8xl mx-auto flex items-center justify-between px-6 sm:px-12 py-4">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="rounded-md bg-gradient-to-br from-gray-600 to-gray-900 p-2 text-white font-bold">EP</div>
                        <div className="leading-tight">
                            <div className="text-sm font-extrabold">Elite Properties</div>
                            <div className="text-xs text-slate-500">Premium Real Estate Solutions</div>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-3">
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105">Schedule Viewing</button>
                    </div>
                </div>
            </header>

            {/* Hero Section with 3D Model */}
            <section className="relative h-screen w-full pt-16">
                <div className="absolute inset-0">
                    <BuildingSceneWrapper
                        buildingModelPath={building.modelPath}
                        floors={building.floors}
                        buildingId={buildingId}
                    />
                </div>

                {/* Building Information Overlay */}
                <div className="absolute left-6 bottom-6 z-30 max-w-md">
                    <div className="bg-white/85 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl">
                        <h1 className="text-3xl font-bold mb-2">{building.name}</h1>
                        <p className="text-slate-600 mb-4">{building.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-slate-500" />
                                <span className="font-semibold">{building.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-slate-500" />
                                <span className="font-semibold">{building.possession}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Building Details */}
            <section className="max-w-8xl mx-auto px-6 sm:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40">
                            <h2 className="text-3xl font-bold mb-6">About {building.name}</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">{building.description}</p>

                            <h3 className="text-2xl font-bold mb-4">Building Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {building.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                            <span className="text-gray-800 font-bold">{index + 1}</span>
                                        </div>
                                        <span className="text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40">
                            <h3 className="text-2xl font-bold mb-6">Available Floors</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {building.floors.map((floor) => (
                                    <Link
                                        key={floor.id}
                                        href={`/building/${buildingId}/floor/${floor.id}`}
                                        className="group bg-white/60 p-6 rounded-2xl border border-white/50 hover:border-gray-400 transition-all hover:shadow-xl"
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="font-bold text-lg group-hover:text-gray-900 transition-colors">{floor.name}</h4>
                                            <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2 py-1 rounded-full">
                                                Level {floor.level}
                                            </span>
                                        </div>
                                        <p className="text-slate-600 text-sm mb-3 line-clamp-2">{floor.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-500 text-sm">{floor.size}</span>
                                            <span className="text-gray-900 font-bold">{floor.price}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/40">
                            <h3 className="text-xl font-bold mb-4">Building Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Building className="w-5 h-5 text-slate-500" />
                                    <div>
                                        <div className="text-xs text-slate-500">Total Floors</div>
                                        <div className="font-semibold">{building.totalFloors}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-slate-500" />
                                    <div>
                                        <div className="text-xs text-slate-500">Location</div>
                                        <div className="font-semibold">{building.location}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-slate-500" />
                                    <div>
                                        <div className="text-xs text-slate-500">Possession</div>
                                        <div className="font-semibold">{building.possession}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-600 to-gray-900 rounded-3xl p-8 text-white shadow-2xl">
                            <h3 className="text-2xl font-bold mb-3">Interested in {building.name}?</h3>
                            <p className="text-gray-100 mb-6">Schedule a personalized tour to experience this premium property.</p>
                            <button className="w-full bg-white text-gray-600 hover:bg-gray-50 font-bold py-3 px-6 rounded-xl transition-all hover:shadow-xl hover:scale-105">
                                Schedule Viewing
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/30 py-10 bg-white/50 backdrop-blur-xl">
                <div className="max-w-8xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
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