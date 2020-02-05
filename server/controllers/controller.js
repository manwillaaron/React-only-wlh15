module.exports = {
  async getPosts(req, res) {
    const db = req.app.get('db');
    const posts = await db.get_posts();
    res.status(200).send(posts);
  },
  async addPost(req, res) {
    const db = req.app.get('db')
    const { title, content, img, name } = req.body;
    const posts = await db.add_post({title, content, img, name});
    res.status(200).send(posts);
  },
  async editPost(req, res) {
    const { title, img, content, name } = req.body;
    console.log(req.params);
    
    const { id } = req.params;
    const db = req.app.get('db');
    const posts = await db.edit_post({ title, img, content, name, id: +id });
    res.status(200).send(posts);
  },
  async deletePost(req, res) {
    const { id } = req.params;
    const db = req.app.get('db');
    await db.query(`delete from posts where id=${+id};`);
    res.sendStatus(200);
  }
};
