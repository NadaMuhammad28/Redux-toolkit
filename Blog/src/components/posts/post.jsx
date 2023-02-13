import Reactions from "../reactions";

const Post = ({ id, title, content, reactions }) => {
  console.log(reactions);
  return (
    <article key={id}>
      <h2>{title}</h2>
      <p>{content.substring(0, 50)}...</p>

      <Reactions reactions={reactions} id={id} />
    </article>
  );
};

export default Post;
