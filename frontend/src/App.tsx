import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { Blog } from "./pages/Blog";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/alert" element={<Header />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
