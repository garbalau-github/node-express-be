import Post from './Post.js';

class PostService {
  async create(post) {
    const createdPost = await Post.create(post);
    return createdPost;
  }
  async getOne(id) {
    if (!id) {
      throw new Error('ID not defined!');
    }
    const post = await Post.findById(id);
    return post;
  }
  async getAll() {
    const posts = await Post.find();
    return posts;
  }
  async update(post) {
    if (!post._id) {
      res.status(400).json({ message: 'ID not defined!' });
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }
  async delete(id) {
    if (!id) {
      res.status(400).json({ message: 'ID not found!' });
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
