import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Posts = () => {
  const [isSuccess, setIsSuccess] = useState("false");
  const [posts, setPosts] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        // console.log(response);

        if (response.data) {
          setIsSuccess("true");
          setPosts(response.data);
          setFilteredPosts(posts);
        }
      })
      .catch(function (error) {
        // handle error
        console.log("error");
      });
  }, []);

  const getPosts = (data) => {
    if (!isSuccess) {
      console.log("failed");
      return;
    }
    filteredPosts ? (data = filteredPosts) : (data = posts);
    return data.map((item) => {
      const { title, id, body } = item;
      return (
        <div
          key={id}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            textAlign: "left",
            width: "50%",
            border: "2px solid #cbafe6",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          <h4>{title}</h4>
          <p>{`${body.split(" ").slice(0, 5).join(" ")} ...`}</p>

          <Link
            to={`/posts/${id}`}
            state={{ title, body, id }}
            style={{ marginLeft: "auto" }}
          >
            <button
              style={{
                border: "none",
                backgroundColor: "blueviolet",
                color: "whitesmoke",
                width: "10vw",
                height: "5vh",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              More Details
            </button>
          </Link>
        </div>
      );
    });
  };
  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "left",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1px",
        }}
      >
        <Search posts={posts} getFilteredPosts={setFilteredPosts} />
        {posts && getPosts()}
      </div>
    </div>
  );
};

export default Posts;
