import express from 'express';
import { getCards } from '../controllers/cardsController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/cards', getCards)
// router.post('/appointment', setAppointment)

export default router;
