import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [postId, setPostId] = useState("");
  

  const addPostId = (id) => {
    setPostId(id);
  };

  useEffect(() => {
    axios("https://dummyjson.com/posts").then((response) =>
      setPosts(response.data.posts)
    );
  }, []);

  
  return (
    <BlogContext.Provider value={{ posts, addPostId }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
