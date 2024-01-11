import "./Examples.css";

import { ImageSlider } from "../../Components/ImageSlider/ImageSlider";

import car1 from "../../assets/car-1.jpg";
import car2 from "../../assets/car-2.jpg";
import car3 from "../../assets/car-3.jpg";
import car4 from "../../assets/car-4.jpg";
import car5 from "../../assets/car-5.jpg";
import car6 from "../../assets/car-6.jpg";
import car7 from "../../assets/car-7.jpg";
import car8 from "../../assets/car-8.jpg";

const IMAGES = [car1, car2, car3, car4, car5, car6, car7, car8];

export function Examples() {
  return (
    <>
      <section className="examples-section">
        <h2 className="examples-section-title">Примеры работ</h2>
        <div className="examples">
          <ImageSlider imageUrls={IMAGES}></ImageSlider>
        </div>
      </section>
    </>
  );
}
