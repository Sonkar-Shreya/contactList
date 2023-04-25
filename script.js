const express=require('express');
const path=require('path')
const port=8000;

const app=express();
// app.get('/',function(req,res){
//     res.send('<h1>heeeee it is running</h1>');
// });
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

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
app.listen(port,function(err){
    if(err){
        console.log('Error is running on the server')
    }
    console.log('Yup! My server is running on the port',port);
})