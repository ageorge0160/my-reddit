class PostApi {
  static getAllPosts() {
    return
      fetch('http://localhost:4000/api/v1/posts').then(res => {
        return res.json();
      }).catch(error => {return error})
  }
}
export default PostApi
