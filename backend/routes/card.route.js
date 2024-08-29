import { Router } from "express";

const router = Router();

import { createCard , getAllCards , getSingleCard } from "../controllers/card.controller.js";


router.post('/cards' , createCard);
router.get('/cards' , getAllCards);
router.get("/singleCard", getSingleCard);

export default router;