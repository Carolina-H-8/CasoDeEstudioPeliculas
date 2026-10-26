import { Router } from 'express';
import genreRoutes from './genreRoutes.js';
import directorRoutes from './directorRoutes.js';
import productionCompanyRoute from './productionCompanyRoutes.js';
import typeRoutes from './typeRoutes.js';
import mediaRoutes from './mediaRoutes.js';



const router = Router();

router.use('/genres', genreRoutes);
router.use('/directors', directorRoutes);
router.use('/production-companies', productionCompanyRoute);
router.use('/types', typeRoutes);
router.use('/media', mediaRoutes)


export default router;