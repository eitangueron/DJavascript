const express = require("express");
const path = require("path");
const app = express();
const api = require(`./server/routes/api`)
const bodyParser = require(`body-parser`)
const mongoose = require(`mongoose`)

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/motionDJing-app`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, `dist`)))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(`/`, api)

const PORT = 3000;
app.listen(process.env.PORT || PORT, () => console.log(`Server is running on port ${PORT}`));