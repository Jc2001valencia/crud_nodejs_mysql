const express= require('express');
const morgan = require('morgan');
const app = express();
const path=require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');


//import routes
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');




// settings


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'crud_js'
},'single'));
app.use(express.urlencoded({
    extended:false
}));

//routes

app.use('/',customerRoutes);


//static files

app.use(express.static(path.join(__dirname,'public')));


//Starting server 

app.listen(app.get('port'),()=>{

console.log('server on por 3000')
});

