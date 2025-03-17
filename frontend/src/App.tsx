import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Blog } from "./pages/Blog";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Profile } from "./pages/Profile"
import { WriteBlog } from "./pages/WriteBlog";
import { Article } from "./components/Article";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/article" element={<Article />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/new-story" element={<WriteBlog />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
