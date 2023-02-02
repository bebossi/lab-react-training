import { BoxColor } from "./components/BoxColor";
import { CreditCard } from "./components/CreditCard";
import { Greetings } from "./components/Greetings";
import { IdCard } from "./components/IdCard";
import { Random } from "./components/Random";
import Visaimg from "./assets/images/visa.png"
import { Rating } from "./components/Rating";
import { DriverCard } from "./components/DriverCard";
import { LikeButton } from "./components/LikeButton";
import { ClickablePicture } from "./components/ClickablePicture";
import { Dice } from "./components/Dice";

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

     <Rating>0</Rating>
     <Rating>1</Rating>
     <Rating>2</Rating>
     <Rating>3</Rating>
     <Rating>4</Rating>
     <Rating>5</Rating>

     <DriverCard img={"https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"} 
     name={"Travis Kalanick"} rating={4} model={"Toyota Corolla Altis"} licensePlate={"CO42DE"} ></DriverCard>
     <DriverCard img={"https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"} 
     name={"Dara Khosrowshahi"} rating={5} model={"Audi A3"} licensePlate={"BE33ER"} ></DriverCard>

     <LikeButton/>
     <LikeButton/>

     <ClickablePicture/>

    <Dice/>

    </div>
  );
}

export default App;
