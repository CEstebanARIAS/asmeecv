import "./css/Footer.css"


export function Footer(){

    return(
        <div className="footer">
        <div className="ft-make-by">
          Site made {" "}
         
          by{" "}
          <a href="https://www.linkedin.com/in/carlosariasdev" className="linkHeader">
            carlosariasdev
          </a>
        </div>
        <div className="ft-sotial-media">
          <a href="https://www.facebook.com/asociacionmultiactiva" className="linkHeader">
            <img src="./facebook.svg" alt="facebook" />
          </a>
          <a href="" className="linkHeader">
            <img src="./whatsapp.svg" alt="whatsapp" />
          </a>
          <a href="asociacionmultiactiva2024@gmail.com ">
            <img src="./email.svg" alt="email" />
          </a>
        </div>
        <div className="ft-terms-conditions">
            Copyright © 2024
            {" | "}
          <a href="#" className="linkHeader">Terms</a>
            {" | "}
          <a href="#" className="linkHeader">Conditions</a>
          {" | "}
          <a href="#" className="linkHeader">Legality</a>
        </div>
      </div>


    )
}