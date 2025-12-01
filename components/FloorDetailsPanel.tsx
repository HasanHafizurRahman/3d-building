'use client';

import { FloorData } from '@/lib/data';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Map } from 'lucide-react';
import Link from 'next/link';

interface FloorDetailsPanelProps {
    floor: FloorData | null;
    onClose: () => void;
}

export default function FloorDetailsPanel({ floor, onClose }: FloorDetailsPanelProps) {
    return (
        <AnimatePresence>
            {floor && (
                <motion.div
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                    className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-white/80 backdrop-blur-2xl shadow-2xl z-50 p-8 overflow-y-auto border-l border-white/20"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 hover:bg-black/5 rounded-full transition-colors group"
                    >
                        <X className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition-colors" />
                    </button>

                    <div className="mt-12 space-y-8">
                        <div>
                            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
                                Level {floor.level}
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 tracking-tight">{floor.name}</h2>
                            <p className="text-blue-600 font-bold text-2xl mt-2">{floor.price}</p>
                        </div>

                        <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-inner">
                            {/* Placeholder for Map Image */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                                <Map className="w-12 h-12 mb-2 opacity-50" />
                                <span className="text-sm font-medium tracking-wide">INTERACTIVE MAP</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/50 p-4 rounded-xl border border-white/50">
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Total Area</span>
                                <p className="text-lg font-semibold text-gray-900 mt-1">{floor.size}</p>
                            </div>
                            <div className="bg-white/50 p-4 rounded-xl border border-white/50">
                                <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Status</span>
                                <p className="text-lg font-semibold text-green-600 mt-1">Available</p>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            {floor.description}
                        </p>

                        <div className="pt-6">
                            <Link
                                href={`/floor/${floor.id}`}
                                className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                            >
                                View Full Details
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
