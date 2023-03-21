import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [isSuccess, setIsSuccess] = useState("false");
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        // console.log(response);

        if (response.data){
            setIsSuccess('true')
            setData(response.data)
        };
        
      })
      .catch(function (error) {
        // handle error
        console.log("error");
      });
  }, []);

  const getPosts = () => {
    if (!isSuccess) {
      console.log("failed");
      return;
    }

    return data.map((item) => {
      const { title, id, body } = item;
      return (
        <div
          key={id}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            textAlign: "left",
            width: "50%",
            border: "2px solid grey",
            padding: "5px",
          }}
        >
          <h2>{title}</h2>
          <p>{body}</p>
          <button
            style={{
              border: "none",
              backgroundColor: "blueviolet",
              color: "whitesmoke",
              marginLeft: "auto",
              width: "70px",
              height: "70px",
            }}
          >
          <Link to={`/posts/${id}`} state={{title,body,id}}>

            More Details
          </Link>

          </button>
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
          gap:'15px'
        }}
      >
        {data && getPosts()}
      </div>
    </div>
  );
};

export default Posts;
