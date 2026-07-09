import React from 'react';
import Image from 'next/image';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const photos = [
  { id: 1, src: '/gallery/another_iamges/Professional house cleaning Manchester.jpg', tag: 'RESIDENTIAL', tagBg: 'bg-[rgba(42,143,212,0.85)]', title: 'Residential Deep Clean', location: 'Salford, Manchester', cols: 'lg:col-span-2', rows: 'lg:row-span-2', category: 'residential' },
  { id: 2, src: '/gallery/another_iamges/Bathroom cleaning Manchester.jpg', tag: 'BATHROOM', tagBg: 'bg-[rgba(16,185,129,0.85)]', title: 'Bathroom Sparkle Clean', location: 'Trafford, Manchester', cols: 'lg:col-span-1', rows: 'lg:row-span-1', category: 'residential' },
  { id: 3, src: '/gallery/another_iamges/Office cleaning Manchester.jpg', tag: 'COMMERCIAL', tagBg: 'bg-[rgba(26,47,69,0.85)]', title: 'Office Deep Clean', location: 'City Centre, Manchester', cols: 'lg:col-span-1', rows: 'lg:row-span-1', category: 'commercial' },
  { id: 4, src: '/gallery/befor_after/Kitchen after deep cleaning Manchester.jpg', tag: 'KITCHEN AFTER', tagBg: 'bg-[rgba(245,158,11,0.85)]', title: 'Kitchen Deep Clean', location: 'Manchester', cols: 'lg:col-span-2', rows: 'lg:row-span-1', category: 'before-after' },
  { id: 5, src: '/gallery/another_iamges/Kitchen cleaning Bolton Manchester.jpg', tag: 'KITCHEN', tagBg: 'bg-[rgba(245,158,11,0.85)]', title: 'Kitchen Cleaning', location: 'Bolton, Manchester', cols: 'lg:col-span-1', rows: 'lg:row-span-1', category: 'kitchen' },
  { id: 6, src: '/gallery/another_iamges/Retail shop cleaning Manchester.jpg', tag: 'RETAIL', tagBg: 'bg-[rgba(26,47,69,0.85)]', title: 'Retail Shop Clean', location: 'Stockport, Manchester', cols: 'lg:col-span-1', rows: 'lg:row-span-1', category: 'commercial' },
  { id: 7, src: '/gallery/befor_after/Property after end of tenancy cleaning.jpg', tag: 'END OF TENANCY', tagBg: 'bg-[rgba(42,143,212,0.9)]', title: 'End of Tenancy Result', location: 'Stretford, Manchester', cols: 'lg:col-span-1', rows: 'lg:row-span-2', category: 'before-after' },
  { id: 10, src: '/gallery/befor_after/Kitchen before deep cleaning Manchester.jpg', tag: 'KITCHEN BEFORE', tagBg: 'bg-[rgba(245,158,11,0.85)]', title: 'Kitchen Before Clean', location: 'Manchester', cols: 'lg:col-span-1', rows: 'lg:row-span-1', category: 'before-after' },
  { id: 11, src: '/gallery/befor_after/Property before end of tenancy cleaning.jpg', tag: 'END OF TENANCY', tagBg: 'bg-[rgba(42,143,212,0.9)]', title: 'End of Tenancy Before', location: 'Stretford, Manchester', cols: 'lg:col-span-1', rows: 'lg:row-span-1', category: 'before-after' },
  { id: 8, src: '/gallery/another_iamges/Move in cleaning Manchester.jpg', tag: 'MOVE-IN CLEAN', tagBg: 'bg-[rgba(42,143,212,0.85)]', title: 'Move-In Property Clean', location: 'Manchester', cols: 'lg:col-span-1', rows: 'lg:row-span-1', category: 'residential' },
  { id: 9, src: '/gallery/another_iamges/Workspace sanitisation Manchester.jpg', tag: 'SANITISATION', tagBg: 'bg-[rgba(26,47,69,0.85)]', title: 'Workspace Sanitisation', location: 'Salford Quays', cols: 'lg:col-span-1', rows: 'lg:row-span-1', category: 'commercial' },
];

interface MasonryGridProps {
  filter: string;
}

export default function MasonryGrid({ filter }: MasonryGridProps) {
  const filtered = filter === 'All Photos'
    ? photos
    : photos.filter(p => p.category === filter.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'));

  return (
    <section className="w-full bg-white pt-6 pb-[100px] px-4 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <AnimateOnScroll animation="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className={`relative rounded-[18px] overflow-hidden shadow-[0_2px_8px_rgba(42,143,212,0.08)] ${photo.src ? 'bg-[rgba(255,255,255,0)]' : 'bg-gradient-to-b from-[rgba(15,76,129,0)] to-[rgba(15,76,129,0.75)]'} ${photo.cols} ${photo.rows}`}
            >
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-[#1c2d3e] text-center px-4">
                    <p className="font-inter text-[14px] leading-relaxed">Regular house cleaning Bury Manchester</p>
                  </div>
                </div>
              )}
              {photo.src && <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(15,76,129,0.75)] opacity-0 hover:opacity-100 transition-opacity duration-300" />}

              <div className={`absolute top-[12px] left-[12px] backdrop-blur-[8px] rounded-[6px] px-[10px] py-[5px] ${photo.tagBg}`}>
                <span className="font-inter font-semibold text-[10.5px] tracking-[0.63px] uppercase text-white">
                  {photo.tag}
                </span>
              </div>

              {photo.src && (
              <div className="absolute bottom-[18px] left-[18px] right-[18px] flex flex-col gap-[7px] opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-plus-jakarta-sans font-bold text-[15px] text-white">{photo.title}</h3>
                <p className="font-inter text-[12px] text-[rgba(255,255,255,0.8)]">{photo.location}</p>
              </div>
              )}
            </div>
          ))}
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
