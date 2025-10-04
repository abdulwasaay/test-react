import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '../utils/cn';

const products = [
    { category: 'ALL', id: 'all' },
    { category: 'Health Supreme', id: 'health' },
    { category: 'Diet 360', id: 'diet' },
    { category: 'GIGA', id: 'giga' },
    { category: 'Marketplace & Commerce Platform', id: 'marketplace' },
    { category: 'Sports Tracking App', id: 'sports' },
    { category: 'Studio', id: 'studio' },
];

const productImages: any = {
    all: [
       '/dumms.png',
        '/dumms.png',
         '/dumms.png',
        '/diet.png',
         '/diet.png',
        '/diet.png',
         '/dumms.png',
        '/dumms.png',
         '/dumms.png',
        '/diet.png',
        '/diet.png',
         '/dumms.png',
        '/diet.png',
        '/diet.png',
    ],
    health: [
        '/dumms.png',
        '/diet.png',
    ],
    diet: [
        '/diet.png',
        '/diet.png',
    ],
    giga:[
        '/dumms.png',
        '/dumms.png',
    ],
    marketplace:[
        '/dumms.png',
        '/diet.png',
        '/diet.png',
    ],
    sports:[
        '/dumms.png',
        '/dumms.png',
        '/diet.png',
    ],
    studio:[
        '/dumms.png',
        '/dumms.png',
    ]
};

export default function Products() {
    const [selectedTab, setSelectedTab] = useState('all');

    return (
        <section id='products' className="bg-gradient-to-b from-red-600 to-red-700 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-8">Products</h2>
                </div>

                {/* Tabs */}
                <Tab.Group onChange={(index) => setSelectedTab(products[index].id)}>
                    <Tab.List className="flex flex-wrap justify-center gap-4 mb-12">
                        {products.map((product) => (
                            <Tab
                                key={product.id}
                                className={({ selected }) => cn(
                                    'px-6 py-2.5 rounded-full font-medium transition-all',
                                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white',
                                    selected
                                        ? 'bg-white text-red-600 shadow-lg'
                                        : 'text-white hover:bg-white/10'
                                )}
                            >
                                {product.category}
                            </Tab>
                        ))}
                    </Tab.List>

                    {/* Content */}
                    <Tab.Panels className="mb-16">
                        {products.map((product) => (
                            <Tab.Panel
                                key={product.id}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {productImages[product.id]?.map((image: any, idx: number) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-lg p-4 shadow-lg transform hover:scale-105 transition-transform duration-300"
                                    >
                                        <img
                                            src={image}
                                            alt={`${product.category} ${idx + 1}`}
                                            className="w-full h-auto rounded"
                                        />
                                    </div>
                                ))}
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </section>
    );
}