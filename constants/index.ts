export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface KlasikRoll {
  id: number;
  title: string;
  price: number;
  images: string;
}

export const klasikRoll = [
  {
    id: 1,
    title: "Klasik Losos",
    price: 640,
    image: "/klasik/wPT_Classic losos.jpg",
  },
  {
    id: 2,
    title: "Klasik Jegulja",
    price: 690,
    image: "/klasik/wPT_Classic ljegulja.jpg",
  },
  {
    id: 3,
    title: "Klasik Tuna ",
    price: 670,
    image: "/klasik/wPT_Classic tuna.jpg",
  },
  {
    id: 4,
    title: "Klasik Škampi",
    price: 700,
    image: "/klasik/wPT_Classic scampi.jpg",
  },
  {
    id: 5,
    title: "Klasik Krastavac",
    price: 430,
    image: "/klasik/wPT_Classic avokado.jpg",
  },
  {
    id: 6,
    title: "Klasik Avokado",
    price: 520,
    image: "/klasik/wPT_Classic avokado.jpg",
  },
  {
    id: 7,
    title: "Klasik Kraba spajsi",
    price: 560,
    image: "/klasik/wPT_Classic spicy craba.jpg",
  },
];

export interface sushiNigiri {
  id: number;
  title: string;
  price: number;
  images: string;
}

export const sushiNigiri = [
  {
    id: 1,
    title: "Sushi nigiri Losos",
    price: 190,
    image: "/nigiri/wPT_Nigiri losos.jpg",
  },
  {
    id: 2,
    title: "Sushi nigiri Škampi",
    price: 240,
    image: "/nigiri/wPT_Nigiri skampi.jpg",
  },
  {
    id: 3,
    title: "Sushi nigiri Jegulja",
    price: 280,
    image: "/nigiri/wPT_Nigiri ljegulja.jpg",
  },
  {
    id: 4,
    title: "Sushi nigiri Tuna ",
    price: 220,
    image: "/nigiri/wPT_Nigiri tuna.jpg",
  },
];
export interface Gunkan {
  id: number;
  title: string;
  price: number;
  images: string;
}

export const gunkan = [
  {
    id: 1,
    title: "Gunkan Losos",
    price: 200,
    image: "/gunkan/wPT_Gunkan losis.jpg",
  },
  {
    id: 2,
    title: "Gunkan Kraba",
    price: 180,
    image: "/gunkan/wPT_Gunkan kraba.jpg",
  },
  {
    id: 3,
    title: "Gunkan Tuna ",
    price: 230,
    image: "/gunkan/wPT_Gunkan tuna.jpg",
  },
  {
    id: 4,
    title: "Gunkan Jegulja",
    price: 290,
    image: "/gunkan/wPT_Gunkan jegulja.jpg",
  },
  {
    id: 5,
    title: "Gunkan Škampi",
    price: 250,
    image: "/gunkan/wPT_Gunkan skampi.jpg",
  },
];

export interface TempuraRoll {
  id: number;
  title: string;
  ingrediants: string;
  price: number;
  image: string;
}

export const tempuraRoll = [
  {
    id: 1,
    title: "Tempura roll Wakizasi",
    ingrediants: "kimči sos, krastavac, jegulja, losos",
    price: 890,
    image: "/tempuraRoll/wPT_Wakizashi.jpg",
  },
  {
    id: 2,
    title: "Tempura roll Bum bum ceri",
    ingrediants: "losos, sir, unagi, susam, paradajz",
    price: 840,
    image: "/tempuraRoll/wPT_Bum bum ceri.jpg",
  },
  {
    id: 3,
    title: "Tempura roll Kotor",
    ingrediants: "sir, ananas, jegulja, sweet, čili",
    price: 930,
    image: "",
  },
  {
    id: 4,
    title: "Tempura roll Hokage",
    ingrediants: "škampi, sir, spajsi sos, paprika, krastavac",
    price: 860,
    image: "/tempuraRoll/wPT_Hokage.jpg",
  },
];

export interface ZapeceneRolnice {
  id: number;
  title: string;
  ingrediants: string;
  price: number;
  image: string;
}

