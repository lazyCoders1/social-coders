module.exports = {
  getAllPosts: async (req, res) => {
    const db = req.app.get('db')
    const posts = await db.get_posts()
    res.status(200).send(posts)
  },
  getOnePost: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const post = await db.get_post(id)
    res.status(200).send(post)
  },
  getUsersPosts: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const posts = await db.get_users_posts(id)
    res.status(200).send(posts)
  },
  addPost: (req, res) => {
    const db = req.app.get('db')
    const { title, img, content, author_id } = req.body
    db.add_post({ title, img, content, author_id })
    res.status(201).send({ message: 'Posted.' })
  },
  deletePost: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    db.delete_post(id)
    res.status(200).send({ message: 'Deleted.' })
  },
  updatePost: (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    const { title, content, img } = req.body
    db.update_post({ id, title, content, img })
    res.status(202).send({ message: 'Changes Saved.' })
  }
}