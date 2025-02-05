import Hero from "@/components/Hero";
import MenuBar from "@/components/MenuBar";
import { gunkan, klasikRoll, sushiNigiri } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <MenuBar title={"Klasik roll"} products={klasikRoll} />
      <MenuBar title={"Sushi Nigiri"} products={sushiNigiri} />
      <MenuBar title={"Gunkan"} products={gunkan} />
    </div>
  );
}
