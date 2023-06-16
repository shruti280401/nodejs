const dbConnect = require('./mongodb');
const deleteData = async ()=>{
    const db = await dbConnect();
    let result = await db.deleteMany({name:'max pro 5'})
}
deleteData();