export const zapeceneRolnice = [
  {
    id: 1,
    title: "Zapečene rolnice Cezar",
    ingrediants: "paradajz, piletina, sir, beli sos, rukola",
    price: 790,
    image: "/zapecenerol/wPT_Cezar.jpg",
  },
  {
    id: 2,
    title: "Zapečene rolnice Čikinero",
    ingrediants:
      "luk fri, šitake, spajsi sos, parmezan, sweet čili, paradajz, piletina",
    price: 810,
    image: "/zapecenerol/wPT_Chickenero.jpg",
  },
  {
    id: 3,
    title: "Zapečene rolnice Ojama",
    ingrediants: "krastavac, losos, sir, beli sos, crni susam",
    price: 840,
    image: "/zapecenerol/wPT_Ojama.jpg",
  },
  {
    id: 4,
    title: "Zapečene rolnice Nokhaido",
    ingrediants: "tobiko, jegulja, sir, avokado, losos, spajsi",
    price: 950,
    image: "/zapecenerol/wPT_Hokaido.jpg",
  },
  {
    id: 5,
    title: "Zapečene rolnice Fudži",
    ingrediants:
      "sir, krastavac, susam, škampi sos, parmezan, mladi luk, losos",
    price: 910,
    image: "/zapecenerol/wPT_Fudzi.jpg",
  },
];

export interface VegeRoll {
  id: number;
  title: string;
  ingrediants: string;
  price: number;
  image: string;
}

export const vegeRoll = [
  {
    id: 1,
    title: "Vege roll Uzumaki",
    ingrediants: "susam, krastavac, paprika, sos orah, avokado",
    price: 780,
    image: "/vegeroll/wPT_Uzumaki.jpg",
  },
  {
    id: 2,
    title: "Vege roll Zamami",
    ingrediants: " paradajz, susam, avokado, krastavac, šitake, cuka",
    price: 800,
    image: "/vegeroll/wPT_Zamami.jpg",
  },
  {
    id: 3,
    title: "Vege roll Kawasaki",
    ingrediants: "mirodjija, tofu, luk fri, krastavac, guakamoli",
    price: 790,
    image: "/vegeroll/wPT_Kavasaki.jpg",
  },
  {
    id: 4,
    title: "Vege roll Mina",
    ingrediants: "cuka, paprika, sitake, tofu, slice krastavac, sweet čili",
    price: 780,
    image: "/vegeroll/wPT_Mina.jpg",
  },
];

export interface FitRoll {
  id: number;
  title: string;
  ingrediants: string;
  price: number;
  image: string;
}

export const fitRoll = [
  {
    id: 1,
    title: "Fit roll Omega",
    ingrediants: "slice krastavac, avokado, losos, tobiko",
    price: 890,
    image: "/fitroll/wPT_Omega.jpg",
  },
  {
    id: 2,
    title: "Fit roll Unagi",
    ingrediants: "susam, jegulja, krastavac, unagi",
    price: 890,
    image: "/fitroll/wPT_Unagi.jpg",
  },
  {
    id: 3,
    title: "Fit roll Rukotuna",
    ingrediants: "tuna, rukola, luk fri, avokado",
    price: 910,
    image: "/fitroll/wPT_Rukotuna.jpg",
  },
  {
    id: 4,
    title: "Fit roll Akimbo",
    ingrediants: "škampi, losos, rukola, slice krastavac, mango sos",
    price: 910,
    image: "/fitroll/wPT_Akimbo.jpg",
  },
  {
    id: 5,
    title: "Fit roll Energy fit",
    ingrediants: "mirodjija, losos, tuna, avokado, zeleni sos",
    price: 930,
    image: "/fitroll/wPT_Energy fit.jpg",
  },
];

