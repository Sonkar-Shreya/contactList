const express=require('express');
const path=require('path')
const port=8000;

const db=require('./config/mongoose')
const Contact = require('./models/contact')
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
        name:"person1",
        phone:"11111111"
    },
    {
        name:"person2",
        phone:"888888888"
    },
    {
        name:"person3",
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

    // contactList.push(req.body);
    // return res.redirect('back')

    //now using database
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    })
    // },function(err,newContact){
    //     if(err){
    //         console.log('error in creating a contact');
    //         return res.redirect('back');
    //     }
    //     console.log('*******', newContact);
    //     return res.redirect('back');
    // });
        return res.redirect('back');

});
// app.get('/deleteContact/:phone',function(req,res){
//     console.log(req.params);
//     let phone=req.params.phone;
// })
app.get('/deleteContact/', function(req, res){
    let phone=req.query.phone;
    let contactIndex=contactList.findIndex(contact=> contact.phone==phone);
    if(contactIndex!=-1){
        contactList.splice(contactIndex,1)
    }
    console.log(contactIndex);
    console.log(req.query.name);
    return res.redirect('back');
})

app.listen(port,function(err){
    if(err){
        console.log('Error is running on the server')
    }
    console.log('Yup! My server is running on the port',port);
})