import "./Error.css";

import { Link } from "react-router-dom";

export function Error() {
  return (
    <>
      <div className="error-section">
        <p>Ошибка 404</p>
        <p>Запрашиваемая вами страница не найдена</p>
        <Link to="/" style={{ borderBottom: "1px solid" }}>
          Вернуться на Главную страницу
        </Link>
      </div>
    </>
  );
}
