import express, { Router } from "express";
import { getSales } from "../controller/bookCarControllerServices";

const router: Router = express.Router();

router.route("/").get(getSales);

export default router;
