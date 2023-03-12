const mysql2 = require('mysql2')

const PolarDBConnection = mysql2.createPool({
    host:"compairx.mysql.polardb.japan.rds.aliyuncs.com",
    user:"user",
    password:"User@123",
    database:"compairxdb",

    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})

if(PolarDBConnection){
    console.log("Database Connected")
    module.exports = PolarDBConnection
}else{
    console.log("Database not Connected")
}