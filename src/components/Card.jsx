import "./Card.css"


export function Card({ title, info}) {
  return (
    <div className="crd">
      
      <div>
        <h2 className="crd-title">{title}</h2>  
        <p className="crd-info">{info}</p>
      </div>
    </div>
  );
}
