/* Accessing SUPABASE with REST API */

import {createClient} from
    `somelink`

const supabase = createClient(`your-supabase-url`,`your-api-key`);

async function fetchData(){
    //Selects all data from the table
    const {data, error} = await supabase.from("your_table_name").select();
    console.log("Fetched data:",data);
}

fetchData();


//INSERT DATA
const {error} = await supabase.from("students")
    .insert({first_name: "Sarah",username: "sarah05"});

//UPDATE DATA
const {er} = await supabase.from("students")
    .update({username: "kai01"}).eq("student_id",100);

//DELETE DATA
const {err} = await supabase.from("students")
    .delete().eq("username","grey07");