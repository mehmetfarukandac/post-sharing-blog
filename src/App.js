import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Routes, Route } from "react-router-dom"
import CreatePost from "./components/pages/CreatePost"
import Home from "./components/pages/Home"
import { getAllPosts } from "./services/axios"
import { postActions } from "./store/post-slice"

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllPosts().then((result) => {
      dispatch(postActions.updateState({ posts: result.message }));
    })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="createPost/:id" element={<CreatePost />} />
      </Routes>
    </div>
  )
}
export default App