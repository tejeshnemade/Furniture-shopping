import React from "react";
import "../Components/Card.css";
function Cart() {
  return (
    <>
      <section className="Home">
        <h1 className="ms-5 mb-5">Cart</h1>
        <div className="container">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="fw-bold">Product-1</td>
                <td>3</td>
                <td>
                  <i class="fa-solid fa-minus"></i>
                  <span className="mx-2 border border-secondary px-2">1</span>
                  <i class="fa-solid fa-plus"></i>
                </td>
                <td>5</td>
                <td>
                  <i class="fa-solid fa-xmark"></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td className="fw-bold">Product-2</td>
                <td>3</td>
                <td>
                  <i class="fa-solid fa-minus"></i>
                  <span className="mx-2 border border-secondary px-2">1</span>
                  <i class="fa-solid fa-plus"></i>
                </td>
                <td>5</td>
                <td>
                  <i class="fa-solid fa-xmark"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default Cart;
