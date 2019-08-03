const express = require("express");
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use('/random', require("./routes/index"));

app.listen(port, function () {
    console.log("Server listening on " + port)
})
