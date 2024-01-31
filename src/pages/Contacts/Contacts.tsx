import "./Contacts.css";

import telephone from "../../assets/icons/telephone.svg";
import email from "../../assets/icons/email.svg";
import telegram from "../../assets/icons/telegram.svg";
import whatsapp from "../../assets/icons/whatsup.svg";

export function Contacts() {
  return (
    <>
      <section className="section-contacts">
        <h1 className="title">Контакты для связи</h1>
        <div className="line" />
        <div className="contacts-map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa003ec7decc2c3aee800ce506d3280f7c9bff01bae96ece70dc214b4e8b99628&amp;source=constructor"
            width="840"
            height="540"
          />
          <div className="contacts-info">
            <div className="info">
              <p>Телефон:</p>
              <a href="tel:89052338998">
                <img
                  src={telephone}
                  style={{ width: "15px", height: "15px", marginRight: "10px" }}
                />
                8(905)233-89-98
              </a>
            </div>
            <div className="info">
              <p>Почта:</p>
              <a
                href="mailto:komissarov0205@gmail.com"
                style={{ display: "flex" }}
              >
                <img
                  src={email}
                  style={{ width: "15px", height: "15px", marginRight: "10px" }}
                />
                komissarov0205@gmail.com
              </a>
            </div>
            <div className="info">
              <p>Telegram:</p>
              <a target="_blank" href="https://t.me/komissarov0205">
                <img
                  src={telegram}
                  style={{ width: "15px", height: "15px", marginRight: "10px" }}
                  alt=""
                />
                Александр
              </a>
            </div>
            <div className="info">
              <p>WhatsApp:</p>
              <a href="https://wa.me/89052338998">
                <img
                  src={whatsapp}
                  style={{ width: "15px", height: "15px", marginRight: "10px" }}
                />
                8(905)233-89-98
              </a>
            </div>
            <div className="info">
              <p>Отзывы:</p>
              <a
                target="_blank"
                href="https://www.avito.ru/kirishi/predlozheniya_uslug/evakuatsiya_avtomobiley_3621113741"
              >
                Оставить отзыв
              </a>
            </div>
            <div className="info">
              <p>Больше информации:</p>
              <a
                target="_blank"
                href="https://perevozka24.ru/kirishi-47/arenda-spetstehniki-evakuatory"
              >
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
