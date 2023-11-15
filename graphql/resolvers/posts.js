import Post from "../../models/Post.js";

const postResolver = {
  Query: {
    async getPosts() {
      try {
        const posts = await Post.find();
        return posts;
      } catch (error) {}
    },
    async getPost(_,{postId}) {
      try{
        const post = await Post.findById(postId);
        if(post){
          return post;
        }else{
          return 'Error'
        }
      } catch (error){
        throw new Error(error)
      }
    }
  },
};

export default postResolver
