'use client';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';

interface Props {
  images: { src: string; title: string }[];
  openIndex: number;
  onClose: () => void;
}

export default function GalleryModal({ images, openIndex, onClose }: Props) {
  const [index, setIndex] = useState(openIndex);

  return (
    <Lightbox
      open
      close={onClose}
      index={index}
      slides={images.map((img) => ({ src: img.src, title: img.title }))}
      on={{
        view: ({ index }) => setIndex(index),
      }}
    />
  );
}
