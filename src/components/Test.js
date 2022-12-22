import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Test() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("component ilk defa render oldu!");

    let interval = setInterval(() => {
      console.log("interval çalıştı!");
    }, 2000);

    // When component destroy
    return () => {
      console.warn("component destroyed");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(`postId değeri değişti: ${postId}`);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  /*useEffect(() => {
    console.log("component render oldu!");
  });*/

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      {!post && <>(Component Lifecycle)</>}
      {post && (
        <>
          {post.title && <h1>{post.title}</h1>}
          {post.body && <p className="post-body">{post.body}</p>}
        </>
      )}
      <br />
      <br />
      <div>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => setPostId((count) => count - 1)}
          disabled={postId === 1}
        >
          <span className="span-counter">
            {<MdKeyboardArrowLeft size={20} />}
          </span>
        </Button>
        <span
          style={{
            padding: "0 12px",
            minWidth: "65px",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          {postId}
        </span>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => setPostId((count) => count + 1)}
        >
          <span className="span-counter">
            {<MdKeyboardArrowRight size={20} />}
          </span>
        </Button>
      </div>
    </div>
  );
}
