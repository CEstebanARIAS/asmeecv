import ImageGallery from "react-image-gallery";
import "./Gallery.css"
import "react-image-gallery/styles/css/image-gallery.css";


export function Gallery(){
    const images =[
        {
          original:"./Imagenes/image1.webp",
        },
        {
          original:"./Imagenes/image2.webp",
        },
        {
          original:"./Imagenes/image3.webp",
        },
        {
          original:"./Imagenes/image4.webp",
        },
        {
          original:"./Imagenes/image5.webp",
        },
        {
          original:"./Imagenes/image6.webp",
        },
        {
          original:"./Imagenes/image7.webp",
        },
        {
          original:"./Imagenes/image8.webp",
        }
    ]

    return(
        <div className="bd-gallery-images">
          <h2 className="bd-gallery-title">Explora Nuestro Mundo</h2>
          <div className="bd-gallery-carrusel">
            <ImageGallery 
              items={images}
              showFullscreenButton={false}
              showPlayButton={true}
              showThumbnails={false}
              showNav={false}
              showBullets={true}
            />
          </div>
        </div>
    );
}