const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require("./routes/user");
const app = express();
const port = 5000;

//Connect with Database.



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true})); // search...



//create Get API.

    app.use(user);

// Connect with Server
app.listen(port, () => {
    console.log("server is running on port 5000");
 });
