import express from 'express';
import { getCards, setCards } from '../controllers/cardsController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/cards', getCards)
router.post('/cards', setCards)

export default router;
