import express from 'express';
import { search } from '../controllers/controller.js';

const router = express.Router();

router.get('/videos/:channelName/:order', search);

export default router;
