export function Card({ title, info, img, button }) {
  return (
    <div className="crd">
      <div className="crd-img">
        <img className="" src={`${img}`} alt="imagen" width="400px"  />
      </div>
      <div>
        <h2 className="crd-title">{title}</h2>  
        <p className="crd-info">{info}</p>
        <button className="crd-button">{button}</button>
      </div>
    </div>
  );
}
