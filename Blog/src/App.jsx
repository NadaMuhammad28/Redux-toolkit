import "./App.css";
import PostList from "./components/posts/PostList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from "./components/posts/addPost";
import Navbar from "./components/navbar";
function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<PostList />} />
          <Route path="add" element={<AddPost />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
