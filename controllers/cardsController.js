import { getCardsFromSupabase, writeCardsToSupabase } from "../adapters/supabaseAdapter.js"

export async function getCards(req, res, next) {
  console.log('wow appointment')
  const getappontmentData = await getCardsFromSupabase()
  res.json(getappontmentData)

}

export async function setCards(req, res, next) {
  // req.body.id != null;
  writeCardsToSupabase(req.body);
  console.log('test appointmentcontroller')
}