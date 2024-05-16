import "./Footer.css"


export function Footer(){

    return(
        <div className="footer">
        <div className="ft-make-by">
          Site made {" "}
         
          by{" "}
          <a href="https://www.linkedin.com/in/carlosariasdev">
            carlosariasdev
          </a>
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
            Copyright © 2024
            {" | "}
          <a href="#">Terms</a>
            {" | "}
          <a href="#">Conditions</a>
          {" | "}
          <a href="#">Legality</a>
        </div>
      </div>


    )
}