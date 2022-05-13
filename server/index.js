const cors = require("cors");
const mongoose = require('mongoose');
const express = require('express');
const routes = require("./Routes/routes");
const app = express();
// const PORT = 4000;
const uri = "mongodb://localhost:27017/logUser";
app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//     console.log("$$$$$$$$$$$$$$$$$")
//     res.send("Success")
// });
mongoose.connect(uri, {useNewUrlParser: true});

var conn = mongoose.connection;
conn.on('connected', function () {
    console.log('database is connected successfully');
});
conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
});
conn.on('error', console.error.bind(console, 'connection error:'));

app.use("/api", routes);

app.listen(4041, () => console.log(`Server Running on port: http://localhost:4041`));