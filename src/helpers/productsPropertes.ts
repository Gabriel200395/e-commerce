import TenisOne from "../assets/img/tennis_two.png";
import TennisTwo from "../assets/img/tenis.two.png";
import TennisThree from "../assets/img/tenis_three.png";
import TennisFour from "../assets/img/tenis_four.png";
import TennisFive from "../assets/img/tenis_five.png";
import TshirtOne from "../assets/img/camiseta_nike_drift_blue_black.png";
import TshirtTwo from "../assets/img/camiseta_nike_drift_blue.png";
import TshirtTheree from "../assets/img/camiseta_nike_drift_white.png";
import TshirtFour from "../assets/img/camiseta_nike_drift.png";
import TshirtFive from "../assets/img/camiseta_nike_selecao.png";
import shortsOne from "../assets/img/short_nike_cr_black.png";
import shortsTwo from "../assets/img/short_nike_cr.png";
import shortsTheree from "../assets/img/short_nike_liverpool.png";
import shortsFour from "../assets/img/short_nike_selecao.png";
import shortsFive from "../assets/img/short_nike_selecao.png";
import claspsOne from "../assets/img/Pochete_Nike_black.png";
import claspsTwo from "../assets/img/Pochete_Nike_Heritage_Unissex.png";
import claspsTheree from "../assets/img/Pochete_Nike_Unissex_blue.png";
import claspsFour from "../assets/img/polchete_nike.png";
import claspsFive from "../assets/img/Pochete_Nike_Unissex.png";

interface InstanceProduct {
  [key: string]: {
    products: { name: string; price: number; link: string }[];
  };
}

export const stockProducts: InstanceProduct = {
  tennis: {
    products: [
      {
        name: "Nike Colors",
        link: TenisOne,
        price: 300,
      },
      {
        name: "Tênis Nike Airmax Branco",
        link: TennisTwo,
        price: 350,
      },
      {
        name: "Tênis Nike Airmax Branco",
        link: TennisThree,
        price: 600,
      },
      {
        name: "Tênis Nike",
        link: TennisFour,
        price: 500,
      },
    ],
  },
  tshirts: {
    products: [
      {
        name: "Camisa Nike Dri-fit Preta",
        link: TshirtOne,
        price: 130,
      },
      {
        name: "Camisa Nike Dri-fit Azul",
        link: TshirtTwo,
        price: 70,
      },
      {
        name: "Camisa Nike Dri-fit Azul",
        link: TshirtTheree,
        price: 100,
      },
      {
        name: "Camisa Nike Dri-fit Vermelha",
        link: TshirtFour,
        price: 150,
      },
    ],
  },

  shorts: {
    products: [
      {
        name: "Calção Nike Dri-fit Preta e Branco",
        link: shortsOne,
        price: 110,
      },
      {
        name: "Calção Nike Dri-fit Preta e Laranja",
        link: shortsTwo,
        price: 140,
      },
      {
        name: "Calção Nike Dri-fit Liverpoll",
        link: shortsTheree,
        price: 120,
      },
      {
        name: "Calção Nike Dri-fit Seleção Brasileira",
        link: shortsFour,
        price: 130,
      },
    ],
  },

  clasps: {
    products: [
      {
        name: "Polchete Nike Preta",
        link: claspsOne,
        price: 170,
      },
      {
        name: "Polchete Heritage Unissex",
        link: claspsTwo,
        price: 200,
      },
      {
        name: "Polchete Nike Blue",
        link: claspsTheree,
        price: 200,
      },
      {
        name: "Polchete Heritage Unissex Rosa",
        link: claspsFour,
        price: 200,
      },
    ],
  },

  allProducts: {
    products: [
      {
        name: "Nike Colors",
        link: TenisOne,
        price: 300,
      },
      {
        name: "Tênis Nike Airmax Branco",
        link: TennisTwo,
        price: 350,
      },
      {
        name: "Tênis Nike Airmax Branco",
        link: TennisThree,
        price: 600,
      },
      {
        name: "Tênis Nike",
        link: TennisFour,
        price: 500,
      },
      {
        name: "Camisa Nike Dri-fit Preta",
        link: TshirtOne,
        price: 130,
      },
      {
        name: "Camisa Nike Dri-fit Azul",
        link: TshirtTwo,
        price: 70,
      },
      {
        name: "Camisa Nike Dri-fit Azul",
        link: TshirtTheree,
        price: 100,
      },
      {
        name: "Camisa Nike Dri-fit Vermelha",
        link: TshirtFour,
        price: 150,
      },
      {
        name: "Calção Nike Dri-fit Preta e Branco",
        link: shortsOne,
        price: 110,
      },
      {
        name: "Calção Nike Dri-fit Preta e Laranja",
        link: shortsTwo,
        price: 140,
      },
      {
        name: "Calção Nike Dri-fit Liverpoll",
        link: shortsTheree,
        price: 120,
      },
      {
        name: "Calção Nike Dri-fit Seleção Brasileira",
        link: shortsFour,
        price: 130,
      },
      {
        name: "Polchete Nike Preta",
        link: claspsOne,
        price: 170,
      },
      {
        name: "Polchete Heritage Unissex",
        link: claspsTwo,
        price: 200,
      },
      {
        name: "Polchete Nike Blue",
        link: claspsTheree,
        price: 200,
      },
      {
        name: "Polchete Heritage Unissex Rosa",
        link: claspsFour,
        price: 200,
      },
    ],
  },
};
