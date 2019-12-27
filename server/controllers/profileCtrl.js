module.exports = {
  updateProfile: (req, res) => {
    // console.log('update hit')
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
    // console.log('get profile hit')
    const db = req.app.get("db");
    const { id } = req.params;
    const result = await db.get_profile(id);
    res.status(200).send(result);
    // console.log(result)
    // console.log(req.session.sc_user.id)
  },
  addFavorite: async (req, res) => {
    // console.log('favorite hit')
    const db = req.app.get("db");
    const { id: user_id } = req.params;
    const { post_id } = req.body;
    const check = await db.check_fav({ user_id, post_id });
    if (+check[0].count !== 0) {
      return res.status(409).send({ message: "Already in favorites." });
    }
    await db.add_favorite({ user_id, post_id });
    res.status(202).send({ message: "Added to favorites." });
  }
};
