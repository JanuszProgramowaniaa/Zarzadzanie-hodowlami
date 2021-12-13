const User = require("../../models/user");

class UserActions {
  async getAllUsers(req, res) {
    const doc = await User.find({});

    res.status(200).json(doc);
  }

  async getUser(req, res) {
    const Login = req.params.Login;
    const user = await User.findOne({ Login: Login });

    res.status(200).json(user);
  }
  async saveUser(req, res) {
    const Name = req.body.Name;
    const Surname = req.body.Surname;
    const Login = req.body.Login;
    const Password = req.body.Password;

    let user;
    try {
      user = new User({ Name, Surname, Login, Password });
      await user.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(200).json(user);
  }

  async updateUser(req, res) {
    const findLogin = req.params.Login;
    const Login = req.body.Login;
    const Name = req.body.Name;
    const Surname = req.body.Surname;
    const Password = req.body.Password;

    const user = await User.findOne({ Login: findLogin });

    user.Login = Login;
    user.Name = Name;
    user.Surname = Surname;
    user.Password = Password;

    await user.save();

    res.status(201).json(user);
  }

  async deleteUser(req, res) {
    const Login = req.params.Login;
    await User.deleteOne({ Login: Login });

    res.sendStatus(204);
  }
}

module.exports = new UserActions();
