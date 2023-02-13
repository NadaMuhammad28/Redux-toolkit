import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: 1,
    title: "hello world",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, ratione esse ullam sit sapiente nulla magni dicta provident quod deleniti nam. Fugiat itaque minima accusantium placeat magni mollitia, modi similique iusto libero possimus temporibus! Reprehenderit quaerat, est alias architecto molestias velit saepe, voluptatibus aut repellat eius deleniti! Reprehenderit, accusamus facilis.",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Disaster",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, ratione esse ullam sit sapiente nulla magni dicta provident quod deleniti nam. Fugiat itaque minima accusantium placeat magni mollitia, modi similique iusto libero possimus temporibus! Reprehenderit quaerat, est alias architecto molestias velit saepe, voluptatibus aut repellat eius deleniti! Reprehenderit, accusamus facilis.",

    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },

    reactionCount(state, action) {
      const { reactionName, postId } = action.payload;
      let post = state.find((el) => el.id === postId);
      post.reactions[reactionName] += 1;
    },
  },
});

export const allPostsSelector = (store) => store.post;

export const { addPost, reactionCount } = postSlice.actions;
export default postSlice.reducer;
