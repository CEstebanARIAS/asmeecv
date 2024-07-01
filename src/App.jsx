import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Info } from "./components/Card.jsx";
import { Head } from "./components/Head.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Button } from "./components/Button.jsx";
import { Footer } from "./components/Footer.jsx";
import { ButtonModal } from "./components/Modal.jsx";
import { NewsCard } from "./components/NewsCard.jsx";

export function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Head />
      <article className="body">
        <div className="info-asoc">
          <div className="crd-img">
            <img className="" src="./asmeevc.png" alt="imagen" />
          </div>
          <div className="info">
            <Slider {...settings}>
              <Info
                title="Misión"
                info="Fomentar el emprendimiento local, preservar nuestras tradiciones culturales y promover la conservación del entorno natural de Viracachá.     
              A través de nuestras actividades multiactivas, buscamos generar oportunidades económicas para nuestros agricultores, artesanos y emprendedores, al tiempo que ofrecemos a los visitantes experiencias auténticas y memorables en contacto con la naturaleza y la cultura local."
              />
              <Info
                title="Visión"
                info="A futuro nos vemos como un motor de desarrollo integral en la región de Viracachá, consolidando nuestra posición como un destino turístico de referencia en Colombia. Nos visualizamos como una red sólida de emprendedores, agricultores, artesanos y prestadores de servicios turísticos que trabajan en armonía con la naturaleza y la cultura local."
              />
              <Info
                title="Únete"
                info="En la Asociación Multiactiva en Emprendimiento de Ecoturismo y Economía Campesina de Viracachá, estamos comprometidos con el desarrollo sostenible de nuestra región y el bienestar de nuestras comunidades. ¡Únete a nosotros en esta emocionante aventura para descubrir la belleza de Viracachá, apoyar a nuestros emprendedores locales y preservar nuestra herencia cultural y natural para las generaciones futuras!"
              />
            </Slider>
            <div className="ButtonUnirme">
              <ButtonModal
                title="¡Holaaa! Nos alegra tenerte aquí"
                body="Pronto ASMEECV tendrá la capacidad de recibir ayuda externa, no pierdas el interés por ayudar a tu comunidad."
                button="UNIRME"
              />
            </div>
          </div>
        </div>
        
        <h2 className="firstTitle">Conoce Las Últimas Noticias</h2>
        <div className="SeccionNoticias">
          <NewsCard
            image="./Imagenes/noticia1.jpg"
            title="Reactivación del Consejo Provincial de Turismo"
            description="Con el objetivo de fortalecer el sector turístico e impulsar el desarrollo turístico regional"
            modalTitle="La provincia de Márquez reactivó su Consejo Provincial de Turismo"
            modalBody="El proceso se realizó en Ramiriquí con la participación de la Secretaría de Turismo de Boyacá y varias autoridades regionales. Ramiriquí, 7 de junio de 2024. (UACP). Con el objetivo de fortalecer el sector turístico e impulsar el desarrollo turístico regional, la provincia de Márquez reactivó su Consejo Provincial de Turismo."
          />
        </div>
        <h2 className="firstTitle">Explora Nuestro Mundo</h2>
        <Gallery />
      </article>
      <Footer />
    </>
  );
}
