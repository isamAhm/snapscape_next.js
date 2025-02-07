'use client';

import { MasonryGrid } from '@/components/masonry-grid';

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center ">
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Explore</h1>
        <MasonryGrid />
      </div>
    </div>
  );
}