import { Route, Routes } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import Posts from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Posts/>} path='/'/>
        <Route element={<PostDetail/>} path='/posts/:id'/>
      </Routes>
    </div>
  );
}

export default App;
