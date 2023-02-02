import style from "./style.module.css"

export function Rating(props){
    const fullStar = "★";
    const rating = fullStar.repeat(props.children).padEnd(5, "☆")
     return <div className={style.container}>
       {rating}
    </div>
}
