import { Router } from 'express';
import { createMedia, getMedia } from '../controller/mediaController.js';

const router = Router();

router.post('/', createMedia);
router.get('/', getMedia);

export default router;