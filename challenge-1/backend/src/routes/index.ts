import { Router } from "express";
import { index, show } from "../controllers/TimeZoneController";

const router = Router();

router.get("/timezones", index);
router.get("/timezones/:abbreviation", show);

export { router };