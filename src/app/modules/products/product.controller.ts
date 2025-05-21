import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { productService } from "./product.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.createProduct(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});


const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.getAllProduct();
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Get All Product successfully",
    data: result,
  });
});


export const productController ={
    createProduct,
    getAllProduct
}