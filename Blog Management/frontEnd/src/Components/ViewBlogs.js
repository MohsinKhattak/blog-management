import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
const ViewBlogs = () => {
  const [blog, setBlog] = useState([]);
  axios
    .get("http://localhost:5000/blogs/")
    .then((res) => {
      setBlog(res.data);
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
        <h1 style={{ padding: "20px", color: "#9BED24" }}>Blogs</h1>
        {blog.map((blog) => {
          return (
            <Card
              style={{
                width: "30rem",
                height: "15rem",
                padding: 10,
                margin: "20px auto",
                backgroundColor: "black",

                border: "2px solid #24EDA4",
                borderRadius: "0 10px 0 10px",
              }}
            >
              <Card.Body>
                <Card.Title
                  style={{
                    color: "#9BED24",
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                >
                  {blog.title}
                </Card.Title>
                <Card.Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    overFlow: "hidden",
                  }}
                >
                  {blog.content}
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Button
                  style={{
                    width: "200px",
                    padding: "10px",
                    margin: "20px",
                    backgroundColor: "#9BED24",
                    color: "black",
                    border: "2px solid black",
                    borderRadius: "10px 0 10px 0",
                    fontWeight: "bold",
                    fontSize: "20px",
                    alignSelf: "center",
                  }}
                  variant="warning"
                >
                  <a
                    style={{ color: "black", textDecoration: "none" }}
                    href={`/blogs/${blog._id}`}
                  >
                    See Blog
                  </a>
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ViewBlogs;