export interface GiozeSkampi {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const giozeSkampi = [
  {
    id: 1,
    title: "Gioze škampi",
    price: 1500,
    image: "/menu/wPT_Gyoza.jpg",
  },
];

export interface UroMakiWasabi {
  id: number;
  title: string;
  ingrediants: string;
  price: number;
  image: string;
}

export const uroMakiWasabi = [
  {
    id: 1,
    title: "Uro maki wasabi Filadelfija avokado",
    ingrediants: "sir, avokado, losos",
    price: 890,
    image: "/wasabi/wPT_Philadelphia.jpg",
  },
  {
    id: 2,
    title: "Uro maki wasabi Kalifornija losos",
    ingrediants: "sir, avokado, losos, tobiko",
    price: 890,
    image: "/wasabi/wPT_ California losos.jpg",
  },
  {
    id: 3,
    title: "Uro maki wasabi Kalifornija klasik",
    ingrediants: "majonez tobiko, kraba, krastavac, tobiko",
    price: 790,
    image: "/wasabi/wPT_California classic.jpg",
  },
  {
    id: 4,
    title: "Uro maki wasabi Canada",
    ingrediants: "sir, jegulja, krastavac, losos",
    price: 990,
    image: "/wasabi/wPT_Canada.jpg",
  },
  {
    id: 5,
    title: "Uro maki wasabi Sombrero",
    ingrediants: "spajsi sos, škampi, krastavac, guakamoli",
    price: 830,
    image: "/wasabi/wPT_Sombrero.jpg",
  },
  {
    id: 6,
    title: "Uro maki wasabi Flamingo",
    ingrediants: "guakamoli, losos, tuna, krastavac, avokado",
    price: 870,
    image: "/wasabi/wPT_Flamingo.jpg",
  },
  {
    id: 7,
    title: "Uro maki wasabi Bonito",
    ingrediants: "strugotina tune, tuka, sir, krastavac, spajsi sos",
    price: 850,
    image: "",
  },
  {
    id: 8,
    title: "Uro maki wasabi Crispi",
    ingrediants: "luk fri, sir, skampi tempura, krastavac, spajsi",
    price: 880,
    image: "/wasabi/wPT_Crispy.jpg",
  },
  {
    id: 9,
    title: "Uro maki wasabi Grinch",
    ingrediants: "sir, tuna, krastavac, mirodjija, zeleni sos",
    price: 830,
    image: "",
  },
  {
    id: 10,
    title: "Uro maki wasabi Samuraj",
    ingrediants: "susam, sir, skampi, losos, unagi",
    price: 870,
    image: "/wasabi/wPT_Samurai.jpg",
  },
  {
    id: 11,
    title: "Uro maki wasabi Crispi losos",
    ingrediants:
      "hrskavi losos, rukola, mladi luk, krastavac, spajsi sos, tobiko",
    price: 930,
    image: "",
  },
];

export interface Supe {
  id: number;
  title: string;
  ingrediants: string;
  price: number;
  image: string;
}

export const supe = [
  {
    id: 1,
    title: "Ramen",
    ingrediants: "bujon, piletina, rezance, jaja, mladi luk",
    price: 690,
    image: "/supe/wPT_Ramen supa.jpg",
  },
  {
    id: 2,
    title: "Miso",
    ingrediants: "wakame, tofu, šitake pečurke, mladi luk, susam",
    price: 590,
    image: "/supe/wPT_Miso.jpg",
  },
  {
    id: 3,
    title: "Suimono",
    ingrediants: "bujon, škampi, wakame, losos, mladi luk",
    price: 730,
    image: "/supe/wPT_Suimono.jpg",
  },
];

export interface Salate {
  id: number;
  title: string;
  ingrediants: string;
  price: number;
  image: string;
}

export const salate = [
  {
    id: 1,
    title: "Hijasiwakame",
    ingrediants: "cuka, paprika, krastavac, gawadari sos",
    price: 680,
    image: "/salate/wPT_Hiiashi vakame.jpg",
  },
  {
    id: 2,
    title: "Sejšeli",
    ingrediants: "losos, avokado, rukola, krastavac, limun sok",
    price: 780,
    image: "/salate/wPT_Sejseli.jpg",
  },
  {
    id: 3,
    title: "Azijski krastavac",
    ingrediants: "beli luk, soja sos, prženi kikiriki, krastavac",
    price: 650,
    image: "/salate/wPT_Azijatski krastavac.jpg",
  },
  {
    id: 4,
    title: "Enoka",
    ingrediants: "soja sos, beli luk, riblji sos, pasta katuran, čili pasta",
    price: 720,
    image: "/salate/wPT_Sejseli.jpg",
  },
  {
    id: 5,
    title: "Patlidžan",
    ingrediants: "fri patlidžan, rukola, čili sos",
    price: 700,
    image: "/salate/wPT_Crunchy patlidzan.jpg",
  },
];

export interface Tartar {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const tartar = [
  {
    id: 1,
    title: "Tartar losos",
    price: 950,
    image: "/menu/wPT_Tartar tuna.jpg",
  },
  {
    id: 2,
    title: "Tartar tuna",
    price: 1000,
    image: "/menu/wPT_Tartar tuna.jpg",
  },
];
export interface Dezert {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const dezert = [
  {
    id: 1,
    title: "Rafaelo",
    price: 770,
    image: "/menu/wPT_Rafaelo.jpg",
  },
  {
    id: 2,
    title: "Tuti fruti",
    price: 770,
    image: "/menu/wPT_Tutifruti.jpg",
  },
];

export interface Setovi {
  id: number;
  title: string;
  ingrediants: string;
  price: number;
  image: string;
}

export const setovi = [
  {
    id: 1,
    title: "Very easy 1 - posno",
    ingrediants: "klasik, uzumaki",
    price: 1100,
    image: "/setovi/wPT_Very easy 1.jpg",
  },
  {
    id: 2,
    title: "Very easy 2",
    ingrediants: "fila avokado, 2x sushi losos",
    price: 1080,
    image: "/setovi/wPT_Very easy 2.jpg",
  },
  {
    id: 3,
    title: "Easy 1",
    ingrediants: "Fila avokado, Sombrero, Guakam tuna",
    price: 1990,
    image: "/setovi/wPT_Easy 1.jpg",
  },
  {
    id: 4,
    title: "Easy 2",
    ingrediants: "rukotuna, omega, guakam cuka",
    price: 1950,
    image: "/setovi/wPT_Easy 2.jpg",
  },
  {
    id: 5,
    title: "Medium 1",
    ingrediants: "Nakijasi, krispi, cezar, klasik avokado",
    price: 2700,
    image: "/setovi/wPT_Medium 1.jpg",
  },
  {
    id: 6,
    title: "Medium 2",
    ingrediants: "tuna clasic, cikinero, energy fit, flamingo",
    price: 2850,
    image: "/setovi/wPT_Medium 2.jpg",
  },
  {
    id: 7,
    title: "Hard 1",
    ingrediants: "klasik skampi, california klasik, canada, cezar, fudzi",
    price: 3880,
    image: "/setovi/wPT_Hard 1.jpg",
  },
  {
    id: 8,
    title: "Hard 2",
    ingrediants: "klasik losos, bum bum ceri, kotor, bonito, grinc",
    price: 3760,
    image: "/setovi/wPT_Hard 2.jpg",
  },
  {
    id: 9,
    title: "Extreme",
    ingrediants:
      "klasik losos, klasik avokado, osama, hokage, rukotuna, akimbo, kawasaki, krispi, fila avokado",
    price: 6890,
    image: "/setovi/wPT_Extreme set.jpg",
  },
];

export interface Pice {
  id: number;
  title: string;
  ingrediants: string;
  price: number;
  image: string;
}

export const pice = [
  {
    id: 1,
    title: "Rosa 0.5l",
    price: 200,
    image: "/menu/rosa.jpeg",
  },
  {
    id: 2,
    title: "Knjiz Milos 0.5l",
    price: 290,
    image: "/menu/knjazmilos.jpeg",
  },
  {
    id: 3,
    title: "Coca Cola 0.33l",
    price: 290,
    image: "/menu/cocacola.jpeg",
  },
  {
    id: 4,
    title: "Coca Cola zero 0.33l",
    price: 290,
    image: "/menu/cocacolazero.jpeg",
  },
  {
    id: 5,
    title: "Orangina 0.33l",
    price: 290,
    image: "/menu/orangina.jpeg",
  },
  {
    id: 6,
    title: "Fuze tea peach 0.5l",
    price: 290,
    image: "/menu/tea.jpeg",
  },
  {
    id: 7,
    title: "Red Bull",
    price: 300,
    image: "/menu/redbull.jpeg",
  },
  {
    id: 8,
    title: "Pivo Kirin",
    price: 550,
    image: "",
  },
];
