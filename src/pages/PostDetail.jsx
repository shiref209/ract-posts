import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../components/Comments";

const PostDetail = () => {
  const location = useLocation();
  const { title, body, id } = location.state;
  const [isSuccess, setIsSuccess] = useState("false");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        textAlign: "center",
        //   width: "50%",
        border: "2px solid grey",
        padding: "10%",
      }}
    >
      <Link to={"/"} style={{ marginLeft: "auto" }}>
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
          Back
        </button>
      </Link>
      <h2>{title}</h2>
      <p style={{ fontWeight: "500", fontSize: "25px", lineHeight: "3" }}>
        {body}
      </p>
          <div style={{position:'relative'}}>
        <h4 style={{position:'absolute', top:'-25px', margin:'0'}}>Comments</h4>
        <Comments id={id} />

          </div>
    </div>
  );
};

export default PostDetail;
