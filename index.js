const express = require("express"); //importando express
const exphbs = require("express-handlebars"); //importando handlebars

const app = express(); //Exec express

const conn = require("./db/conn"); //db

const Tasks = require("./models/Tasks");  //importando models
const User = require("./models/User");    //importando models

const Routes = require("./routes/Routes"); //importando routa

app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json()); //json

app.use(express.static("public")); //public

app.use("/tasks",Routes); //chamando rotas
/* app.use("/login",Routes); //chamando rotas */


conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
