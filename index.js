const express = require("express");  // bindet das express-modul ein
const app = express();               // erstelle express-model mit Name "app"

const port = 3443;                   // Server-Port auf 3443 festgelegt

const bodyParser = require("body-parser");      // body-parser Modul eingebunden

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () =>{                         // Hört auf Port
    console.log("server gestartet");            
})

app.post("/TempSensor", function (request, response) {
    console.log(request.body);
    let temp = request.body.temperatur;
    let feucht = request.body.feuchtigkeit;
    console.log(temp);
    console.log(feucht);
    response.sendStatus(200);
})