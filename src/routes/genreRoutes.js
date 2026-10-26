import { Router } from 'express';
import { createGenre, getGenres } from '../controller/catalogController.js';

const router = Router();

router.post('/', createGenre);
router.get('/', getGenres);

export default router;