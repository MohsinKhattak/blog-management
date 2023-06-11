import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [err, setErr] = useState("");

  const submitData = () => {
    if (title.length > 0 && content.length > 0) {
      setErr("");
      axios
        .post("http://localhost:5000/blogs/", {
          title: title,
          content: content,
        })
        .then((response) => {
          if (response.status == "200") {
            alert("Blog is Posted");
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      setErr("Please Fill All Necessary Fields");
    }
  };

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
        <h1 style={{ padding: "20px", color: "#9BED24" }}>Create A Blog</h1>
        <div>
          <div
            style={{
              margin: "auto",
              width: "50%",
              backgroundColor: "white",
              border: "2px solid #9BED24",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              borderRadius: "0 20px 0 20px ",
            }}
          >
            <label
              style={{
                margin: "10px",
                fontWeight: "bold",
                color: "black",
                fontSize: "20px",
              }}
            >
              Title
            </label>
            <input
              style={{
                padding: "5px",
                border: "2px solid black",
                borderRadius: "0 5px 0 5px",
              }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type Title"
            />
            <label
              style={{
                margin: "10px",
                fontWeight: "bold",
                color: "Black",
                fontSize: "20px",
              }}
            >
              Content
            </label>
            <textarea
              style={{
                padding: "5px",
                border: "2px solid black",
                borderRadius: "0 5px 0 5px",
              }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              as="textarea"
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              rows={3}
            />

            <Button
              onClick={submitData}
              style={{
                width: "100px",
                padding: "10px",
                margin: "20px",
                backgroundColor: "#9BED24",
                color: "black",
                border: "2px solid black",
                borderRadius: "5px 0 5px 0",
                fontWeight: "bold",
                fontSize: "20px",
                alignSelf: "center",
              }}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBlog;
