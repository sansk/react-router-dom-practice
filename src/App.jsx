import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home.page";
import { About } from "./pages/About.page";
import { Contact } from "./pages/Contact.page";
import { Blog } from "./pages/Blog/Blog.page";
import { SingleBlogPost } from "./pages/Blog/SingleBlogPost.page";
import { Layout } from "./components/Layout.component";
import { Products } from "./pages/Products/Products.pages";

export const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            {/* Individual Blog Post pages */}
            <Route path="blog/:id" element={<SingleBlogPost />} />

            <Route path="product" element={<Products />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};
