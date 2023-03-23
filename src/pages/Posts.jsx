import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { ScaleLoader } from "react-spinners";

const Posts = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        if (response.data) {
          setIsSuccess("true");
          setPosts(response.data);
          setFilteredPosts(posts);
          setIsLoading(false);
        }
      })
      .catch(function (error) {
        // handle error
        setIsSuccess(false);
      });
  }, []);

  const getPosts = (data) => {
    if (!isSuccess) {
      console.log("failed");
      setIsSuccess(false);
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
          {/* Showing only first 5 words of the body */}
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
      {isLoading && (
        <div className="loading-spinner">
          <ScaleLoader
            loading={isLoading}
            color={"#36D7B7"}
            style={{
              width: "100vw",
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </div>
      )}
      {!isSuccess ? (
        <div
          style={{ textAlign: "center", height: "100%", paddingTop: "100px" }}
        >
          Sorry, We Have Encountered A Problem. <br /> Please Try Again Later Or
          Contact The Provider
        </div>
      ) : (
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
          {isSuccess && getPosts()}
        </div>
      )}
    </div>
  );
};

export default Posts;
