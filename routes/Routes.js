const express = require("express");
const router = express.Router();

/* const LoginController = require("../../../algo/LoginController"); */
const TaskController = require("../controllers/TaskController");
/* 
router.get("/login", LoginController.createLogin);
router.post("/login", LoginController.createUser); */

/* router.get("/", LoginController.showUsers);          //rota principal   */

router.get("/add", TaskController.createTask);      //rota de criação do post
router.post("/add", TaskController.createTaskSave); //rota p/ pegar as tarefas

router.post("/remove", TaskController.removeTask);  //rota de remoção das tarefas

router.get("/edit/:id", TaskController.updateTask); //rota pra atualização das tarefas
router.post("/edit", TaskController.updateTaskPost)  

router.post("/updatestatus", TaskController.toggleTaskStatus)

router.get("/", TaskController.showTasks);          //rota principal

module.exports = router;
