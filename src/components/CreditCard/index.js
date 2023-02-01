import style from "./style.module.css"

export function CreditCard(props){
    
    return <div className={style.creditCard} style={{backgroundColor: props.bgColor}} >
        <div className={style.divImg}><img src={props.type}/></div>
        <div className={style.divNumber} style={{color:props.color}}>{props.number}</div>
        <div className={style.divExpiration} style={{color:props.color}}>Expires {props.expirationMonth}/{props.expirationYear} {props.bank} </div>
       <div className={style.divName} style={{color:props.color}}>{props.owner}</div> 
        

    </div>
}