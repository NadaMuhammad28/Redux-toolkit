import { useDispatch } from "react-redux";
import { reactionCount } from "../features/post/postSlice";
const Reactions = ({ reactions, id }) => {
  const dispatch = useDispatch();
  const emojis = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
  };
  const handleReaction = (reactionName, postId) => {
    dispatch(reactionCount({ reactionName, postId }));
  };
  return (
    <div className="d-flex">
      {Object.entries(emojis).map(([name, emoji]) => {
        return (
          <button
            name={name}
            onClick={(e) => handleReaction(e.target.name, id)}
          >
            {emoji} {reactions[name]}
          </button>
        );
      })}
    </div>
  );
};

export default Reactions;
