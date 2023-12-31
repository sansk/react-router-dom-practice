import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home.page";
import { About } from "./pages/About.page";
import { Contact } from "./pages/Contact.page";
import { Blog } from "./pages/Blog/Blog.page";
import { SingleBlogPost } from "./pages/Blog/SingleBlogPost.page";
import { Layout } from "./components/Layout.component";
import { Products } from "./pages/Products/Products.pages";
import { SingleProduct } from "./pages/Products/SingleProduct.pages";
import { SingleProductInfo } from "./pages/Products/SingleProductInfo.page";
import { SingleProductDetail } from "./pages/Products/SingleProductDetail.page";
import { SingleProductImage } from "./pages/Products/SingleProductImage.page";
import { Brand } from "./pages/Brand/Brand.page";
import { Error } from "./pages/Error.page";
import { Login } from "./pages/Login.page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      {/* Individual Blog Post pages */}
      <Route path="blog/:id" element={<SingleBlogPost />} />

      <Route path="product" element={<Products />} />
      <Route path="product/:id" element={<SingleProduct />}>
        <Route index element={<SingleProductInfo />} />
        <Route path="detail" element={<SingleProductDetail />} />
        <Route path="images" element={<SingleProductImage />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="brand" element={<Brand />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

export const App = () => {
  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>
    </>
  );
};
