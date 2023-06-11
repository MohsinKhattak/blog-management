import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import ViewBlogs from "./ViewBlogs";
import ViewBlog from "./ViewBlog";
import PostBlog from "./PostBlog";

function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/blogs" element={<ViewBlogs />} />
        <Route path="/addBlog" element={<PostBlog />} />
        <Route path="/blogs/:id" element={<ViewBlog />} />
      </Routes>
    </>
  );
}

export default Layout;
