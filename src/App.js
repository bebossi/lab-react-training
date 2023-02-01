import { BoxColor } from "./components/BoxColor";
import { CreditCard } from "./components/CreditCard";
import { Greetings } from "./components/Greetings";
import { IdCard } from "./components/IdCard";
import { Random } from "./components/Random";
import Visaimg from "./assets/images/visa.png"
import { Rating } from "./components/Rating";

function App() {
  return (
    <div className="App">
    <IdCard img={"https://randomuser.me/api/portraits/men/44.jpg"} lastName={"Doe"} firstName={"John"}  gender={"Male"} heigth={"1.78m"} birth={"1992-07-14"}></IdCard>
    <IdCard img={"https://randomuser.me/api/portraits/women/44.jpg"} lastName={"Delores"} firstName={"Obrien"}  gender={"Female"} heigth={"1.72m"} birth={"1988-05-11"}></IdCard>

    <Greetings lang={"de"}>Hallo</Greetings>
    <Greetings lang={"fr"} >François</Greetings>

    <Random min={1} max={6}></Random>
    <Random min={1} max={100}></Random>


    <BoxColor r={255} g={0} b={0} ></BoxColor>
    <BoxColor r={128} g={255} b={0} ></BoxColor>

    <CreditCard type={Visaimg} number={"0123 4567 8901 8845"} expirationMonth={3} expirationYear={2021} bank={"BNP"} owner={"Maxence Bouret"}
     bgColor={"#11aa99"} color={"white"}>
     </CreditCard>

    <CreditCard 
    type={Visaimg} number={"0123 4567 8901 0995"} expirationMonth={3} expirationYear={2021} bank={"N26"} owner={"Maxence Bouret"}
     bgColor={"#eeeeee"} color={"#222222"} >
     </CreditCard>

    <CreditCard type={Visaimg} number={"0123 4567 8901 6984"} expirationMonth={12} expirationYear={2019} bank={"Name of the Bank"}
     owner={"Firstname Lastname"} bgColor={"#ddbb55"} color={"white"} >
     </CreditCard>

     <Rating children={0}></Rating>

    </div>
  );
}

export default App;
