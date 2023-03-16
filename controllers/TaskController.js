const Task = require("../models/Tasks");

  //criando controllers
class TaskController {
  //criação dados
  static createTask(req, res) {
    res.render("tasks/create");
  }

  static async createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      status: false,
      nome: req.body.nome
    };  

    await Task.create(task);
    res.redirect("/tasks");
  }
  //visualizar view
  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });
    res.render("tasks/all", { tasks });
  }
  //atualização
  static async updateTask(req, res) {
    const id = req.params.id;
    const task = await Task.findOne({ where: { id: id }, raw: true });
    res.render("tasks/edit", { task });
  }

  static async updateTaskPost(req, res) {
    const id = req.body.id;
    const task = {
      title: req.body.title,
      description: req.body.description,
      nome: req.body.nome
    };
    await Task.update(task, { where: { id: id } });
    res.redirect("/tasks");
  }
  //removendo
  static async removeTask(req, res) {
    const id = req.body.id;
    await Task.destroy({ where: { id: id } });
    res.redirect("/tasks");
  }

  //toggles in tasks
  static async toggleTaskStatus(req, res) {
    const id = req.body.id
    const task = {
      status: req.body.status === 'true' ? false : true
    }
    await Task.update(task, {where: {id: id}})
    res.redirect("/tasks")
  }
}

module.exports = TaskController;
