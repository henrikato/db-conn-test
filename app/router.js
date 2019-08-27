import { Router } from 'express';
import { TestarConexao } from './controllers/statusController';

const router = Router();

router.route('/status').post(TestarConexao);

export default router;