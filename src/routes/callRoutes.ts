import express from 'express';
import { CallController } from '../controllers/callController';

const router = express.Router();
const callController = new CallController();

router.get('/calls', (req, res) => callController.getAllCalls(req, res));
router.get('/calls/:id', (req, res) => callController.getCallById(req, res));

export default router;