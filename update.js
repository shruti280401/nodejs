const dbConnect = require('./mongodb');
const updateData = async ()=>{
    const db = await dbConnect();
    let result = await db.updateMany(
        { brand: 'micromax'},{$set: {name : 'max pro 5' , price : 550}}
    );
}
updateData();