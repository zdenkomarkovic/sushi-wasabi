import Hero from "@/components/Hero";
import CardsComponent from "@/components/CardsComponent";
import {
  dezert,
  fitRoll,
  giozeSkampi,
  gunkan,
  klasikRoll,
  pice,
  salate,
  setovi,
  supe,
  sushiNigiri,
  tartar,
  tempuraRoll,
  uroMakiWasabi,
  vegeRoll,
  zapeceneRolnice,
} from "@/constants/index";

export default function Home() {
  return (
    <div className=" pb-10">
      <Hero />
      <CardsComponent title={"Klasik roll"} products={klasikRoll} />
      <CardsComponent title={"Sushi Nigiri"} products={sushiNigiri} />
      <CardsComponent title={"Gunkan"} products={gunkan} />
      <CardsComponent title={"Tempura roll"} products={tempuraRoll} />
      <CardsComponent title={"Zapečene rolnice"} products={zapeceneRolnice} />
      <CardsComponent title={"Vege Roll"} products={vegeRoll} />
      <CardsComponent title={"Fit Roll"} products={fitRoll} />
      <CardsComponent title={"Gioze Skampi"} products={giozeSkampi} />
      <CardsComponent title={"Uro Maki Wasabi"} products={uroMakiWasabi} />
      <CardsComponent title={"Supe"} products={supe} />
      <CardsComponent title={"Salate"} products={salate} />
      <CardsComponent title={"Tartar"} products={tartar} />
      <CardsComponent title={"Setovi"} products={setovi} />
      <CardsComponent title={"Dezert"} products={dezert} />
      <CardsComponent title={"Piće"} products={pice} />
    </div>
  );
}
