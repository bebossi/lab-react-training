import style from "./style.module.css"
import { useState } from "react"



 export function LikeButton(){

    const [counter, setCounter] = useState(0)
    const [active, setActive] = useState(false);
    function add(){
    setCounter(counter + 1)
    }
    function colorChange(){
          setActive(!active);
    }

    return <button className={style.button} onClick={add}  >{counter} Likes</button>
}

// ['purple','blue','green','yellow','orange','red']
