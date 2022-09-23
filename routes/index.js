import express from 'express';
import { getCards } from '../controllers/cardsController.js';
import { getProgress, setProgress } from '../controllers/progressController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/cards', getCards)
// router.post('/appointment', setAppointment)
router.get('/progress', getProgress)
router.post('/progress', setProgress)

export default router;
