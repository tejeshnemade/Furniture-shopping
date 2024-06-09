import React from "react";
import "../Components/Blog.css";
import post1 from "../assets/post-1.jpg";
import post2 from "../assets/post-2.jpg";
import post3 from "../assets/post-3.jpg";

function Blog() {
  return (
    <>
      <section className="Home">
        <div id="blog">
          <div className="d-flex ">
            <div className="me-3">
              <img
                src={post1}
                style={{ height: "250px", borderRadius: "20px" }}
                alt="post1"
              />
              <p className="fw-bold">First Time Home Owner Ideas</p>
              <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
            <div className="me-3">
              <img
                src={post2}
                style={{ height: "250px", borderRadius: "20px" }}
                alt="post1"
              />
              <p className="fw-bold">First Time Home Owner Ideas</p>
              <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
            <div>
              <img
                src={post3}
                style={{ height: "250px", borderRadius: "20px" }}
                alt="post1"
              />
              <p className="fw-bold">First Time Home Owner Ideas</p>
              <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
          </div>

          <div className="d-flex ">
            <div className="me-3">
              <img
                src={post1}
                style={{ height: "250px", borderRadius: "20px" }}
                alt="post1"
              />
              <p className="fw-bold">First Time Home Owner Ideas</p>
              <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
            <div className="me-3">
              <img
                src={post2}
                style={{ height: "250px", borderRadius: "20px" }}
                alt="post1"
              />
              <p className="fw-bold">First Time Home Owner Ideas</p>
              <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
            <div>
              <img
                src={post3}
                style={{ height: "250px", borderRadius: "20px" }}
                alt="post1"
              />
              <p className="fw-bold">First Time Home Owner Ideas</p>
              <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
          </div>

          <div className="d-flex">
            <div className="me-3">
              <img
                src={post1}
                style={{ height: "250px", borderRadius: "20px" }}
                alt="post1"
              />
              <p className="fw-bold">First Time Home Owner Ideas</p>
              <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
            <div className="me-3">
              <img
                src={post2}
                style={{ height: "250px", borderRadius: "20px" }}
                alt="post1"
              />
              <p className="fw-bold">First Time Home Owner Ideas</p>
              <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
            <div>
              <img
                src={post3}
                style={{ height: "250px", borderRadius: "20px" }}
                alt="post1"
              />
              <p className="fw-bold">First Time Home Owner Ideas</p>
              <p>by Kristin Watson on Dec 19, 2021</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
