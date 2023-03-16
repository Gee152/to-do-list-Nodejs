const Tags = require("../models/Tags");

//criando controllers
class LoginController {
  //criação dados
  static createLogin(req, res) {
    res.render("/login/create");
  }

  static async createUser(req, res) {
    const usersCreate = {
      name: req.body.name,
      password: req.body.password,
    };

    await Login.create(usersCreate);
    res.redirect("/login");
  }

  static async showUsers(req, res) {
    const use = await use.findAll({ raw: true})
    res.redirect("/tasks")
  }
}

module.exports = LoginController;
