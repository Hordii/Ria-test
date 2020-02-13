const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const path = require('path')
const routes = require("./router/routes");
const cors = require("cors");
const orm = require("./db/orm")
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
