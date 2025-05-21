import { Order } from "@prisma/client";

export type IProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  order:Order[]
};
