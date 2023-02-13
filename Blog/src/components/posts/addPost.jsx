import { useState } from "react";
import { addPost } from "../../features/post/postSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { nanoid } from "@reduxjs/toolkit";
const reactions = {
  thumbsUp: 0,
  wow: 0,
  heart: 0,
  rocket: 0,
  coffee: 0,
};
const AddPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState({ id: nanoid(), title: "", content: "" });
  console.log(post);
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    if (post) {
      dispatch(addPost({ ...post, reactions }));
    }

    navigate("/");
  };

  return (
    <section className="main-wrapper">
      <form onSubmit={handleSubmit} className="d-flex-col add-form">
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={(e) => {
            setPost({ ...post, title: e.target.value });
          }}
        />
        <textarea
          name="content"
          value={post.content}
          onChange={(e) => {
            setPost({ ...post, content: e.target.value });
          }}
        />
        <button type="submit" disabled={!(post.title && post.content)}>
          {" "}
          ADD
        </button>
      </form>
    </section>
  );
};

export default AddPost;
