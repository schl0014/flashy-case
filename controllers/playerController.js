import { getPlayersFromSupabase, writePlayersToSupabase } from "../adapters/supabaseAdapter.js"

export async function getPlayers(req, res, next) {
  console.log('wow player')
  const getPlayerData = await getPlayersFromSupabase()
  res.json(getPlayerData)
}

export async function setPlayers(req, res, next) {
  // req.body.id != null;
  writePlayersToSupabase(req.body);
  console.log('test playercontroller')
}
