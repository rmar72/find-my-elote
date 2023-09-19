import express from 'express';
import {
  getVendors,
  registerVendor
} from '../controllers/vendorController.js';

const router = express.Router();
router.post('/', registerVendor);
router.get('/', getVendors);

export default router;
