import "./Menu.css";

import mainTow from "../../assets/main-tow-truck.jpg";
import carTow from "../../assets/icons/car-tow.svg";
import motoTow from "../../assets/icons/moto-tow.svg";
import truckTow from "../../assets/icons/truck-tow.svg";

import { IInfo, ITowCars } from "../types";

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

const info: IInfo[] = [
  {
    infoName: "Выезд:",
    description: "По городу и в области.",
  },
  {
    infoName: "Грузоподъемность и платформа",
    description: "до 3.5 тонн, платформа 5.5м.",
  },
  {
    infoName: "Стоимость:",
    description: "От 2500р,",
    secondDescription: "В пределах Кириши 3000р, далее 100р/км.",
  },
  {
    infoName: "Перевозимый транспорт:",
    description:
      "Легковые авто, Автобусы, микроавтобусы, Мотоциклы, снегоходы, квадроциклы, Другое.",
  },
  {
    infoName: "Дополнительные Услуги:",
    description:
      "Эвакуация машин бизнес-класса, Фотоотчёт о погрузке и разгрузке, Выезд в труднодоступные места.",
  },
  {
    infoName: "Время работы:",
    description: "24/7",
  },
  {
    infoName: "Способы оплаты:",
    description:
      "Наличный и безналичный расчет на карту СберБанка. Предоставление чека за услуги Эвакуатора от Самозанятого.",
  },
  {
    infoName: "Работа с юрлицами и ИП:",
    description: "Да.",
  },
  {
    infoName: "Работа c НДС:",
    description: "Нет.",
  },
];

console.log(
  "Создатель сайта",
  "https://github.com/southatelove",
  "Все права защищены"
);
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
            {info.map((item, index) => {
              return (
                <div key={index}>
                  <h4 className="info-name">{item.infoName}</h4>
                  <p
                    className="info-descrption"
                    style={{ marginBottom: "5px" }}
                  >
                    {item.description}
                  </p>
                  <p
                    className="info-descrption"
                    style={{ marginBottom: "5px" }}
                  >
                    {item.secondDescription}
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
