import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">Сонур.</div>
        <nav>
          <ul>
            <li>
              <a href="/">хайх</a>
            </li>
            <li>
              <a href="/">номнууд</a>
            </li>
            <li>
              <a href="/">холбогдох</a>
            </li>
            <li className="btn">
              <a href="/">Авах</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
