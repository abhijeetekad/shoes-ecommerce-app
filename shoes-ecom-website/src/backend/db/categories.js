import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "air-jorden",
    image: "AssetPublic/Images/air jordan logo.png",
  },
  {
    _id: uuid(),
    categoryName: "nike",
    image: "AssetPublic/Images/nike logo.png",
  },
  {
    _id: uuid(),
    categoryName: "addidas",
    // image: "/rare-kicks-ecom/src/Asset/Images/adidas shoe logo.png",
    image: "AssetPublic/Images/adidas shoe logo.png",
  },
];
