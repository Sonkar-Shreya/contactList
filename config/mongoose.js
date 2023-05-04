// require library
const mongoose = require('mongoose');

// connect to the datatbase
// mongoose.connect('mongodb://localhost:27017/contactList_db',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );
mongoose.connect('mongodb+srv://sonkarshreya1:d62kJPuHadRKdOWk@cluster0.ho4naly.mongodb.net/?retryWrites=true&w=majority')
// mongoose.connect('mongodb://localhost/contactList_db');

// accquire the connection for checking if it is successful or not
const db=mongoose.connection;
// if error
db.on('error', console.error.bind(console,'error connecting to db'));

// up and running  then print successfull message
db.once('open',function(){
    console.log('successfully connected to database')
});