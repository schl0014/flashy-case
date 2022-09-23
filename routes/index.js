import express from 'express';
import { getProgress, setProgress } from '../controllers/progressController.js';
import { getCards, setCards, deleteCards } from '../controllers/cardsController.js';
import { getPlayers, setPlayers } from '../controllers/playerController.js';
import { getCollection, setCollection } from '../controllers/collectionController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
});

router.get('/cards', getCards)
// router.post('/appointment', setAppointment)
router.get('/progress', getProgress)
router.post('/progress', setProgress)
router.post('/cards', setCards)
router.delete('/cards', deleteCards)

router.get('/players', getPlayers)
router.post('/players', setPlayers)

router.get('/collection', getCollection)
router.post('/collection', setCollection)

export default router;
