import { Router } from "express";
import {
  createRestaurantController,
  deleteRestaurantController,
  getAllRestaurantByIdController,
  getAllRestaurantsController,
  updateRestaurantController,
  getAllRestaurantsWithCuisinesController,
  getRestaurantByPathController,
  updateRestaurantRatingController,
} from "./restaurants.controller";

const router = Router();

router.put("/rating", updateRestaurantRatingController);
router.get("/", getAllRestaurantsController);
router.get("/path/:path", getRestaurantByPathController);
router.get("/withcuisines/all", getAllRestaurantsWithCuisinesController);
router.get("/id/:id", getAllRestaurantByIdController);
router.post("/", createRestaurantController);
router.put("/id/:id", updateRestaurantController);
router.delete("/id/:id", deleteRestaurantController);

export default router;
