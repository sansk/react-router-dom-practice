import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home.page";
import { About } from "./pages/About.page";
import { Contact } from "./pages/Contact.page";
import { Blog } from "./pages/Blog/Blog.page";
import { SingleBlogPost } from "./pages/Blog/SingleBlogPost.page";

export const App = () => {
  return (
    <>
      <main>
        <header>
          <Link to="/">MY BLOG</Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Individual Blog Post pages */}
          <Route path="/blog/:id" element={<SingleBlogPost />} />
        </Routes>
      </main>
    </>
  );
};
