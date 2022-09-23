import { getAppointmentsFromSupa, writeAppointmentsToSupabas } from "../adapters/supabaseAdapter.js"

export async function getAppointments(req, res, next) {
  console.log('wow appointment')
  const getappontmentData = await getAppointmentsFromSupa()
  res.json(getappontmentData)

}

export async function setAppointment(req, res, next) {
  // req.body.id != null;
  req.body.descriptions != null;
  writeAppointmentsToSupabas(req.body);
  console.log('test appointmentcontroller')

}

export async function getPlayers(req, res, next) {
  console.log('wow player')
  const getappontmentData = await getPlayersFromSupa()
  res.json(getappontmentData)
}

export async function setPlayers(req, res, next) {
  // req.body.id != null;
  req.body.descriptions != null;
  writePlayerssToSupabas(req.body);
  console.log('player')
}