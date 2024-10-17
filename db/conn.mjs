import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

// Creatted connection string
let connectionString = process.env.atlasURI || '';

const client = new MongoClient(connectionString);

// Variable to hold connection ingo
let conn;
try {
    // try to connect to client
    conn = await client.connect();
    console.log(`Mongo DB is connected`)

} catch (err) {
    console.error(err)
}

let db = conn.db('');

export default db;