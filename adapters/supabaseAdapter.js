
// Initialize the JS client
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://dhlesnfajbnyurktxeed.supabase.co' , 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRobGVzbmZhamJueXVya3R4ZWVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM4MzY3MDIsImV4cCI6MTk3OTQxMjcwMn0.gmxgWmOJTs8VExUURDhNIX2L1XBqp5liG5iW-4mWwg4')

// Make a request

export async function getAppointmentsFromSupa(req, res, next) {

const { data, error } = await supabase.from('appointments').select('*')
if(error) console.error('query error',error);
else return data;

    console.log('supa appointmet')

    // all data from te supabase appointment

    
}

export async function writeAppointmentsToSupabas(appointment){
    const { data, error } = await supabase
  .from('appointments')
  .insert([appointment]);
    console.log(data);
    if(error){
        console.log(error)
    }
}