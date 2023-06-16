import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";

import { useState } from "react";
import axios from "axios";

export const SingleBlogPost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const params = useParams();

  useEffect(() => {
    const url = `https://dummyjson.com/posts/${params.id}`;
    console.log({ url });
    axios(url).then((response) => setSinglePost(response.data));
  }, []);

  console.log("In Single Post: ", singlePost);

  return (
    <section className="blog-single-post">
      {singlePost ? (
        <>
          <h1>{singlePost.title}</h1>
          <p>{singlePost.body}</p>
          <p>Tags: </p>
          <span>{singlePost.tags.join(", ")}</span>
          <p>User ID: </p> <span>{singlePost.userId}</span>
          <p>Reactions: </p>
          <span>{singlePost.reactions}</span>
        </>
      ) : (
        <div className="loading"></div>
      )}
    </section>
  );
};
