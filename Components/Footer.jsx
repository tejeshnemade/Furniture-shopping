import React from "react";
import sofa from "../assets/sofa.png";
import "../Components/Home.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="text-1 d-flex">
          <div>
            <p>
              <i className="fa-regular fa-envelope me-1"></i>Subscribe to
              Newsletter
            </p>
            <input type="text" placeholder="Enter Your name" />
            <input type="text" placeholder="Enter Your Email" />
            <button className="btn btn-success">
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </div>
          <div>
            <img src={sofa} id="sofa" alt="sofa" />
          </div>
        </div>
        <section className="footer-text d-flex mt-5">
          <section>
            <p className="fs-2">Furni.</p>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec <br /> odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. <br />
              Aliquam vulputate velit imperdiet dolor tempor tristique. <br />
              Pellentesque habitant
            </p>
            <i className="fa-brands fa-facebook me-2 fs-3 bg-info rounded-circle p-2"></i>
            <i className="fa-brands fa-twitter me-2 fs-3 bg-info rounded-circle p-2"></i>
            <i className="fa-brands fa-instagram me-2 fs-3 bg-info rounded-circle p-2"></i>
            <i className="fa-brands fa-linkedin fs-3 bg-info rounded-circle p-2"></i>
          </section>
          <section className="d-flex ms-5">
            <ul className="me-5">
              <li>About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
            <ul className="me-5">
              <li>Support</li>
              <li>Knowlege base</li>
              <li>Live chat</li>
            </ul>
            <ul className="me-5">
              <li>Jobs</li>
              <li>Our team</li>
              <li>Leadership</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className="me-5">
              <li>Nordic Chair</li>
              <li>Kruzo Aero</li>
              <li>Ergonomic Chair</li>
            </ul>
          </section>
        </section>
        <section className="footer-text2 d-flex justify-content-between">
          <div>
            <p>
              Copyright ©2024. All Rights Reserved. — Designed with love by
              Untree.co Distributed By
            </p>
          </div>
          <div>
            <p>Terms & Conditions Privacy Policy</p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
