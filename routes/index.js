import express from 'express';
import { getCards } from '../controllers/cardsController.js';
import { getCollection, setCollection } from '../controllers/collectionController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/cards', getCards)
// router.post('/appointment', setAppointment)

router.get('/collection', getCollection)
router.post('/collection', setCollection)
export default router;
