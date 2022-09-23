// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://uuntuprciehwiysbriez.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1bnR1cHJjaWVod2l5c2JyaWV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5MTcwODMsImV4cCI6MTk3OTQ5MzA4M30.7PdYA6gYqytQmOQecc8UE6OQXTyk87gzAtmgvaDusl8')

// Make a request
export async function getAppointmentsFromSupa(req, res, next) {
    const { data, error } = await supabase.from('appointments').select('*')
    if (error) console.error('query error', error);
    else return data;
    console.log('supa appointmet')
    // all data from te supabase appointment
}

export async function writeAppointmentsToSupabas(appointment) {
    const { data, error } = await supabase.from('appointments').insert([appointment]);
    console.log(data);
    if (error) {
        console.log(error)
    }
}