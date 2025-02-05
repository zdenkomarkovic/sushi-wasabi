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
    image: "/menu/wPT_Classic losos.jpg",
  },
  {
    id: 2,
    title: "Klasik Jegulja",
    price: 690,
    image: "/menu/wPT_Classic ljegulja.jpg",
  },
  {
    id: 3,
    title: "Klasik Tuna ",
    price: 670,
    image: "/menu/wPT_Classic tuna.jpg",
  },
  {
    id: 4,
    title: "Klasik Škampi",
    price: 700,
    image: "/menu/wPT_Classic scampi.jpg",
  },
  {
    id: 5,
    title: "Klasik Krastavac",
    price: 430,
    image: "/menu/wPT_Classic avokado.jpg",
  },
  {
    id: 6,
    title: "Klasik Avokado",
    price: 520,
    image: "/menu/wPT_Classic avokado.jpg",
  },
  {
    id: 7,
    title: "Klasik Kraba spajsi",
    price: 560,
    image: "/menu/wPT_Classic spicy craba.jpg",
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
    image: "/menu/wPT_Nigiri losos.jpg",
  },
  {
    id: 2,
    title: "Sushi nigiri Škampi",
    price: 240,
    image: "/menu/wPT_Nigiri skampi.jpg",
  },
  {
    id: 3,
    title: "Sushi nigiri Jegulja",
    price: 280,
    image: "/menu/wPT_Nigiri ljegulja.jpg",
  },
  {
    id: 4,
    title: "Sushi nigiri Tuna ",
    price: 220,
    image: "/menu/wPT_Nigiri tuna.jpg",
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
    image: "/menu/wPT_Gunkan losis.jpg",
  },
  {
    id: 2,
    title: "Gunkan Kraba",
    price: 180,
    image: "/menu/wPT_Gunkan kraba.jpg",
  },
  {
    id: 3,
    title: "Gunkan Tuna ",
    price: 230,
    image: "/menu/wPT_Gunkan tuna.jpg",
  },
  {
    id: 4,
    title: "Gunkan Jegulja",
    price: 290,
    image: "/menu/wPT_Gunkan jegulja.jpg",
  },
  {
    id: 5,
    title: "Gunkan Škampi",
    price: 250,
    image: "/menu/wPT_Gunkan skampi.jpg",
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
    image: "/menu/wPT_Classic losos.jpg",
  },
  {
    id: 2,
    title: "Tempura roll Bum bum ceri",
    ingrediants: "losos, sir, unagi, susam, paradajz",
    price: 840,
    image: "/menu/wPT_Classic ljegulja.jpg",
  },
  {
    id: 3,
    title: "Tempura roll Kotor",
    ingrediants: "sir, ananas, jegulja, sweet, čili",
    price: 930,
    image: "/menu/wPT_Classic tuna.jpg",
  },
  {
    id: 4,
    title: "Tempura roll Hokage",
    ingrediants: "škampi, sir, spajsi sos, paprika, krastavac",
    price: 860,
    image: "/menu/wPT_Classic scampi.jpg",
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
    image: "/menu/wPT_Classic losos.jpg",
  },
  {
    id: 2,
    title: "Zapečene rolnice Čikinero",
    ingrediants:
      "luk fri, šitake, spajsi sos, parmezan, sweet čili, paradajz, piletina",
    price: 810,
    image: "/menu/wPT_Classic ljegulja.jpg",
  },
  {
    id: 3,
    title: "Zapečene rolnice Ojama",
    ingrediants: "krastavac, losos, sir, beli sos, crni susam",
    price: 840,
    image: "/menu/wPT_Classic tuna.jpg",
  },
  {
    id: 4,
    title: "Zapečene rolnice Nokhaido",
    ingrediants: "tobiko, jegulja, sir, avokado, losos, spajsi",
    price: 950,
    image: "/menu/wPT_Classic scampi.jpg",
  },
  {
    id: 5,
    title: "Zapečene rolnice Fudži",
    ingrediants:
      "sir, krastavac, susam, škampi sos, parmezan, mladi luk, losos",
    price: 910,
    image: "/menu/wPT_Classic scampi.jpg",
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
    image: "/menu/wPT_Classic losos.jpg",
  },
  {
    id: 2,
    title: "Vege roll Zamami",
    ingrediants: " paradajz, susam, avokado, krastavac, šitake, cuka",
    price: 800,
    image: "/menu/wPT_Classic ljegulja.jpg",
  },
  {
    id: 3,
    title: "Vege roll Kawasaki",
    ingrediants: "mirodjija, tofu, luk fri, krastavac, guakamoli",
    price: 790,
    image: "/menu/wPT_Classic tuna.jpg",
  },
  {
    id: 4,
    title: "Vege roll Mina",
    ingrediants: "cuka, paprika, sitake, tofu, slice krastavac, sweet čili",
    price: 780,
    image: "/menu/wPT_Classic scampi.jpg",
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
    image: "/menu/wPT_Classic losos.jpg",
  },
  {
    id: 2,
    title: "Fit roll Unagi",
    ingrediants: "susam, jegulja, krastavac, unagi",
    price: 890,
    image: "/menu/wPT_Classic ljegulja.jpg",
  },
  {
    id: 3,
    title: "Fit roll Rukotuna",
    ingrediants: "tuna, rukola, luk fri, avokado",
    price: 910,
    image: "/menu/wPT_Classic tuna.jpg",
  },
  {
    id: 4,
    title: "Fit roll Akimbo",
    ingrediants: "škampi, losos, rukola, slice krastavac, mango sos",
    price: 910,
    image: "/menu/wPT_Classic scampi.jpg",
  },
  {
    id: 5,
    title: "Fit roll Energy fit",
    price: 930,
    image: "/menu/wPT_Classic scampi.jpg",
  },
];
export interface GiozeSkampi {
  id: number;
  title: string;
  ingrediants: string;
  price: number;
  image: string;
}

export const giozeSkampi = [
  {
    id: 1,
    title: "Gioze škampi",
    price: 1500,
    image: "/menu/wPT_Classic losos.jpg",
  },
];

export const nesto = [
  {
    id: 1,
    title: "Losos",
    ingrediants: "",
    price: 640,
    image: "/menu/wPT_Classic losos.jpg",
  },
  {
    id: 2,
    title: "Jegulja",
    price: 690,
    image: "/menu/wPT_Classic ljegulja.jpg",
  },
  {
    id: 3,
    title: "Tuna ",
    price: 670,
    image: "/menu/wPT_Classic tuna.jpg",
  },
  {
    id: 4,
    title: "Skampi",
    price: 700,
    image: "/menu/wPT_Classic scampi.jpg",
  },
  {
    id: 5,
    title: "Krastavac",
    price: 430,
    image: "/menu/wPT_Classic losos.jpg",
  },
  {
    id: 6,
    title: "Avokado",
    price: 520,
    image: "/menu/wPT_Classic avokado.jpg",
  },
  {
    id: 7,
    title: "Kraba spajsi",
    price: 560,
    image: "/menu/wPT_Classic spicy craba.jpg",
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
  {
    id: 13,
  },
  {
    id: 14,
  },
  {
    id: 15,
  },
  {
    id: 16,
  },
  {
    id: 17,
  },
  {
    id: 18,
  },
];
