import React, { useEffect, useState } from "react";
import "../Components/Card.css";
import webService from "../service/webService";
import url from "../service/url";
import { Buffer } from "buffer";

function Cart() {
  const [data, setData] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let response = await webService.getApiCall(url.USER_PRODUCT);
      setData(response?.data?.data || []);
      setQuantities(response?.data?.data.map(() => 0)); // Initialize quantities array with zeros
      console.log("data", response?.data?.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const decrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index && qty > 0 ? qty - 1 : qty))
    );
  };

  const increase = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  return (
    <section className="Home">
      <h1 className="ms-5 mb-5">Cart</h1>
      <div className="container-fluid">
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
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={
                        `data:image/png;base64,` +
                        Buffer.from(item.image.data).toString("base64")
                      }
                      height={50}
                      width={50}
                      alt="Product Image"
                    />
                  </td>
                  <td className="fw-bold">{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <i
                      className="fa-solid fa-minus"
                      onClick={() => decrease(index)}
                    ></i>
                    <span className="mx-2 border border-secondary px-2">
                      {quantities[index]}
                    </span>
                    <i
                      className="fa-solid fa-plus"
                      onClick={() => increase(index)}
                    ></i>
                  </td>
                  <td>{item.price * quantities[index]}</td>
                  <td>
                    <i className="fa-solid fa-xmark"></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Cart;
