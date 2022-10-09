/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 04/03/2020
 * Author: Glaucia Lemos
 */

 const { Pool } = require('pg');
 const dotenv = require('dotenv');
 
 dotenv.config();
 
 // ==> Database Connection:
 const pool = new Pool({
   connectionString: process.env.DATABASE_URL
 });
 
 pool.on('connect', () => {
   console.log('Database successfully connected!');
 });
 
 module.exports = {
   query: (text, params) => pool.query(text, params),
 };