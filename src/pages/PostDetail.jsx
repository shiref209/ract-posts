import React from 'react';
import { useLocation,Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostDetail = () => {
    const location=useLocation();
    const {title,body,id}=location.state;
    const [isSuccess, setIsSuccess] = useState("false");
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then(function (response) {
            // handle success
            console.log(response);
    
            if (response.data){
                setIsSuccess('true')
                setData(response.data)
            };
            
          })
          .catch(function (error) {
            // handle error
            console.log("error");
          });
        },[id])
  return (
    <div
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
    <Link to={'/'}>

      Back
    </Link>

    </button>
  </div>

  )
}

export default PostDetail