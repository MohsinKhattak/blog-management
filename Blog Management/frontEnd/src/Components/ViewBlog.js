import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";

const ViewBlog = () => {
  const [blog, setblog] = useState({});
  const { id } = useParams();
  axios
    .get(`http://localhost:5000/blogs/${id}`)
    .then((res) => {
      console.log(res.data);
      setblog(res.data);
    })
    .catch((err) => console.log(err));

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <h1 style={{ padding: "20px", color: "#9BED24" }}>{blog.title}</h1>
        <p style={{ fontSize: "20px", color: "white" }}>{blog.content}</p>
      </div>
    </>
  );
};

export default ViewBlog;
