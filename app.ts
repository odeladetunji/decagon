const express: any = require("express");
const axios: any = require("axios").default;
const app: any = express();
const server: any = require('http').Server(app);
const cors: any = require('cors');
const path: any = require('path');
const bodyParser: any = require('body-parser');
const validation = require('./validation');
const jwt: any = require('jsonwebtoken');
const cryptograph: any = require("crypto");
const localstore: any = require('localStorage');

require('dotenv').config();


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.urlencoded({ extended: false })); // urlencoded form parser
app.use(bodyParser.json())  // json parser
app.use(cors());

app.get('/fetchToken', cors(corsOptions), (request: any, response: any) => {
    let identity: String = cryptograph.randomBytes(20).toString('hex');
    let generatedToken = jwt.sign(identity, process.env.ACCESS_TOKEN_KEY);
    localstore.setItem(generatedToken, 5)
    return response.send(generatedToken);
});

app.get("/verifyToken", validation.validateToken, (request: any, response: any) => {
    return response.send("Your Token has expired, please get a new token");
})

app.get('/search/country', cors(corsOptions), validation.validateToken, (request: any, response: any) => {


    let url: String = "http://api.countrylayer.com/v2/name/" + 
    request.query.name
    + "?access_key=9efea193d4e7ef36b3ab72a550e3a0d7";

    axios.get(url)
      .then((resp: any) => {
          return response.send(resp.data);
      })
      .catch((error: any) => {
          console.log("Error processing request");
          return response.send([])
      });

    // return response.send([])
    //   return response.send("Country Search Server is running");
});



server.listen(7000, function(){
    console.log("Started Decagon Test (take home test)");
});

module.exports = app;