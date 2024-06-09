import React from "react";
import "../Components/About.css";
import { Link } from "react-router-dom";
import why from "../assets/why-choose-us-img.jpg";
import yellow from "../assets/dots-yellow.png";
import person1 from "../assets/person_1.jpg";
import person2 from "../assets/person_2.jpg";
import person3 from "../assets/person_3.jpg";
import person4 from "../assets/person_4.jpg";

function About() {
  return (
    <>
      <section className="Home">
        <div className="me-5 about  ">
          <p className=" fs-1 ">Why Choose Us</p>
          <p className="mb-5">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit <br /> imperdiet dolor tempor
            tristique.
          </p>
          <div className="d-flex">
            <div className="me-2">
              <i className="fa-solid fa-truck mt-5 fs-2 "></i>
              <p className="fw-bold mt-2">Fast & Free Shipping</p>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac
                aliquet velit. Aliquam vulputate.
              </p>
            </div>
            <div>
              <i className="fa-brands fa-shopify mt-5 fs-2 "></i>
              <p className="fw-bold mt-2">Easy to Shop</p>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac
                aliquet velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="me-2">
              <i className="fa-regular fa-life-ring mt-5 fs-2 "></i>
              <p className="fw-bold mt-2">24/7 Support</p>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac
                aliquet velit. Aliquam vulputate.
              </p>
            </div>
            <div>
              <i className="fa-solid fa-right-left mt-5 fs-2 "></i>
              <p className="fw-bold mt-2">Hassle Free Returns</p>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. <br /> Nullam ac
                aliquet velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>

        <div>
          <img
            className="rounded round-image"
            style={{
              height: "550px",
              marginLeft: "1000px",
              marginTop: "-500px",
              position: "relative",
              zIndex: "2",
            }}
            src={why}
          />
          <img id="about-yellow" src={yellow} alt="yellow dots" />
        </div>
        <section>
          <p className="text-center mt-5 fs-2">Our Team</p>
          <div className="d-flex team">
            <div>
              <img src={person1} alt="" />
              <p className="fw-bold">
                <u>Lawson Arnold</u>
              </p>
              <p>CEO, Founder, Atty.</p>
              <p>
                Separated they live in. Separated they live in <br />{" "}
                Bookmarksgrove right at the coast of the <br />
                Semantics, a large language ocean.
              </p>
              <Link>Learn More</Link>
            </div>

            <div>
              <img src={person2} alt="" />
              <p className="fw-bold">
                <u>Jeremy Walker</u>
              </p>
              <p>CEO, Founder, Atty.</p>
              <p>
                Separated they live in. Separated they live in <br />{" "}
                Bookmarksgrove right at the coast of the <br />
                Semantics, a large language ocean.
              </p>
              <Link>Learn More</Link>
            </div>

            <div>
              <img src={person3} alt="" />
              <p className="fw-bold">
                <u>Patrik White</u>
              </p>
              <p>CEO, Founder, Atty.</p>
              <p>
                Separated they live in. Separated they live in <br />{" "}
                Bookmarksgrove right at the coast of the <br />
                Semantics, a large language ocean.
              </p>
              <Link>Learn More</Link>
            </div>
            <div>
              <img src={person4} alt="" />
              <p className="fw-bold">
                <u>Kathryn Ryan</u>
              </p>
              <p>CEO, Founder, Atty.</p>
              <p>
                Separated they live in. Separated they live in <br />{" "}
                Bookmarksgrove right at the coast of the <br />
                Semantics, a large language ocean.
              </p>
              <Link>Learn More</Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
