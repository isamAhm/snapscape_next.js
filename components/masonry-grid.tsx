'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Pin } from '@/components/pin';
import { Skeleton } from '@/components/ui/skeleton';

const INITIAL_PINS = [
  {
    id: 1,
    title: 'Modern Interior Design',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    author: 'Sarah Chen',
    likes: 234,
    category: 'Interior'
  },
  {
    id: 2,
    title: 'Street Photography',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    author: 'Mike Ross',
    likes: 456,
    category: 'Photography'
  },
  {
    id: 3,
    title: 'Minimalist Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80',
    author: 'Emma Wilson',
    likes: 789,
    category: 'Fashion'
  },
  {
    id: 4,
    title: 'Nature Photography',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
    author: 'John Doe',
    likes: 123,
    category: 'Photography'
  },
  {
    id: 5,
    title: 'Tech Workspace',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    author: 'Alex Johnson',
    likes: 567,
    category: 'Tech'
  },
  {
    id: 6,
    title: 'Urban Architecture',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    author: 'David Lee',
    likes: 890,
    category: 'Architecture'
  }
];

export function MasonryGrid() {
  const [pins, setPins] = useState(INITIAL_PINS);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView && !loading) {
      loadMorePins();
    }
  }, [inView]);

  const loadMorePins = async () => {
    setLoading(true);
    // Simulate loading more pins
    setTimeout(() => {
      setPins(prev => [...prev, ...INITIAL_PINS.map(pin => ({ ...pin, id: pin.id + prev.length }))]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="container py-8">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {pins.map((pin) => (
          <Pin key={pin.id} {...pin} />
        ))}
        {loading && (
          <>
            <Skeleton className="h-[300px] w-full rounded-lg" />
            <Skeleton className="h-[250px] w-full rounded-lg" />
            <Skeleton className="h-[350px] w-full rounded-lg" />
          </>
        )}
        <div ref={ref} className="h-10" />
      </div>
    </div>
  );
}