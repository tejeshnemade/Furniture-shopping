import React from "react";
import "../Components/Shop.css";
import product1 from "../assets/product-1.png";
import product2 from "../assets/product-2.png";
import product3 from "../assets/product-3.png";

function Shop() {
  return (
    <>
      <main className="Home">
        <section className="shop">
          <div className="row">
            <div className="d-flex">
              <div className="cal-3 ">
                <img src={product3} alt="" />
              </div>
              <div className="cal-3">
                <img src={product1} alt="" />
              </div>
              <div className="cal-3">
                <img src={product2} alt="" />
              </div>
              <div className="cal-3">
                <img src={product3} alt="" />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="d-flex">
              <div className="cal-3 ">
                <img src={product3} alt="" />
              </div>
              <div className="cal-3">
                <img src={product1} alt="" />
              </div>
              <div className="cal-3">
                <img src={product2} alt="" />
              </div>
              <div className="cal-3">
                <img src={product3} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Shop;
