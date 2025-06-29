import React from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CloseOutlined } from '@ant-design/icons';

const IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: 'https://plus.unsplash.com/premium_photo-1663126319781-f4de55c7ebd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 2',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1639548538099-6f7f9aec3b92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xhc3Nyb29tfGVufDB8fDB8fHww',
    alt: 'Image 3',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsYXNzcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    alt: 'Image 4',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1621354598022-16599af1b8b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 5',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1622659097972-68f1d8c1829f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 6',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1613950190144-4f2a84c75e8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 7',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1718207345122-46b342dadea1?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Image 8',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = (e) => {
    if (e.target.tagName !== 'IMG') {
      setSelectedImage(null);
    }
  };

  return (
    <>
      <main className="container mx-auto px-10 md:px-0 flex gap-20 flex-col mt-40 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {IMAGES.map((image) => (
            <div key={image.id} className="w-full h-auto">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                onClick={() => handleImageClick(image)}
              />
            </div>
          ))}
        </div>
      </main>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/75 z-[100] top-0 left-0 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="relative max-w-[90%] md:max-w-[75%] lg:max-w-[60%] max-h-[80%] md:h-[75%] lg:max-h-[60%]"
              initial={{ opacity: 0, y: -100, rotateX: -60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -100, rotateX: -25 }}
            >
              <button
                className="absolute top-[-50px] right-0 md:right-[-50px] p-2 font-bold text-white text-2xl bg-red-500 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <div className="w-6 h-6 flex justify-center items-center">
                  <CloseOutlined />
                </div>
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
