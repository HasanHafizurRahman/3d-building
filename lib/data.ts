// First, let's update the data structure to support multiple buildings

// lib/data.ts
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

export interface BuildingData {
    id: string;
    name: string;
    modelPath: string;
    description: string;
    location: string;
    totalFloors: number;
    possession: string;
    features: string[];
    floors: FloorData[];
}

export const buildingsData: BuildingData[] = [
    {
        id: 'skyline-heights',
        name: 'South Tower',
        modelPath: '/models/residential_building-compressed.glb',
        description: 'Premium residential building located in Bashundhara R/A offering 1–4 BHK options with modern amenities and panoramic city views.',
        location: 'Road 10, Bashundhara R/A, Dhaka',
        totalFloors: 5,
        possession: 'Ready',
        features: ['Prime Location', '24/7 Security', 'Rooftop Lounge', 'Smart Home Ready'],
        floors: [
            {
                id: 'floor-1',
                level: 1,
                name: 'Ground Floor - Retail',
                price: '$1,200,000',
                size: '3,500 sqft',
                description: 'Prime retail space with high foot traffic visibility. Perfect for restaurants, cafes, or flagship stores.',
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
                description: 'Modern office space with open floor plan and natural lighting. Ideal for tech companies or creative agencies.',
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
                description: 'Exclusive penthouse with private roof deck and panoramic city views. The ultimate in luxury living.',
                mapUrl: '/assets/w1024.jpg',
                color: '#475569',
                benefits: ['Private Roof Deck', 'Panoramic Views', 'Custom Finishes', 'Exclusive Access'],
            },
        ]
    },
    {
        id: 'mini-office',
        name: 'Mini Office Complex',
        modelPath: '/models/mini-office-building.glb',
        description: 'Modern office complex designed for startups and SMEs. Features flexible floor plans, collaborative spaces, and state-of-the-art facilities.',
        location: 'Road 5, Gulshan, Dhaka',
        totalFloors: 4,
        possession: 'Under Construction',
        features: ['Flexible Spaces', 'High-Speed Internet', 'Conference Facilities', 'Parking'],
        floors: [
            {
                id: 'mini-floor-1',
                level: 1,
                name: 'Ground Floor - Commercial',
                price: '$950,000',
                size: '2,800 sqft',
                description: 'Ground floor commercial space with high visibility and direct street access. Ideal for retail or banking.',
                mapUrl: '/assets/office-floor-1.png',
                color: '#dbeafe',
                benefits: ['High Visibility', 'Direct Street Access', 'Premium Location', 'Modern Design'],
            },
            {
                id: 'mini-floor-2',
                level: 2,
                name: '2nd Floor - Office',
                price: '$750,000',
                size: '2,500 sqft',
                description: 'Flexible office space with customizable layouts. Perfect for growing businesses and tech startups.',
                mapUrl: '/assets/office-floor-2.png',
                color: '#bfdbfe',
                benefits: ['Customizable Layout', 'Natural Lighting', 'High-Speed Internet', 'Modern Facilities'],
            }
        ]
    }
];

// Helper function to get building by ID
export const getBuildingById = (id: string): BuildingData | undefined => {
    return buildingsData.find(building => building.id === id);
};

// Helper function to get floor by building ID and floor ID
export const getFloorById = (buildingId: string, floorId: string): FloorData | undefined => {
    const building = getBuildingById(buildingId);
    if (!building) return undefined;
    return building.floors.find(floor => floor.id === floorId);
};