// const http=require('http')

// const server = http.createServer(function(req, res)
// {
//     res.writeHead(200,{
//         "content-Type":"text/plain"
//     });
//     res.end("hello abd kader\n");
// })

// server.listen(4000,()=>{
//     console.log("server started on port 4000");
// })


const express = require("express");
const mongoose = require("mongoose");
const ExoRoute = require("./routes/Exo.routes");
const Student = require('./Routes/Student.routes')
const cors = require('cors')
const app = express();
app.get("/", function (req, res) {
  res.send("hello world");
});
app.use(cors())
app.get("/Home", function (req, res) {
  res.send("hello home");
});

app.get("/home/contact", function (req, res) {
  res.send(" contact us");
});
app.use(express.json());
app.use("/api/student", Student);
app.use("/api/exo", ExoRoute);


//conecction to database
mongoose
  .connect("mongodb://localhost:27017/exo-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" connected to database successfully");
  })
  .catch((err) => {
    console.log("error occurred while connecting to database " + err);
  });

app.listen(4000, () => {
  console.log("server started on port 4000 with nodemon");
});

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log("connected to database");
// }
// );
