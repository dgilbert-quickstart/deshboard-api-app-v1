const express = require("express");  
const cors = require("cors");  
const app = express();  

//cors allow access to same site or other localhost 
app.use(cors()) 

//localhost port range - 3000 - 9999
const SERVER_PORT = 8080; 

app.get("/", (req,res) => {
    const _msg = "# Demo node express api 1.0.0";
    console.log(_msg)
    res.send(_msg)
});

app.get("/about", (req,res) => {
    const _msg = "# Demo node express api 1.0.0 - about route";
    console.log(_msg)
    res.send(_msg)
});

app.get("/test1", (req,res) => {
    const _msg = "# Demo node express api 1.0.0 - test1 route";
    console.log(_msg)
    res.send(_msg)
});

app.get("/login/:username/:password", (req, res) => {

    const _username = req.params.username;
    const _password = req.params.password;

    let _msg = `# login route, username: ${_username}, password: ${_password}`;
    console.log(_msg);

     let _data = {};

     //validate login in database 

     _msg = "* login successful";
    _data = { msg: _msg, login: true };

    //return json result 
    res.send(_data);
});

//-other - POST, DELETE, PUT

//-start node exporess web server - ie: live server
app.listen(SERVER_PORT, ()=>{
    let _msg = "node express websever running at port: " + SERVER_PORT;
    console.log(_msg);
})

