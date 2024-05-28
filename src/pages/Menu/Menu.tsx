import "./Menu.css";

import { mainTow } from "@/assets/index";
import { defaultInfo, towCars } from "@/mock/index";

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
            {towCars.map((car, index) => {
              return (
                <div key={index}>
                  <img src={car.tow} alt="tow" />
                  <p className="description">{car.description}</p>
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
