const express: any = require("express");
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false })); // urlencoded form parser
app.use(bodyParser.json())  // json parser
app.use(cors());


app.get('/', (request: any, response: any) => {
    response.send("Country Search Server is running");
});

server.listen(6000, function(){
    console.log("Started Decagon Test (take home test)");
});

module.exports = app;