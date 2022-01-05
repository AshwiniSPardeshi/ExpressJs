const express = require("express");
const app = express();


// http://localhost:4000/users


// req object have all information = when frontend making an request it provides 
// req = read info
// res = send infomation 
app.get("/users", (req, res) => {
    let obj = {message: "Hello Wolrd"};
    res.json(obj);
});

app.listen(4000, () => console.log("Server starte"));
