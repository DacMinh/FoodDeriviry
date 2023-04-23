import I1 from "../imgs/i1.png";
import F1 from "../imgs/f1.png";
import C3 from "../imgs/c3.png";
import Fi1 from "../imgs/fi1.png";

export const heroData = [
  {
    id: 1,
    name: "Kem Socola",
    decp: "Chocolate & vanilla",
    price: "25.000",
    imageSrc: I1,
  },
  { id: 2, name: "Dâu tươi", decp: "Dâu tươi", price: "28.000", imageSrc: F1 },
  {
    id: 3,
    name: "Cơm gà",
    decp: "Gà,cơm,rau ăn kèm",
    price: "30.000",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Hải Sản",
    decp: "Sò,hến,nước mắm",
    price: "50.000",
    imageSrc: Fi1,
  },
];

export const categories = [
  {
    id: 1,
    name: "Gà",
    urlParamName: "chicken",
  },
  {
    id: 2,
    name: "Ca-ri",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "Cơm",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Cá",
    urlParamName: "fish",
  },
  {
    id: 5,
    name: "Nước ép",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "Kem",
    urlParamName: "icecreams",
  },

  {
    id: 7,
    name: "Nước ngọt",
    urlParamName: "drinks",
  },
];
