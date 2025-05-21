import { Router } from "express";
import { productController } from "./product.controller";

const route=Router()

route.post("/",productController.createProduct)

route.get("/",productController.getAllProduct)

export const productRoute=route