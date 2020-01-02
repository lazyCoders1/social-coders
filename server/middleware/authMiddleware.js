module.exports = {
  usersOnly: (req, res, next) => {
    if (!req.session.user) {
      return res
        .status(403)
        .send({ message: "You must be signed in to do that." });
    }
    next();
  }
};
