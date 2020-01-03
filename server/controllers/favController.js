module.exports = {
  addFavorite: async (req, res) => {
    const db = req.app.get("db");
    const { post_id, user_id } = req.body;
    await db.add_favorite({ user_id, post_id });
    res.status(202).send({ message: "Added to favorites." });
  },
  deleteFavorite: async (req, res) => {
    const db = req.app.get("db");
    const { post_id, user_id } = req.body;
    await db.delete_fav({ user_id, post_id });
    res.status(200).send({ message: "Removed from favorites." });
  },
  checkFav: async (req, res) => {
    const db = req.app.get("db");
    const { user_id, post_id } = req.body;
    const found = await db.check_fav({ user_id, post_id });
    if (+found[0].count !== 0) {
      res.status(200).send(true);
    } else {
      res.status(200).send(false);
    }
  },
  getFavorites: async (req, res) => {
    const db = req.app.get("db")
    const {id} = req.params;
    const favorites = await db.get_favorites(id)
    res.status(200).send(favorites)
  }
};
