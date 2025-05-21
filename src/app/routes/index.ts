import express from "express";

import { AuthRoutes } from "../modules/Auth/auth.routes";
import { StudentRoute } from "../modules/Student/student.route";
import { productRoute } from "../modules/products/product.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/student",
    route: StudentRoute,
  },
  {
    path: "/product",
    route: productRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
