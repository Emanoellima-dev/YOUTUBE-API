import express from 'express';
import { search, initialRouter } from '../controllers/controller.js';

const router = express.Router();

router.get('/', initialRouter);
router.get('/videos/:channelName/:order', search);

export default router;
