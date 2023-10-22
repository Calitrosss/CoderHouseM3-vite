const productos = [
  {
    id: "1",
    name: "Pan de Masa Madre 450-500g",
    description:
      "Pan artesanal de masa madre , Elaborado con harina de trigo y centeno. Se caracteriza por su corteza crujiente, sabor y aromas tostados, con una miga suave.",
    stock: 10,
    price: 2990,
    category: "masamadre",
    img: "https://corpora-fork.s3.amazonaws.com/back_img/PTOT07037-pan-de-masa-madre-emplatado-frontal-830%20%282%29-1685651666857.jpg",
  },
  {
    id: "2",
    name: "Baguette Tradicional 340g",
    description:
      "Pan Tradicional Francés, elaborado con masa madre , harina de trigo, centeno y semola . Su corteza es crocante y miga suave.",
    stock: 20,
    price: 1490,
    category: "masamadre",
    img: "https://corpora-fork.s3.amazonaws.com/back_img/PTOT07001-baguette-tradicional-320g-830%20%282%29-1686174853257.jpg",
  },
  {
    id: "3",
    name: "Pan de Chocolate 90g",
    description: "Finas capas de masa rellenas de chocolate",
    stock: 30,
    price: 1490,
    category: "masadulce",
    img: "https://corpora-fork.s3.amazonaws.com/back_img/IN112008068-pan-chocolate-fork-90g-frontal-830-1697138121583.jpg",
  },
  {
    id: "4",
    name: "Espiral de Canela 85g",
    description:
      "Espiral danesa muy crujiente, relleno de canela y pasta de azúcar rubia. Preparado según la tradición panadera y pastelera de Europa.",
    stock: 40,
    price: 2690,
    category: "masadulce",
    img: "https://corpora-fork.s3.amazonaws.com/back_img/hctpqt071rshhfmaphhu8p4tijIN112008003-espiral-canela.jpg",
  },
  {
    id: "5",
    name: "Pizza Italita Masa Madre Italita, 2 a 3 porciones",
    description:
      "Pizza artesanal elaborada con masa madre, harina de trigo, salsa de tomates, mozzarella, ricotta, pepperoni, champiñon, aceitunas negras, y albahaca. De textura esponjosa, aireada y con una base crocante. Tamaño 32 cm (redonda). Producto congelado. Se debe hornear a 200° por 15 - 20 minutos.",
    stock: 20,
    price: 9990,
    category: "temporada",
    img: "https://corpora-fork.s3.amazonaws.com/back_img/IN123001018-pizza-italita-fam-32cm-tag-masamadre-1608217706994-1668170996175.jpg",
  },
  {
    id: "6",
    name: "Pizza pepperoni La Local, de 4 a 6 porciones",
    description: "Masa con 24 horas de fermentación, salsa pomodoro, queso mozzarella y pepperoni.",
    stock: 50,
    price: 9990,
    category: "temporada",
    img: "https://corpora-fork.s3.amazonaws.com/back_img/IN123001069-pizza-pepperoni-la-local-frontal-emplatado-830-1694196677484.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};
