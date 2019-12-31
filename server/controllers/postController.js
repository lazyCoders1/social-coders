module.exports = {
  getAllPosts: async (req, res) => {
    const db = req.app.get("db");
    const posts = await db.get_all_posts();
    res.status(200).send(posts);
  },
  getPosts: async (req, res) => {
    const db = req.app.get("db");
    const { category } = req.params;
    const posts = await db.get_posts(category);
    res.status(200).send(posts);
  },
  searchPost: async (req, res) => {
    const db = req.app.get("db");
    const { search } = req.body;
    const posts = await db.search_posts(search);
    res.status(200).send(posts);
  },
  getOnePost: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const post = await db.get_post(id);
    res.status(200).send(post[0]);
  },
  getUsersPosts: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const posts = await db.get_users_posts(id);
    res.status(200).send(posts);
  },
  addPost: (req, res) => {
    const db = req.app.get("db");
    const { title, img, content, author_id, category } = req.body;
    db.add_post({ title, img, content, author_id, category });
    res.status(201).send({ message: "Posted." });
  },
  deletePost: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_post(id);
    res.status(200).send({ message: "Deleted." });
  },
  updatePost: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { title, content, img } = req.body;
    db.update_post({ id, title, content, img });
    res.status(202).send({ message: "Changes Saved." });
  },
  addLike: async (req, res) => {
    // console.log('favorite hit')
    const db = req.app.get("db");
    const { post_id, user_id } = req.body;
    await db.add_like({ user_id, post_id });
    res.status(202).send({ message: "Liked." });
  },
  deleteLike: async (req, res) => {
    // console.log('favorite hit')
    const db = req.app.get("db");
    const { post_id, user_id } = req.body;
    await db.delete_like({ user_id, post_id });
    res.status(202).send({ message: "Unliked." });
  },
  getLikes: async (req, res) => {
    const db = req.app.get("db");
    const { post_id } = req.params;
    const likes = await db.get_likes(post_id);
    res.status(200).send(likes);
  }
};
