import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseOutlined } from "@ant-design/icons";
import img_1 from "../assets/gallery/1.jpeg";
import img_2 from "../assets/gallery/2.jpeg";
import img_3 from "../assets/gallery/3.jpeg";
import img_4 from "../assets/gallery/4.jpeg";
import img_5 from "../assets/gallery/5.jpeg";
import img_6 from "../assets/gallery/6.jpeg";
import img_7 from "../assets/gallery/7.jpeg";
import img_8 from "../assets/gallery/8.jpeg";
import img_9 from "../assets/gallery/9.jpeg";
import img_10 from "../assets/gallery/10.jpeg";

const IMAGES = [
  {
    id: 1,
    src: img_1,
    alt: "Image 1",
  },
  {
    id: 2,
    src: img_2,
    alt: "Image 2",
  },
  {
    id: 3,
    src: img_3,
    alt: "Image 3",
  },
  {
    id: 4,
    src: img_4,
    alt: "Image 4",
  },
  {
    id: 5,
    src: img_5,
    alt: "Image 5",
  },
  {
    id: 6,
    src: img_6,
    alt: "Image 6",
  },
  {
    id: 7,
    src: img_7,
    alt: "Image 7",
  },
  {
    id: 8,
    src: img_8,
    alt: "Image 8",
  },
  {
    id: 9,
    src: img_9,
    alt: "Image 9",
  },
  {
    id: 10,
    src: img_10,
    alt: "Image 10",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = (e) => {
    if (e.target.tagName !== "IMG") {
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
