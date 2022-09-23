import { getCardsFromSupabase } from "../adapters/supabaseAdapter.js"

export async function getCards(req, res, next) {
  console.log('wow appointment')
  const getappontmentData = await getCardsFromSupabase()
  res.json(getappontmentData)

}

// export async function setAppointment(req, res, next) {
//   // req.body.id != null;
//   req.body.descriptions != null;
//   writeAppointmentsToSupabas(req.body);
//   console.log('test appointmentcontroller')

// }