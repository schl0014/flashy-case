import { getProgressFromSupabase, writeProgressToSupabase } from "../adapters/supabaseAdapter.js";

export async function getProgress(req, res, next) {
    const getProgressData = await getProgressFromSupabase()
    res.json(getProgressData)
}

export async function setProgress(req, res, next) {
    // req.body.id != null;
    req.body.time != null;
    req.body.correct != null;
    req.body.wrong != null;
    req.body.completed != null;
    req.body.tries != null;
    writeProgressToSupabase(req.body);
    console.log('test progresscontroller')
}