import { IInfo, ITowCars } from "src/types";
import { carTow, motoTow, truckTow } from "@/assets/icons";

export const defaultInfo: IInfo[] = [
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

export const towCars: ITowCars[] = [
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
