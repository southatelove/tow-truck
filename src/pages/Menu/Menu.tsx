import mainTow from "../../assets/main-tow-truck.jpg";
import "./Menu.css";
import carTow from "../../assets/icons/car-tow.svg";
import motoTow from "../../assets/icons/moto-tow.svg";
import truckTow from "../../assets/icons/truck-tow.svg";

const towCars = [
  {
    tow: carTow,
    description: "Эвакуация автомобилей",
  },
  { tow: motoTow, description: "Эвакуация мотоциклов" },
  { tow: truckTow, description: "Эвакуация внедорожников и микроавтобусов" },
];
export function Menu() {
  return (
    <>
      <section className="main-section">
        <div>
          <img src={mainTow}></img>
        </div>
        <h1 className="main-section-title">Предоставляемые услуги</h1>
        <div className="main-section-content">
          {towCars.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.tow}></img>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
