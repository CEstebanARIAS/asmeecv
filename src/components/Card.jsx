import "./css/Card.css"


export function Info({ title, info}) {
  return (
    <div className="crd">
      <div>
        <h2 className="crd-title">{title}</h2>  
        <p className="crd-info">{info}</p>
      </div>
    </div>
  );
}
