const express=require('express');
const cors= require('cors');
const app= express();
var bodyParser= require('body-parser');
const port=8000;
var jwt= require('jsonwebtoken');
var mysql = require('mysql'); 

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test2",
    multipleStatements:true
});

con.connect(function(err) {
    if (err) {
        console.log(err);
    }else{
        console.log("DB Connected!");
    }
});

app.use(function myCors(req, res, nxt) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,OPTIONS,DELETE');
    res.header('Access-Control-Allow-Credentials','true');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Authorization, Origin, User-Agent');
    if(req.method === 'OPTIONS') {
        res.sendStatus(204);
    }
    else {
        nxt();
    }
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/users/me', checkAuthenticated, (req,res) => {
    res.json(users[req.user]);
})
app.post('/login',(req,res)=>{
    console.log('Login requested!!')
    console.log(req.body);
    let query=`SELECT * FROM users WHERE User=BINARY "${req.body.username}" and password=BINARY "${req.body.password}";`
    con.query(query, (err,result)=>{
        console.log(result,err);
        if(result.length>0 ){
            var token= jwt.sign(req.body.username,'123');
            res.status(200).json({success:true,username:req.body.username,token});
        }else{
            return res.json({success:false,message:"Email or Password is incorrect"});
        }
    });
});

//insert
app.post('/universities/add',(req,res)=>{
    console.log("Put requested");
    let query=`INSERT INTO university_details 
    (uni_name,reg_date,exp_date,img_url,students,email,web_url,contact)
    VALUES ("${req.body.uni_name}", "${req.body.reg_date}" ,"${req.body.exp_date}", "${req.body.img_url}", ${req.body.students} ,"${req.body.email}","${ req.body.web_url}",${req.body.contact})`;
    con.query(query,(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});
//update
app.post('/universities/:id',(req,res)=>{
    console.log("Update Requested");
    let query=`UPDATE university_details SET uni_name="${req.body.uni_name}",reg_date= "${req.body.reg_date}" ,exp_date= "${req.body.exp_date}" ,img_url="${req.body.img_url}",students= ${req.body.students} ,email= "${req.body.email}",web_url= "${ req.body.web_url}",contact= ${req.body.contact} WHERE uid=${req.params.id}`;
    con.query(query,(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});
//Get
app.get('/universities',(req,res)=>{
    console.log('Get requested!!')
    let query='SELECT * FROM university_details;'
    con.query(query,(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});
//get one
app.get('/universities/:id',(req,res)=>{
    let query=`SELECT * FROM university_details where uid=${req.params.id}`;
    con.query(query,(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});
//delete
app.delete('/universities/:id',(req,res)=>{
    let query=`DELETE FROM university_details WHERE uid=${req.params.id}`;
    con.query(query,(err,rows,fields)=>{
        if(!err){
            res.send({success:true});
        }else{
            console.log(err);
        }
    });
});

function checkAuthenticated(req, res, next) {
    if(!req.header('authorization'))
        return res.status(401).send({message: 'Unauthorized requested. Missing authentication header'});

    var token = req.header('authorization').split(' ')[1];

    if (token==='null'){
        return res.status(401).send({message: 'Unauthorized requested. Authentication header invalid'});
    }

    var payload = jwt.decode(token, '123');

    if(!payload)
        return res.status(401).send({message: 'Unauthorized requested. Authentication header invalid'});

    req.user = payload;

    next();
}

app.listen(port , ()=>{ console.log(`Server running on...http://localhost:${port}`)});