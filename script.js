const express=require('express');
const path=require('path')
const port=8000;

const app=express();
// app.get('/',function(req,res){
//     res.send('<h1>heeeee it is running</h1>');
// });
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
// app.use(function(req, res, next){
//     console.log('middleware 1 called');
//     next()
// });


//middleware

app.use(express.static('assets'));

   
// app.use(function(req, res, next){    
//     console.log('middleware 2 called');
//     next();
// });
   
// app.use(function(req, res, next){    
//     console.log('middleware 3 called');
//     next();
// });

const contactList=[
    {
        name:"Shreya",
        phone:"11111111"
    },
    {
        name:"Deepak",
        phone:"888888888"
    },
    {
        name:"suraj",
        phone:"990090"
    }
]

console.log('dirname is',__dirname);

app.get('/',function(req,res){
    return res.render('home',{
        title:"contactList",
        contact_list:contactList
    });
})
app.get('/practice',function(req,res){
    return res.render('practice',{
        title:"practice",
        
    });
})

app.post('/create-contact',function(req,res){
    // contactList.push({
    //     name:req.body.name,
    //     phone:req.body.phone
    // });
    contactList.push(req.body);
    return res.redirect('back')
})

app.listen(port,function(err){
    if(err){
        console.log('Error is running on the server')
    }
    console.log('Yup! My server is running on the port',port);
})