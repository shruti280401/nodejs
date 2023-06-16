const client = require('./database_conn');
//read data
const read = async()=>{
    await client .connect();
    const result = await client.query(`select * from emp_data where name='shruti'`,(err,result)=>{
       console.log(result.rows);
       client.end();

})
}
// read();
//insert data 
const insert = async()=>{
    await client .connect();
    const result = await client.query(`insert into emp_data(name,designation,salary) values($1, $2, $3) RETURNING *` ,['neha','ux designer',120],(err,result)=>{
       console.log(result.rows);
       client.end();

})
}
insert();

