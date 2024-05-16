import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-gallery/styles/css/image-gallery.css";

import Slider from "react-slick";
import { Card } from "./components/Card.jsx";
import { Head } from "./components/Head.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Button } from "./components/Button.jsx";
import { Footer } from "./components/Footer.jsx";

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
              <Card
                title="Misión"
                info="Fomentar el emprendimiento local, preservar nuestras tradiciones culturales y promover la conservación del entorno natural de Viracachá.     
              A través de nuestras actividades multiactivas, buscamos generar oportunidades económicas para nuestros agricultores, artesanos y emprendedores, al tiempo que ofrecemos a los visitantes experiencias auténticas y memorables en contacto con la naturaleza y la cultura local."
              />
              <Card
                title="Vision"
                info="A futuro nos vemos como un motor de desarrollo integral en la región de Viracachá, consolidando nuestra posición como un destino turístico de referencia en Colombia. Nos visualizamos como una red sólida de emprendedores, agricultores, artesanos y prestadores de servicios turísticos que trabajan en armonía con la naturaleza y la cultura local."
              />
              <Card
                title="Unete"
                info="En la Asociación Multiactiva de Emprendimiento en Ecoturismo y Economía Campesina de Viracachá, estamos comprometidos con el desarrollo sostenible de nuestra región y el bienestar de nuestras comunidades.
              ¡Únete a nosotros en esta emocionante aventura para descubrir la belleza de Viracachá, apoyar a nuestros emprendedores locales y preservar nuestra herencia cultural y natural para las generaciones futuras!
              "
              />
            </Slider>
          </div>
          <Button text="UNIRME" />
        </div>
        <Gallery />
      </article>
      <Footer/>
    </>
  );
}
