import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Comments = ({ id }) => {
  const [fetchedComments, setFetchedComments] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(function (response) {
        // handle success

        if (response.data) {
          setFetchedComments(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log("error");
      });
  }, [id]);
  const getComments = () => {
    if (!fetchedComments) {
      return;
    }
    return fetchedComments.map((item, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          textAlign: "left",
          width: "50%",
          justifyContent:'flex-start',
          padding: "15px",
          borderTop:'1px solid grey',
          
          
        }}
      >
        <div style={{width:'30%', display:'flex',flexDirection:'column', justifyContent:'center'}}>
        <h6 style={{fontSize:'10px', textDecoration:'underline',wordWrap:'break-word'}}>{item.email}</h6>

        <h4 >{item.name}</h4>
        </div>
        
        <div style={{borderLeft:'1px solid grey' }}></div>
        <p style={{flex: '1 1 0', color:'#a14747'}} >{item.body}</p>
      </div>
    ));
  };
  return <div>
    {fetchedComments? getComments() : (
        <div>
            No Comments To Display Yet
        </div>
    )}
    </div>;
};

export default Comments;
