import React from 'react';

const HeroImages = ({ images }) => {
  return (
    <div className="hidden md:gap-4 md:flex w-[60%] pt-[2em] pb-[4em] justify-between">
      {images.map((imageSrc, index) => (
        <span key={index}>
          <img
            src={imageSrc}
            alt={`Hero ${index + 1}`}
            className="rounded-xl border-4 border-orange-400"
          />
        </span>
      ))}
    </div>
  );
};

export default HeroImages;