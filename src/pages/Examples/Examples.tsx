import "./Examples.css";

import { TExamples } from "src/types";
import { car1, car2, car3, car4, car5, car6, car7, car8 } from "@/assets/index";
import { ImageSlider } from "src/Components";

const ImagesWork: TExamples = [car1, car2, car3, car4, car5, car6, car7, car8];

export function Examples() {
  return (
    <>
      <section className="examples-section">
        <h1 className="examples-section-title">Примеры работ на Эвакуаторе</h1>
        <div className="line" />
        <div className="examples">
          <ImageSlider imageUrls={ImagesWork} />
        </div>
      </section>
    </>
  );
}
