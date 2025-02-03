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
import { Documents } from "./components/Documents.jsx";

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
        <h2 className="firstTitle">Documetación</h2>
        <div className="SeccionDocumentos">
          <Documents 
            title="Acta N° 011"
            info="Acta de autorizacion esal"
            link="https://drive.google.com/file/d/1SZuRHZIr-bHm7Czl4YHEKmXKfDXUOJq2/view?usp=drive_link"
          />
          <Documents 
            title="Acta de constitucion N° 001"
            info="Asociacion multiactiva de emprenderismo ecoturistico y economia campesina de viracacha (ASMEECV)"
            link="https://drive.google.com/file/d/10LyozierQdkyJWdVzlgJ8xvdl0Z7OJGJ/view?usp=sharing"
          />
          <Documents 
            title="Certificado de existencia"
            info="Camara de comercio de tunja, Certificado de existencia y representacion legal"
            link="https://drive.google.com/file/d/1CTbB3eNsNjuFGispd8eijFeQcSFlwQpN/view?usp=sharing"
          />
          <Documents 
            title="Certificado de cumplimiento"
            info="Certificación de cumplimiento a todos los requisitos exigidos en el numeroal 13 del parrafo 2 del articulo 364-5"
            link="https://drive.google.com/file/d/1oFjS7p3HBugP7fiRcGJ9mYpRLJj1AtGs/view?usp=sharing"
          />
          <Documents 
            title="Estados financieros a 31 de Diciembre"
            info="Estados financieros a partir de la creacion de la asocicacion hasta el 31 de diciembre del año 2024"
            link="https://drive.google.com/file/d/1gmFuI2mY1YrT6wwv-D8TVp6UfW4NQqZ5/view?usp=sharing"
          />
          <Documents 
            title="Estautos Sociales"
            info="Nombre, Naturaleza, Domicilio y Duración"
            link="https://drive.google.com/file/d/1OP5or6AS6kwTyie-N29W0aS6gP-H7I1Q/view?usp=sharing"
          />
          <Documents 
            title="Informe de Gestión"
            info="Informe de gestion de representante legal durante el periodo 25 de abril a 10 de diciembre de 2024"
            link="https://drive.google.com/file/d/1Vzb0bVOu5wPHQm8wFm-NmoO-lmhyGx3H/view?usp=sharing"
          />
          <Documents 
            title="Certificado de Exclusion"
            info="Certifica que ningun miembro de la junta directiva, fundadores y representante legal de ASMEECV han incurrido en las causales de exclusion del articulo 364-5"
            link="https://drive.google.com/file/d/1Yu04ZC_NKyPi6X1YIAS4--iZ-0zZNsJi/view?usp=sharing"
          />
          <Documents 
            title="Certificado de Pagos Salariales"
            info="Certifica que ninguno de los asociados de ASMEECV devengan pagos salariales"
            link="https://drive.google.com/file/d/1F5T8DwT6GAEFCYlO8ByTLgGj2tlH5dWx/view?usp=sharing"
          />
          
        </div>
      </article>
      <Footer />
    </>
  );
}
