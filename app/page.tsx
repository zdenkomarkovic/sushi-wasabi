import Hero from "@/components/Hero";
import CardsComponent from "@/components/CardsComponent";
import {
  gunkan,
  klasikRoll,
  sushiNigiri,
  tempuraRoll,
  vegeRoll,
  zapeceneRolnice,
} from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <CardsComponent title={"Klasik roll"} products={klasikRoll} />
      <CardsComponent title={"Sushi Nigiri"} products={sushiNigiri} />
      <CardsComponent title={"Gunkan"} products={gunkan} />
      <CardsComponent title={"Tempura roll"} products={tempuraRoll} />
      <CardsComponent title={"Zapečene rolnice"} products={zapeceneRolnice} />
      <CardsComponent title={"Vege Roll"} products={vegeRoll} />
    </div>
  );
}
