import style from "./style.module.css"

export function Greetings(props){

    return <div className={style.container } lang={props.lang}>
        {props.children}
    </div>

}