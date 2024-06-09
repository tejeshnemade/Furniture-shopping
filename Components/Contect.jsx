import React from "react";
import "../Components/Contect.css";

function Contect() {
  return (
    <>
      <section className="Home">
        <div className="d-flex context">
          <div className="me-5">
            <i className="fa-solid fa-location-dot me-2 fs-4 bg-success p-2 rounded"></i>
            43 Raymouth Rd. Baltemoer,London 3910
          </div>
          <div className="me-5">
            <i className="fa-regular fa-envelope fs-4 me-2 bg-success p-2 rounded"></i>
            info@yourdomain.com
          </div>
          <div className="me-5">
            <i className="fa-solid fa-phone fs-4 me-2 bg-success p-2 rounded"></i>
            +1 294 3925 3939
          </div>
        </div>
        <div className="container">
          <form className=" mt-5">
            <label htmlFor="name">First name</label>
            <br />
            <input type="text" className="form-control" id="name" />
            <label htmlFor="lastname">Last name</label>
            <br />
            <input type="text" className="form-control" id="lastname" />
            <label htmlFor="email">Email address</label>
            <br />
            <input type="email" className="form-control" id="email" />
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button className="btn btn-dark mt-5 rounded-pill">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contect;
