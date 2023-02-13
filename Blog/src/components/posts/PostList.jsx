import { useSelector } from "react-redux";
import { allPostsSelector } from "../../features/post/postSlice";
import Post from "./post";

const PostList = () => {
  const posts = useSelector(allPostsSelector);
  console.log(posts);
  return (
    <section className="main-wrapper">
      <h1>POSTS</h1>
      {posts && posts.map((post) => <Post {...post} key={post.id} />)}
    </section>
  );
};

export default PostList;
