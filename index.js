const express = require('express')
const app = express()
const sql = require('mysql')
const port = 4000

app.use(express.json())


const con = sql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'task1'
})

//check connection
// con.connect(function(err){
//     if(!err){
//     console.log(err)
//     console.log("Connection sucsess") 
// }
//     else
//     {
//         console.log(err)
//         console.log("No Connection")
//     }
// })

app.get('/', (req, res) => res.send('Hello World!'))

//sign up user     " + req.body.id + ",
app.post('/signup', (req, res)=>{
    console.log("Im here");
    console.log(req.body.username);
    console.log(req.body.email);
    console.log(req.body.password);

    con.connect( function(err) {
        if (!err){
        console.log("connected")
        var sqlquery = "INSERT INTO `user`(`id`, `username`, `email`, `password`) VALUES ('" + req.body.id + "', '" + req.body.username + "', '" + req.body.email + "', '" + req.body.password +"')";
        con.query(sqlquery, function (erer, result) {
            console.log("Checked")
            console.log(sqlquery)

            if (!erer){
                console.log(erer)
                console.log("table created")
            }

        })
    }
    else
        console.log("not connected")
    console.log(err)


    })
})

app.listen(port);