// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://uuntuprciehwiysbriez.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1bnR1cHJjaWVod2l5c2JyaWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5MTcwODMsImV4cCI6MTk3OTQ5MzA4M30.7PdYA6gYqytQmOQecc8UE6OQXTyk87gzAtmgvaDusl8')

// Make a request
export async function getCardsFromSupabase(req, res, next) {
    const { data, error } = await supabase.from('cards').select('*')
    if (error) console.error('query error', error);
    else return data;
    console.log('supa appointmet')
    // all data from te supabase appointment
}

export async function writeCardsToSupabase(appointment) {
    const { data, error } = await supabase.from('cards').insert([appointment]);
    console.log(data);
    if (error) {
        console.log(error)
    }
}

export async function getPlayersFromSupabase(req, res, next) {
    const { data, error } = await supabase.from('players').select('*')
    if (error) console.error('query error', error);
    else return data;
    console.log('supa appointmet')
    // all data from te supabase appointment
}

// Make a request
export async function getCollectionsFromSupabase(req, res, next) {
    const { data, error } = await supabase.from('collections').select('*')
    if (error) console.error('query error', error);
    else return data;
    console.log('supa appointmet')
    // all data from te supabase appointment
}

export async function writePlayersToSupabase(player) {
    const { data, error } = await supabase.from('players').insert([player]);
    console.log(data);
    if (error) {
        console.log(error)
    }
}

export async function writeCollectionsToSupabase(collections) {
    const { data, error } = await supabase.from('collections').insert([collections]);
    console.log(data);
    if (error) {
        console.log(error)
    }
}

export async function writeProgressToSupabase(progress) {
    const { data, error } = await supabase.from('progress').insert([progress]);
    console.log(data);
    if (error) {
        console.log(error)
    }
}

export async function getProgressFromSupabase(req, res, next) {
    const { data, error } = await supabase.from('progress').select('*');
    if (error) console.error('query error', error);
    else return data;
}