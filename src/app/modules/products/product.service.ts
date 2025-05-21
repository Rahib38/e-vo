import prisma from "../../../shared/prisma";
import { IProduct } from "./product.interface";

const createProduct = async (payload: IProduct) => {
  const productData = {
    id: payload.id,
    name: payload.name,
    description: payload.description,
    price: payload.price,
    order: payload.order,
  };

  const result = await prisma.product.create({
    data: productData,
  });
  return result;
};


const getAllProduct=async()=>{
    const result = await prisma.product.findMany()
    return result
}

export const productService = {
  createProduct,getAllProduct
};
