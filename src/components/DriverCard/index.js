import style from "./style.module.css"

export function DriverCard(props) {
    const fullStar = "★";
    const rating = fullStar.repeat(props.rating).padEnd(5, "☆")

    return <div className={style.container}>
        <div className={style.divImg}>
            <img src={props.img} />
        </div>
        <div className={style.divContent}>
            <p className={style.name}>{props.name}</p>
            <p className={style.rating} >{rating}</p>
            <p>{props.model} - {props.licensePlate}</p>
        </div>

    </div>
}