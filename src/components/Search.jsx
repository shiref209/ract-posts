import React from "react";
import {  useRef } from "react";

const Search = ({ posts, getFilteredPosts }) => {
  const searchInputRef = useRef(null);
  let timeoutId = null;
  const handleSearch = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      const searchTerm = searchInputRef.current.value;
      const filteredPosts = () => {
        return posts.filter((item) => item.title.includes(searchTerm.toLowerCase().trim('')));
      };
      getFilteredPosts(filteredPosts);
      !searchTerm && getFilteredPosts(null);
    }, 500);
  };
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        style={{
          border: "2px solid #cbafe6",
          padding: "5px",
          borderRadius: "5px",
        }}
        type="text"
        ref={searchInputRef}
        onChange={handleSearch}
        placeholder="Enter Your Search Here"
      />
    </div>
  );
};

export default Search;
