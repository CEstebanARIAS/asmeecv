import { useState } from "react";
import React from "react";
import ".//Head.css";
import { ButtonMenu } from "./ButtonMenu";

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
              <img src="./facebook.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="https://w.app/eyY7Qi"><img src="./whatsapp.svg" alt="" /></a>
          </li>
          <li>
            <a href=""><img src="./email.svg" alt="" /></a>
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
        <ButtonMenu clicked={clicked} handleClick={handleClick}/>
      </div>
    </div>
  );
}
