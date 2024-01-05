const mysql = require('mysql2/promise');

const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hospital'
};

async function query(sql, params){
    const connection = await mysql.createConnection(config);
    const [result, ] = await connection.execute(sql , params);
    await connection.end();
    return result;
};

module.exports = { query }