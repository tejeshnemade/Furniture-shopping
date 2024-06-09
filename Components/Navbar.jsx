import React from "react";
import "../src/App.css";
import { Link, useNavigate } from "react-router-dom";
import couch from "../assets/couch.png";
import light from "../assets/dots-light.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeInfo } from "../Redux/Users";

function Navbar() {
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.loginUser.value);
  const dispatch = useDispatch();
  // ======== Logout function ============
  const logout = (event) => {
    event.preventDefault();
    dispatch(changeInfo({ islogin: false, name: undefined, token: undefined }));
    localStorage.clear();
    navigate("/");
  };
  // ======== Logout function ============

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a class="navbar-brand text-white fs-1 me-5" href="#">
              Furni.
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
              {userDetails.islogin ? (
                <ul class="navbar-nav ">
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white " to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white" to="/about">
                      About us
                    </Link>
                  </li>
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white " to="/service">
                      Services
                    </Link>
                  </li>
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white " to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white " to="/contect">
                      Contect us
                    </Link>
                  </li>
                  <li class="nav-item me-5">
                    <button className="btn btn-danger" onClick={logout}>
                      Logout
                    </button>
                  </li>
                  <li class="nav-item me-5">
                    <i
                      class="fa-solid fa-cart-shopping text-white pt-2 fs-4"
                      onClick={() => navigate("/cart")}
                    ></i>
                  </li>
                </ul>
              ) : (
                <ul class="navbar-nav ">
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white " to="/">
                      Home
                    </Link>
                  </li>
                  {/* <li class="nav-item me-5">
                    <Link class="nav-link text-white" to="/shop">
                      Shop
                    </Link>
                  </li> */}
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white" to="/about">
                      About us
                    </Link>
                  </li>
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white " to="/service">
                      Services
                    </Link>
                  </li>
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white " to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li class="nav-item me-5">
                    <Link class="nav-link text-white " to="/contect">
                      Contect us
                    </Link>
                  </li>
                  <li class="nav-item me-5">
                    <i
                      class="fa-regular fa-user text-white pt-2 fs-4"
                      onClick={() => navigate("/login")}
                    ></i>
                  </li>
                  {/* <li class="nav-item me-5">
                    <i
                      class="fa-solid fa-cart-shopping text-white pt-2 fs-4"
                      onClick={() => navigate("/cart")}
                    ></i>
                  </li> */}
                </ul>
              )}
            </div>
          </div>
        </nav>
        <div className="text">
          <p className="text-white fs-1 fw-bold ">
            Modern interior <br />
            Design Studio
          </p>
          <p className="text-white">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet{" "}
            <br />
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <button
            className="btn btn-warning rounded-pill me-2"
            onClick={() => navigate("/shop")}
          >
            Shop Now
          </button>
          <button className="btn btn-outline-secondary rounded-pill text-white">
            Explore
          </button>
        </div>
        <div className="head-img ">
          <img id="couch" className="img-fluid" src={couch} alt="couch" />

          <img id="light" className="img-fluid" src={light} alt="couch" />
        </div>
      </header>
    </>
  );
}

export default Navbar;
