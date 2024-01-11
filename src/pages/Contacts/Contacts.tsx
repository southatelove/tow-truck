import "./Contacts.css";

import telephone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import telegram from "../../assets/icons/telegram.svg";
import whatsapp from "../../assets/icons/whatsup.svg";

export function Contacts() {
  return (
    <>
      <section className="section-contacts">
        <h3 className="contacts-section-title">Контакты для связи</h3>
        <div className="line"></div>
      </section>
      <section className="contacts-map">
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
            <a href="mailto:komissarov0205@gmail.com">
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
              />
              Александр
            </a>
          </div>
          <div className="info">
            <p>WhatsApp:</p>
            <a>
              <img
                src={whatsapp}
                style={{ width: "15px", height: "15px", marginRight: "10px" }}
              />
              8(905)233-89-98
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
