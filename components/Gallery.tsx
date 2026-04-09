'use client';

import Image from 'next/image';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  aspect: 'square' | 'horizontal' | 'vertical';
}

const galleryImages: GalleryImage[] = [
  {
    id: 'timber-logs',
    src: '/gallery-timber-logs.jpg',
    title: 'Timber Yard',
    description: 'Organized stacking of premium timber logs ready for processing',
    aspect: 'horizontal',
  },
  {
    id: 'cutting-process',
    src: '/gallery-cutting-process.jpg',
    title: 'Precision Cutting',
    description: 'Industrial circular saw cutting through timber with precision',
    aspect: 'horizontal',
  },
  {
    id: 'workshop',
    src: '/gallery-workshop.jpg',
    title: 'Workshop Interior',
    description: 'State-of-the-art sawmill workshop with multiple machines',
    aspect: 'horizontal',
  },
  {
    id: 'planks',
    src: '/gallery-planks.jpg',
    title: 'Finished Planks',
    description: 'Quality wooden planks ready for furniture and construction',
    aspect: 'square',
  },
  {
    id: 'furniture',
    src: '/gallery-furniture.jpg',
    title: 'Fine Furniture',
    description: 'Premium furniture crafted from our finest timber',
    aspect: 'square',
  },
];

function GalleryImage({ image }: { image: GalleryImage }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer ${
        image.aspect === 'horizontal'
          ? 'col-span-1 md:col-span-2'
          : image.aspect === 'vertical'
            ? 'col-span-1 row-span-2'
            : 'col-span-1'
      }`}
    >
      <Image
        src={image.src}
        alt={image.title}
        width={image.aspect === 'horizontal' ? 1200 : 600}
        height={image.aspect === 'horizontal' ? 600 : image.aspect === 'vertical' ? 800 : 600}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        priority={false}
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
        <p className="text-white/90 text-sm">{image.description}</p>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-3">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing our professional woodworking operations and premium timber products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[350px]">
          {galleryImages.map((image) => (
            <GalleryImage key={image.id} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}
