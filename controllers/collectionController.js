import { getCollectionsFromSupabase, writeCollectionsToSupabase } from "../adapters/supabaseAdapter.js"

export async function getCollection(req, res, next) {
  console.log('')
  const getCollectionData = await getCollectionsFromSupabase()
  res.json(getCollectionData)

}

export async function setCollection(req, res, next) {
  // req.body.id != null;
  req.body.name != null;
  req.body.category = null;
  req.body.description = null;
  writeCollectionsToSupabase(req.body);
  console.log('test collection')

}