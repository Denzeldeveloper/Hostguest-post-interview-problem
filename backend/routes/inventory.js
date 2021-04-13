import express from 'express';
import { getInventory, createInventory } from "../controllers/inventorycontroller.js";
import inventory from '../models/inventory.js';

const router = express.Router();

router.get('/', getInventory);
router.post('/', createInventory);


export default router;