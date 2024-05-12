import { useState } from "react";
import React from "react";
import ".//Head.css";
import { Button } from "./Button";

export function Head() {

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <div className="header">
      <div className="Cover"></div>
      <div className="menu">
        <ul className="menu-sotial">
          <li>
            <a href="https://www.facebook.com/asociacionmultiactiva">
              Facebook
            </a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="https://w.app/eyY7Qi">Whatsapp</a>
          </li>
        </ul>
        <ul className={`menu-items ${clicked ? 'activate' : ''}`}>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Nosotros</a>
          </li>
          <li>
            <a href="/">Asociados</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="Boton">
        <Button clicked={clicked} handleClick={handleClick}/>
      </div>
    </div>
  );
}
