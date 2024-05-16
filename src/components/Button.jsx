import "./Button.css"


export function Button({text}){

    return(
        <div className="containButton">
        <button className="button">{text}</button>
        </div>
    )
}