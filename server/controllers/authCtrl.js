const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { email, password, name } = req.body;
    const found = await db.find_user([email]);
    if (+found[0].count !== 0) {
      return res.status(409).send({ message: "Email already registered." });
    }
    const id = await db.add_user({ name, email });
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    db.add_hash({ hash, id: id[0].id });
    req.session.user = { id: id[0].id, email, name };
    res.status(201).send({
      message: `Thanks for Signing Up ${req.session.user.name}, Please sign in!`,
      user: req.session.user
    });
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { email, password } = req.body;
    const found = await db.find_user([email]);
    if (+found[0].count === 0) {
      return res.status(401).send({ message: "Email not registered." });
    }
    const foundUser = await db.find_hash([email]);
    const { hash, id, name } = foundUser[0];
    const result = bcrypt.compareSync(password, hash);
    if (!result) {
      return res.status(401).send({ message: "Password incorrect." });
    }
    req.session.user = { id, email, name };
    res
      .status(200)
      .send({
        message: `Hello ${req.session.user.name},`,
        user: req.session.user
      });
  },
  logout: (req, res) => {
    req.session.destroy();
    res.status(200).send({ message: "Logged Out." });
  },
  loggedIn: (req, res) => {
    if (req.session.user) {
      res.status(200).send({ user: req.session.user });
    } else {
      res.status(401).send({ message: "Please log in or register." });
    }
  }
};
