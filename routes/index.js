import express from 'express';

import { getAppointments, setAppointment } from '../controllers/appointmentController.js';

const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/appointment', getAppointments)
router.post('/appointment', setAppointment)

export default router;
