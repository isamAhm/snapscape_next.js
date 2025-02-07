'use client';

import { useState } from 'react';
import { Heart, Share2, BookmarkPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

interface PinProps {
  id: number;
  title: string;
  image: string;
  author: string;
  likes: number;
  category: string;
}

export function Pin({ title, image, author, likes, category }: PinProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <Card
      className="break-inside-avoid overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0 relative">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-300">
            <Button
              variant={liked ? "default" : "secondary"}
              size="icon"
              onClick={() => setLiked(!liked)}
            >
              <Heart className={`h-5 w-5 ${liked ? 'fill-current' : ''}`} />
            </Button>
            <Button
              variant={saved ? "default" : "secondary"}
              size="icon"
              onClick={() => setSaved(!saved)}
            >
              <BookmarkPlus className={`h-5 w-5 ${saved ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="secondary" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">By {author}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">{likes} likes</span>
        <span className="text-sm bg-secondary px-2 py-1 rounded-full">{category}</span>
      </CardFooter>
    </Card>
  );
}