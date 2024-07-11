import "./ImageSlider.css";
import React, { useCallback } from "react";

import { ImageSliderProps } from "./ImageSliderProps";

import {
  ArrowBigLeft,
  ArrowBigRight,
  Circle,
  CircleDotIcon,
} from "lucide-react";

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = React.useState(0);

  const showNextImage = useCallback(() => {
    setImageIndex((index: number): number => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }, []);

  const showPrevImage = useCallback(() => {
    setImageIndex((index: number): number => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }, []);

  return (
    <div className="slider">
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider"
            style={{ translate: `${-100 * imageIndex}%` }}
            alt="photo"
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        <ArrowBigRight />
      </button>
      <div className="slider-btn">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? <CircleDotIcon /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
}
