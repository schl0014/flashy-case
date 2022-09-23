import express from 'express';
import { getCards, setCards } from '../controllers/cardsController.js';
import { getPlayers, setPlayers } from '../controllers/playerController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/cards', getCards)
router.post('/cards', setCards)

router.get('/players', getPlayers)
router.post('/players', setPlayers)

export default router;
