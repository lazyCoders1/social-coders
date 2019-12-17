module.exports = {
  getComments: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const comments = await db.get_comments(id);
    res.status(200).send(comments);
  },
  addComment: (req, res) => {
    const db = req.app.get("db");
    const { id: post_id } = req.params;
    const { content, author_id } = req.body;
    const comment = db.add_comment({ post_id, content, author_id });
    res.status(200).send(comment);
  },
  deleteComment: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_comment(id);
    res.status(200).send({ message: "Deleted." });
  },
  updateComment: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { content } = req.body;
    const comment = db.update_comment({ id, content });
    res.status(200).send(comment);
  }
};
