import style from "./style.module.css"

export function IdCard(props) {
    return <div className={style.idCard}>
        <img src={props.img} />
        <div>
        <p><span>Last name:</span> {props.lastName}</p>
        <p><span>First name: </span>{props.firtsName}</p>
        <p><span>Gender:</span> {props.gender}</p>
        <p><span>Heigth:</span> {props.heigth}</p>
        <p><span>Birth:</span> {props.birth}</p>
        </div>
    </div>

}