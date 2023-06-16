// const app = require('./app')
// console.log(app.z(app.x,app.y));
// const arr = [1,2,4,6,8,3]
// let ans = arr.filter((item)=>{
//     return item>=3
// })
// console.log(ans)
  

// create local server
// const http = require('http')
// http.createServer((req,resp)=>{
//     resp.write("hello i am a shruti");
//     resp.end();
// }).listen(4500);

// creating json file
// const color = require("colors");
// console.log("hello".red);

// api header and body
// const http = require('http');
// const data = require('./app')
// http.createServer((req,response)=>{
//     response.writeHead(200,{'Content-Type':'application\json'});
//     response.write(JSON.stringify(data));
//     response.end();
// }).listen(4500);

// display file list from folders
const fs = require('fs');
const path = require('path'); 
const dirpath = path.join(__dirname,'files'); //return path
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","a simple txt file"+i);
// }

//read file
// fs.readdir(dirpath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log("file name is",item)
//     })
// })


//curd file
// const fs = require('fs');
// const path = require('path');
// const dirPath= path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'this is a simple file');
// fs.readFile(filePath,'utf8',(err,item)=>{
// console.log(item);
// })
// fs.appendFile(filePath,' for fruits',(err)=>{
// if(!err) console.log("file is updated")
// })
// fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
// if(!err) console.log("file name is updated")
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`);



//to avoid drawback of async behaviour of node js use promise function
// let a=20; 
// let b=0;
// let datawaiting = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })

// datawaiting.then((b)=>{
//     console.log(a+b)
// })

// const express = require('express');
// const app = express();

// app.get("", (req, resp) => {
//     console.log(req.query.name)
//     resp.send("Welcome,"+req.query.name);
// });

// app.get("/about", (req, resp) => {
//     resp.send("Welcome, This is a About Page");
// });

// app.get("/help", (req, resp) => {
//     resp.send("Welcome, This is a Help Page");
// });


// app.listen(5000);




// const express = require('express');
// const app = express();
// app.get('',(req,resp)=>{
//     resp.send('hello,this is home page');
// });
// app.listen(5000);

// introducing html and link pages and accept user request
// const express = require('express');
// const app = express();
// app.get('',(req,resp)=>{
//     resp.send(`<h1>hello,this is home page</h1>\n
//     <input type="text" placeolder="username" value="${req.query.name}"/>
//     <a href='/about'>Go to about vala page</a>`);
// });
// app.get('/about',(req,resp)=>{
//     resp.send(`welcom eto about us page\n<a href='/'>Go to about vala page</a>`);
// });
// app.get('/help',(req,resp)=>{
//     resp.send('welcome to help  page');
// });
// app.listen(5000);


// loading html folder 
// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath));

// app.listen(5000);




// removing extension from url and providing 404 error
// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath=path.join(__dirname,'public')

// // app.use(express.static(publicPath));
// app.get('',(req,resp)=>{
//     resp.sendFile(`${publicPath}/index.html`);
// });
// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`);
// });
// app.get('/help',(req,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`);
// });
// app.get('*',(req,resp)=>{
//     resp.sendFile(`${publicPath}/error.html`);
// });

// app.listen(5000);



// ejs (vdo 24 to add common header)
// const express = require('express');
// const app = express();
// app.set('view engine','ejs');
// app.get('/',(req,resp)=>{
//     const user={
//         name : 'anil siddhu',
//         email : 'anil@gmail.com',
//         city: 'kerela',
//         skills : ['php','java','python','larvel','go lang']
//     }
//     resp.render(`profile1`,{user});
// });
// app.listen(5000);





//Application level middleare
// //middleware : used to access and modify request and response. It may be
// //used if we want to check user login or block site in any country
// const express = require('express');
// const app = express();
// //make middleware
// const reqfilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("please provide age")
//     }
//     else if(req.query.age < 18){
//         resp.send("you are not allowed to acces this page")
//     }
//     else{
//         next();
//     }
// }
// //use middleware
// app.use(reqfilter)

// app.get('/',(req,resp)=>{
//     resp.send(`this is home page`)
// })

// app.get('/about',(req,resp)=>{
//     resp.send('this is about page')
// });
// app.listen(5000);






// const express = require('express');
// const app = express();
// //make middleware
// const reqfilter = (req,resp,next)=>{
//     if(!req.query.age){
//         resp.send("please provide age")
//     }
//     else if(req.query.age < 18){
//         resp.send("you are not allowed to acces this page")
//     }
//     else{
//         next();
//     }
// }


// app.get('/',(req,resp)=>{
//     resp.send(`this is home page`)
// })
// use middleware in specific route
// app.get('/about',reqfilter,(req,resp)=>{    
//     resp.send('this is about page')
// });
// app.listen(5000);







// // storing middle ware in seperate file and applying middleware on group of route
// const express = require('express');
// const app = express();
// const reqfilter = require('./middleware')
//  app.get('',(req,resp)=>{
//     resp.send(`Hello home page`)
//  });
//  app.get('/user',(req,resp)=>{
//     resp.send(`Hello user page`)
//  });
//  app.get('/about',reqfilter,(req,resp)=>{
//     resp.send(`Hello about page`)
//  });
//  app.get('/help',(req,resp)=>{
//     resp.send(`Hello help page`)
//  });
// //applyong on group
// const route = express.Router();
// route.use(reqfilter);
// route.get('/images',(req,resp)=>{
//     resp.send(`Hello images page`)
//  });
//  route.get('/contact',(req,resp)=>{
//     resp.send(`Hello contact page`)
//  });
// app.use('/',route);
// app.listen(5000);




// connect mongodb with node
// const {MongoClient} = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// const database ='e-comm'
// const client= new MongoClient(url);

// async function getData(){
//    let result = await client.connect();
//    let db = result.db(database);
//    let collection = db.collection('products');
//    let response = await collection.find({}).toArray();
//    console.log(response);
// }
// getData();



// connect mongodb with node using different file
const dbConnect = require('./mongodb')
// dbConnect.then((resp)=>{
//    resp.find().toArray().then((data)=>{
//       console.log(data)
//    })
// })
const main = async()=>{
   let data = await dbConnect();
   result = await data.find({}).toArray();
   console.log(result);
}
main();