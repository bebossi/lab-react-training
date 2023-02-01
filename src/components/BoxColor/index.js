import style from "./style.module.css"

export function BoxColor(props){
    return <div className={style.container} style={{backgroundColor:`rgb(${props.r},${props.g},${props.b})`}}>
        rgb({props.r},{props.g},{props.b})
    </div>

}