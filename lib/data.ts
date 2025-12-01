export interface FloorData {
    id: string;
    level: number;
    name: string;
    price: string;
    size: string;
    description: string;
    mapUrl: string;
    color: string;
    benefits: string[];
}

export const buildingData: FloorData[] = [
    {
        id: 'floor-1',
        level: 1,
        name: 'Ground Floor - Retail',
        price: '$1,200,000',
        size: '3,500 sqft',
        description: 'Prime retail space with high foot traffic visibility. Perfect for restaurants, cafes, or flagship stores. Features large glass windows and modern finishes.',
        mapUrl: '/assets/home-plans-building-design-500x500.webp',
        color: '#e2e8f0',
        benefits: ['High Foot Traffic', '24/7 Security', 'Dedicated Parking', 'Modern Infrastructure'],
    },
    {
        id: 'floor-2',
        level: 2,
        name: '2nd Floor - Office',
        price: '$950,000',
        size: '2,800 sqft',
        description: 'Modern office space with open floor plan and natural lighting. Ideal for tech companies, startups, or creative agencies.',
        mapUrl: '/assets/03_Second_floor_plan.webp',
        color: '#cbd5e1',
        benefits: ['Open Floor Plan', 'High-Speed Internet', 'Meeting Rooms', 'Pantry Area'],
    },
    {
        id: 'floor-3',
        level: 3,
        name: '3rd Floor - Residential',
        price: '$850,000',
        size: '2,200 sqft',
        description: 'Luxury apartment with city views and premium finishes. Features spacious living areas and modern kitchen.',
        mapUrl: '/assets/RoomSketcher-Custom-2D-Floor-Plan-Branding.jpg',
        color: '#94a3b8',
        benefits: ['City Views', 'Premium Finishes', 'Spacious Balcony', 'Smart Home Ready'],
    },
    {
        id: 'floor-4',
        level: 4,
        name: '4th Floor - Residential',
        price: '$875,000',
        size: '2,200 sqft',
        description: 'Luxury apartment with private balcony overlooking the city. Includes premium appliances and elegant design.',
        mapUrl: '/assets/RoomSketcher-High-Quality-3D-Floor-Plans.jpg',
        color: '#64748b',
        benefits: ['Private Balcony', 'Premium Appliances', 'Walk-in Closet', 'En-suite Bathrooms'],
    },
    {
        id: 'floor-5',
        level: 5,
        name: 'Penthouse',
        price: '$2,500,000',
        size: '4,000 sqft',
        description: 'Exclusive penthouse with private roof deck and panoramic city views. The ultimate in luxury living with custom finishes throughout.',
        mapUrl: '/assets/w1024.jpg',
        color: '#475569',
        benefits: ['Private Roof Deck', 'Panoramic Views', 'Custom Finishes', 'Exclusive Access'],
    },
];
