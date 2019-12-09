const mysql=require('mysql');

const conn=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Nodedb'


}
);
module.exports=conn;