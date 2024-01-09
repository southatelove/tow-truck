import { Link } from "react-router-dom";
import "./Header.css";

import tow96 from "../../assets/tow-truck96.png";

export function Header() {
  return (
    <>
      <div className="header">
        <div className="header-container">
          <img src={tow96}></img>
          <Link to="/">Главная</Link>
          <Link to="/contacts">Контакты</Link>
          <Link to="/examples">Примеры работ</Link>
          <a href="tel:89052338998">+7 (905) 233-89-98</a>
        </div>
      </div>
    </>
  );
}
