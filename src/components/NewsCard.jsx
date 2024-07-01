import React from "react";
import { ButtonModal } from "./Modal.jsx";

export function NewsCard({ image, title, description, modalTitle, modalBody }) {
  return (
    <div className="CardNews">
      <img src={image} alt={title} />
      <div className="CardBody">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="BotonLeerMas">
          <ButtonModal
            title={modalTitle}
            body={modalBody}
            button="Leer Más"
          />
        </div>
      </div>
    </div>
  );
}
