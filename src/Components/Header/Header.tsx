import "./Header.css";
import tow96 from "../../assets/tow-truck96.png";
import tow48 from "../../assets/tow-truck48.png";

import { Link } from "react-router-dom";
import React from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export function Header() {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="header-burger">
          <div>
            <img src={tow48} />
          </div>
          <MenuOutlined onClick={showDrawer} />
        </div>
        <div className="header-container-burger">
          <Drawer title="Меню" placement="right" onClose={onClose} open={open}>
            <div className="header-container-burger">
              <div className="header-links">
                <Link to="/" onClick={onClose}>
                  Главная
                </Link>
                <Link to="/examples" onClick={onClose}>
                  Примеры работ
                </Link>
                <Link to="/contacts" onClick={onClose}>
                  Контакты
                </Link>
              </div>
              <div className="header-call">
                <a href="tel:89052338998">
                  Заказать машину
                  <span style={{ marginTop: "10px" }}>8(905)233-89-98</span>
                </a>
              </div>
            </div>
          </Drawer>
        </div>
        <div className="header-container">
          <img src={tow96} />
          <div className="header-links">
            <Link to="/">Главная</Link>
            <Link to="/examples">Примеры работ</Link>
            <Link to="/contacts">Контакты</Link>
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
