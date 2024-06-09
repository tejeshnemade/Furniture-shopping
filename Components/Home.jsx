import React from "react";
import "../Components/Home.css";
import { Link, useNavigate } from "react-router-dom";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";
import why from "../assets/why-choose-us-img.jpg";
import yellow from "../assets/dots-yellow.png";
import green from "../assets/dots-green.png";
import couch from "../assets/img-grid-1.jpg";
import lemp from "../assets/img-grid-2.jpg";
import table from "../assets/img-grid-3.jpg";
import post1 from "../assets/post-1.jpg";
import post2 from "../assets/post-2.jpg";
import post3 from "../assets/post-3.jpg";
import sofa from "../assets/sofa.png";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <main className="Home">
        <div className="text-1 d-flex">
          <div className="me-5">
            <p className="fs-2  ">
              Crafted with <br /> excellent material.
            </p>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac
              aliquet velit. Aliquam vulputate velit <br /> imperdiet dolor
              tempor tristique.
            </p>
            <button
              className="btn btn-dark text-white rounded-pill fs-3"
              onClick={() => navigate("/shop")}
            >
              Explore
            </button>
          </div>
          <div className="d-flex">
            <div className="card me-2">
              <img
                className="card-img-top"
                src={product1}
                style={{ height: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title fs-2 fw-bold text-center">
                  Nardic Chair
                </h5>
                <p className="text-center fs-3 fw-bold">$50.00</p>
              </div>
              <i className="fa-solid fa-xmark text-center fs-1"></i>
            </div>
            <div className="card me-2">
              <img
                className="card-img-top"
                src={product2}
                style={{ height: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title fs-2 fw-bold text-center">
                  Kruzo Aero Chair
                </h5>
                <p className="text-center fs-3 fw-bold">$78.00</p>
              </div>
              <i className="fa-solid fa-xmark text-center fs-1"></i>
            </div>
            <div className="card me-2">
              <img
                className="card-img-top"
                src={product3}
                style={{ height: "250px" }}
              />
              <div className="card-body">
                <h5 className="card-title fs-2 fw-bold text-center">
                  Ergonomic Chair
                </h5>
                <p className="text-center fs-3 fw-bold">$43.00</p>
              </div>
              <i className="fa-solid fa-xmark text-center fs-1"></i>
            </div>
          </div>
        </div>

        <div className=" text-1 mt-5 d-flex">
          <div>
            <p className=" fs-1">Why Choose Us</p>
            <p className="mb-5">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit <br /> imperdiet dolor tempor
              tristique.
            </p>
            <div className="d-flex">
              <div className="me-2">
                <i className="fa-solid fa-truck mt-2 fs-2 "></i>
                <p className="fw-bold mt-2">Fast & Free Shipping</p>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              <div>
                <i className="fa-brands fa-shopify mt-2 fs-2 "></i>
                <p className="fw-bold mt-2">Easy to Shop</p>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="me-2">
                <i className="fa-regular fa-life-ring mt-2 fs-2 "></i>
                <p className="fw-bold mt-2">24/7 Support</p>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              <div>
                <i className="fa-solid fa-right-left mt-2 fs-2 "></i>
                <p className="fw-bold mt-2">Hassle Free Returns</p>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <img
              className="rounded round-image"
              style={{
                height: "550px",
                marginLeft: "150px",
                position: "relative",
                zIndex: "2",
              }}
              src={why}
            />
            <img className="yellow" src={yellow} alt="yellow dots" />
          </div>
        </div>

        <div className=" text-1 mt-5 d-flex">
          <div id="ses-3-img">
            <img
              className="rounded"
              id="img-green"
              src={green}
              alt="green-dots"
            />
            <img
              className="rounded me-1"
              id="img-couch"
              src={couch}
              alt="couch"
            />
            <img
              className="rounded"
              id="img-lemp"
              src={lemp}
              alt="lemp=table"
            />
            <img className="rounded" id="img-table" src={table} alt="table" />
          </div>
          <div>
            <p className="fs-2">
              We Help You Make Modern <br /> Interior Design
            </p>
            <p className="">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl <br /> dapibus malesuada. Nullam ac aliquet velit.
              Aliquam vulputate velit <br /> imperdiet dolor tempor tristique.
              Pellentesque habitant morbi tristique <br /> senectus et netus et
              malesuada
            </p>
            <div className="d-flex">
              <div className="me-5">
                <ul>
                  <li>
                    <p className="">
                      Donec vitae odio quis nisl dapibus malesuada
                    </p>
                  </li>
                  <li>
                    <p className="">
                      Donec vitae odio quis nisl dapibus malesuada
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <p className="">
                      Donec vitae odio quis nisl dapibus malesuada
                    </p>
                  </li>
                  <li>
                    <p className="">
                      Donec vitae odio quis nisl dapibus malesuada
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <button className="btn btn-dark text-white rounded-pill mt-5 fs-3">
              Explore
            </button>
          </div>
        </div>

        <div className=" text-1 mt-5 d-flex">
          <div className="d-flex">
            <div>
              <img src={product1} style={{ height: "100px" }} />
            </div>
            <div>
              <p className="fw-bold" style={{ fontSize: "14px" }}>
                Nordia Chair
              </p>
              <p style={{ fontSize: "12px" }}>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <Link to="/">Read More</Link>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src={product2} style={{ height: "100px" }} />
            </div>
            <div>
              <p className="fw-bold" style={{ fontSize: "14px" }}>
                Nordia Chair
              </p>
              <p style={{ fontSize: "12px" }}>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <Link to="/">Read More</Link>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src={product3} style={{ height: "100px" }} />
            </div>
            <div>
              <p className="fw-bold" style={{ fontSize: "14px" }}>
                Nordia Chair
              </p>
              <p style={{ fontSize: "12px" }}>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <Link to="/">Read More</Link>
            </div>
          </div>
        </div>

        <div className=" lastmain text-1 mt-5">
          <div className="d-flex justify-content-between" id="blog-post">
            <p className="fs-3">Recent Blog</p>
            <Link>View All Posts</Link>
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
      </main>
    </>
  );
}

export default Home;
