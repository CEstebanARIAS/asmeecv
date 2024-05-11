import { useState } from "react";
import ".//Header.css";

export function Header() {
    
  return (
    <div className="header">
      <div className="Cover"></div>

      <div className="hdr-desktop">
        <div className="hdr-logo">
          <img src="./logo.avif" alt="Logo de Asociacion ASMEECV" />
        </div>
        <ul className="desk-navegation">
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

      <button className="hdr-mbl-open">
        <img src="./open.svg" alt="" />
      </button>
      <ul className="hdr-mbl-sotial">
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Whatsapp</a>
        </li>
      </ul>
      <div className="hdr-mobile.visible">
        <ul className="hdr-mbl-navegation">
          <button className="hdr-mbl-close">
          <img src="./close.svg" alt="" />
          </button>
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
    </div>
  );
}
