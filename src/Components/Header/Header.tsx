import { Link } from "react-router-dom";
import "./Header.css";

import tow96 from "../../assets/tow-truck96.png";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <img src={tow96}></img>
          <div className="header-links">
            <Link to="/">Главная</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/examples">Примеры работ</Link>
          </div>
          <div className="header-call">
            <a href="tel:89052338998">
              Заказать машину
              <span style={{ marginTop: "10px" }}>8(905)233-89-98</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
