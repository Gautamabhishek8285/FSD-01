const { Client } = require('pg');
var db = new Client({
    host: "127.0.0.1",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "postgres",
    multipleStatements: true
});

db.connect();

// db.query(`select * from employees`, (err, res)=>{
//     if(!err) {
//         console.log(res.rows);
//     }
//     else {
//         console.log(err.message);
//     }
//     db.end;
// });

module.exports = db;