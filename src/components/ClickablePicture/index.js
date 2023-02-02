import maxenceGlass from "../../assets/images/maxence-glasses_360.png"
import maxence from "../../assets/images/maxence.png"
import { useState } from "react"

export function ClickablePicture(){

    const [img, setImage] = useState(maxence)
    function handleImg(){
        if(img === maxence){
            setImage(maxenceGlass)
        } else{
            setImage(maxence)
        }

    }
    return <div>
    <img src={img} onClick={handleImg} />
    </div>
}