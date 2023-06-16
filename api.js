//making an simple dynamic api
// const express = require('express');
// const dbConnect = require('./mongodb')
// const mongodb = require('mongodb')
// const app = express();
// //get api
// app.get('/', async (req,resp)=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     resp.send(data)
// });
// //post api
// app.use(express.json()); //midddleware to convert postman data to json
// app.post('/',async (req,resp)=>{
//     // console.log(req.body)
//     //catching data from postman and inserting it in db
//     let data = await dbConnect();
//     let result = await data.insertOne(req.body)
//     resp.send(result)
// } ); 
// //put api :used to update db
// app.put("/",async (req,resp)=>{
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         {name: req.body.name},{$set:req.body}
//     )
//     resp.send(req.body)
// });
// //delete api
// app.delete("/:id",async (req,resp)=>{
//     let data = await dbConnect();
//     let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
//     resp.send(result)

// })

// app.listen(4000)

// const mongoose = require('mongoose');
// const saveInDb = async()=>{
//     await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
//     const ProductsSchema = new mongoose.Schema({
//         name:String,
//         price:Number
//     });
//     const ProductsModel = mongoose.model('products',ProductsSchema); //model coonects nodejs with mongodb
//     let data = new ProductsModel({name:'m8',price:880});
//     let result = await data.save();
//     console.log(result)
// }
// // saveInDb()

// const updateInDb = async()=>{
//     await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
//     const ProductsSchema = new mongoose.Schema({
//         name:String,
//         price:Number
//     });
//     const ProductsModel = mongoose.model('products',ProductsSchema);
//     let data = await ProductsModel.updateOne({name:'max 3'},
//     {
//         $set:{price:700}
//     })
    
//     console.log(data);
// }
// // updateInDb()

// const deleteInDb = async()=>{
//     await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
//     const ProductsSchema = new mongoose.Schema({
//         name:String,
//         price:Number
//     });
//     const ProductsModel = mongoose.model('products',ProductsSchema);
//     let data = await ProductsModel.deleteOne({name:'max 3'})
    
//     console.log(data);
// }
// // deleteInDb()

// const findInDb = async()=>{
//     await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
//     const ProductsSchema = new mongoose.Schema({
//         name:String,
//         price:Number
//     });
//     const ProductsModel = mongoose.model('products',ProductsSchema);
//     let data = await ProductsModel.find({name:'max 2'})
    
//     console.log(data);
// }
// findInDb()





// // dynamic data with mongoose
// const express = require('express');
// require('./config');
// const Product = require('./product');
// const app = express();
// app.use(express.json())
// //post met5hod
// app.post('/create',async (req,resp)=>{
//     let data = new Product(req.body);
//     let result = await data.save();
//     console.log(req.body);
//     resp.send(req.body);
// });
// //put method
// app.get('/list',async (req,resp)=>{
//     let result = await Product.find();
//     resp.send(result);
// });

// app.delete('/delete:_id',async (req,resp)=>{
//     let data = await Product.deleteOne(req.params);
//     console.log(req.params)
//     resp.send(data);
// });

// app.put('/update/:_id',async (req,resp)=>{
//     let data = await Product.updateOne(req.params,
//         {$set:req.body});
    
//     resp.send(data);
// });
// app.listen(5578);




// //search api
// const express = require('express');
// require('./config');
// const Product = require('./product')
// const app = express();
// app.use(express.json());
// app.get('/search/:key',async(req,resp)=>{
//     let data = await Product.find(
//         //regex search to find pattern
//         {
//             "$or":[
//                 {"name":{$regex:req.params.key}},
//                 {"brand":{$regex:req.params.key}}
//             ]
// }
//     )
//     resp.send(data)
// })
// app.listen(6005);



// upload file in node js application
// const express = require('express');
// const multer = require('multer');
// const app = express();
// const uplode = multer({
//     storage:multer.diskStorage({
//         destination:function(req,file,cb){
//             cb(null,"uploads")    //call back
//         },
//         filename: function(req,file,cb){
//             cb(null,file.fieldname+"-"+Date.now()+".jpg")
//         }
//     })
// }).single("user_file");
// app.post("/upload",uplode,(req,resp)=>{
//     resp.send("file upload")
// });
// app.listen(6005);






// event and event emitter
const express = require('express');
const EventEmitter= require("events");
const app = express();
const event = new EventEmitter(); 
let count =0;
event.on("countAPI",()=>{
    count++;
    console.log(count)  //counting th eno of times api was hitted
})

app.get('/',(req,resp)=>{
    resp.send("api called");
    event.emit("countAPI");
});
app.get('/search',(req,resp)=>{
    resp.send("search api called");
});
app.get('/upload',(req,resp)=>{
    resp.send("upload api called");
});
app.listen(5000);