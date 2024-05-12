import "./App.css";

import "react-image-gallery/styles/css/image-gallery.css"
import { Card } from "./components/Card.jsx";
import { Head } from "./components/Head.jsx";
import { Gallery } from "./components/Gallery.jsx";

export function App() {
  

  return (
    <>
      <Head />
      <article className="body">
        <Card
          title="Nuestra Misión"
          info="Fomentar el emprendimiento local, preservar nuestras tradiciones culturales y promover la conservación del entorno natural de Viracachá.     
          A través de nuestras actividades multiactivas, buscamos generar oportunidades económicas para nuestros agricultores, artesanos y emprendedores, al tiempo que ofrecemos a los visitantes experiencias auténticas y memorables en contacto con la naturaleza y la cultura local."
          img="./asmeevc.png"
          button="UNIRME"
        />
        <Gallery />
      </article>
      <article className="footer">
        <div className="ft-make-by">
          Made whit{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#ff0000"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
          </svg>{" "}
          by <a href="https://www.linkedin.com/in/carlosariasdev">carlosariasdev</a>
        </div>
        <div className="ft-sotial-media">
          <a href="https://www.facebook.com/asociacionmultiactiva">
            <img src="./facebook.svg" alt="facebook" />
          </a>
          <a href="asociacionmultiactiva2024@gmail.com ">
            <img src="./email.svg" alt="email" />
          </a>
          <a href="">
            <img src="./whatsapp.svg" alt="whatsapp" />
          </a>
        </div>
        <div className="ft-terms-conditions">
          todos los derechos reservados © 2024
          <a href="#"> | Terminos y condiciones</a>
        </div>
      </article>
    </>
  );
}
