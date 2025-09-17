// src/components/MasonryGallery.tsx
import React, {useState} from 'react';
import Masonry from 'react-masonry-css';
import { GalleryItem } from '../../interfaces'; // Adjust path if needed
import './MasonryGallery.css'; // We'll create this CSS file next
import Lightbox from "yet-another-react-lightbox";

interface MasonryGalleryProps {
  items: GalleryItem[];
  // Optional: Allow overriding default breakpoint columns
  breakpointCols?: Record<string, number> | number;
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ items, breakpointCols }) => {
  // Define responsive columns. These keys are pixel widths (min-width).
  // You must provide a `default`.
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultBreakpoints = {
    default: 4,   // Default number of columns (e.g., for > 1200px)
    1100: 3,      // 3 columns for screens >= 1100px wide
    700: 2,       // 2 columns for screens >= 700px wide
    500: 1        // 1 column for screens >= 500px wide
    // Add more breakpoints as needed
  };

  // Use provided breakpoints or the default ones
  const effectiveBreakpoints = breakpointCols || defaultBreakpoints;

  // --- Handler to open Lightbox ---
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  // --- Prepare slides for the Lightbox ---
  // Ensure items have src property matching Lightbox expectations
  const slides = items.map(item => ({
    src: item.src,
    alt: item.alt,
    // You can add more properties like width, height, title if needed by plugins
    // width: item.width,
    // height: item.height,
  }));

  if (!items || items.length === 0) {
    return <p>No images to display.</p>;
  }

  return (
    <>
    <Masonry
      breakpointCols={effectiveBreakpoints}
      className="my-masonry-grid" // Your custom class for the grid container
      columnClassName="my-masonry-grid_column" // Your custom class for each column
    >
      {/* Map over your items */}
      {items.map((item, index) => (
        // Add onClick handler to the item wrapper
        <div
          key={item.id}
          className="masonry-item clickable"
          onClick={() => openLightbox(index)}
        >
          <img
            src={item.src}
            alt={item.alt}
            style={{ width: '100%', display: 'block', height: 'auto' }} // Essential styles
          />
          {/* You could add more content here like captions or overlays */}
        </div>
      ))}
    </Masonry>

  <Lightbox
    open={isOpen}
    close={() => setIsOpen(false)}
    index={currentIndex}
    slides={slides}
    // Optional: Add plugins here
    // plugins={[Thumbnails, Zoom]}
    // Add more customization props as needed (see YARL docs)
    // carousel={{ finite: items.length <= 5 }} // Example: Disable infinite looping for small galleries
  />
    </>
  );
};

export default MasonryGallery;
