import style from "./style.module.css"
import diceEmpty from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"
import { useState } from "react"

export function Dice(){
    
    const allDices = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]
    const randomDice = parseInt(Math.random() * (allDices.length - 0) + 0)
    
    const [img, setImage] = useState(diceEmpty)
    function handleImg(){
        setTimeout(() => {
            setImage(diceEmpty)
        }, 100)
        setImage(allDices[randomDice])
    }
    return <div className={style.divImg}>
    <img src={img} onClick={handleImg} />
    </div>
}