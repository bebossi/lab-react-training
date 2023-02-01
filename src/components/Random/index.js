import style from "./style.module.css"
export function Random(props){
    const randomNumber =  parseInt( Math.random() * (props.max - props.min) + props.min)
    return <div className={style.random}>
        Random value between {props.min} and {props.max} = {randomNumber}
    </div>
}