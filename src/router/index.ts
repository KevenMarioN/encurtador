import { Router } from "express";
import URLRouter from "./url.route";

const router = Router();

router.use(URLRouter);

export default router;