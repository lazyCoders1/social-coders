module.exports = {
  updateProfile: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const {
      name,
      profile_pic,
      cover_photo,
      headline,
      city,
      state,
      linked_in,
      github
    } = req.body;
    db.update_profile({
      name,
      profile_pic,
      cover_photo,
      headline,
      city,
      state,
      linked_in,
      github,
      id
    });
    res.status(202).send({ message: "Profile Updated." });
  },
  getProfile: async (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const result = await db.get_profile(id);
    res.status(200).send(result);
  },
};
