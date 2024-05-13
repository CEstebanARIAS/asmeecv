import "./ButtonMenu.css";

export function ButtonMenu(props) {
  return (
    <div className="three col">
      <div onClick={props.handleClick} className={`hamburger ${props.clicked ? 'is-active': ''}`} id="hamburger-6">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  );
}
