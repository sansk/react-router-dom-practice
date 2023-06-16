import { Link } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";

export const Blog = () => {
  const { posts } = useBlogContext();

  return (
    <section className="section-blog">
      <h1>My Blog Posts</h1>
      <div className="blog-post-list">
        {posts ? (
          posts.map((post) => {
            return (
              <div key={post.id} className="blog-post-card">
                <Link to={`/blog/${post.id}`}>
                  <h1>{post.title}</h1>
                  <p className="list-body">{post.body}</p>
                  <button className="btn">Read More</button>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </section>
  );
};
