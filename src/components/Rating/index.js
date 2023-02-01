import style from "./style.module.css"

export function Rating(props){


    return <div className={style.container}>
       {props.children}
       ☆☆☆☆☆
    </div>
}

// ★
// ☆