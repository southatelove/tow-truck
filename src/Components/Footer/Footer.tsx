import { email, github, telegram, telephone } from "@/assets/icons";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left-container">
            <p>Эвакуатор Кириши © 2024 | Все права защищены</p>
            <p>Адрес: Ленинградская область, г. Кириши</p>
            <p>
              Телефон: 8(905)233-89-98, Электронная почта:
              komissarov0205@gmail.com
            </p>
            <a href="https://github.com/southatelove" className="footer-github">
              <p>Разработчик</p>
              <img src={github}></img>
            </a>
          </div>
          <div className="footer-right-container">
            <a
              target="_blank"
              href="https://t.me/komissarov0205"
              style={{ display: "flex" }}
            >
              <img src={telegram} alt="" />
            </a>
            <a href="tel:89052338998" style={{ display: "flex" }}>
              <img src={telephone} alt="" />
            </a>
            <a
              href="mailto:komissarov0205@gmail.com"
              style={{ display: "flex" }}
            >
              <img src={email} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
