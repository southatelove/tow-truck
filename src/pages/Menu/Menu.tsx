import "./Menu.css";

import { carTow, motoTow, truckTow } from "@/assets/icons";

import { mainTow } from "@/assets/index";
import { defaultInfo } from "@/mock/index";
import { ITowCars } from "@/types/index";

const towCars: ITowCars[] = [
  {
    tow: carTow,
    description: "Эвакуация автомобилей",
  },
  {
    tow: truckTow,
    description: "Эвакуация внедорожников и микроавтобусов до 3.5 тонн",
  },
  { tow: motoTow, description: "Эвакуация мотоциклов" },
];

console.log("Разработчик", "https://github.com/southatelove");
export function Menu() {
  return (
    <>
      <section className="main-section">
        <h1 className="title">Эвакуатор Кириши</h1>
        <div className="line" />
        <div className="main-img">
          <img src={mainTow} />
          <a href="tel:89052338998" className="main-img-call">
            Заказать эвакуатор
          </a>
        </div>
        <h2 className="title" style={{ marginBottom: "30px" }}>
          Предоставляемые услуги
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
          <div className="main-section-content">
            {towCars.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item.tow} alt="tow" />
                  <p className="description">{item.description}</p>
                </div>
              );
            })}
          </div>
          <h3 className="title">Подробности</h3>
          <div className="main-section-content-info">
            {defaultInfo.map((info, index) => {
              return (
                <div key={index}>
                  <h4 className="info-name">{info.infoName}</h4>
                  <p
                    className="info-descrption"
                    style={{ marginBottom: "5px" }}
                  >
                    {info.description}
                  </p>
                  <p
                    className="info-descrption"
                    style={{ marginBottom: "5px" }}
                  >
                    {info.secondDescription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
