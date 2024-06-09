import React  from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import url from "../service/url";
import webService from "../service/webService";


function RegisterForm() {
  let nameBox = useRef()
  let phoneBox = useRef()
  let emailBox = useRef()
  let passwordBox = useRef()
  let addressBox = useRef()

  //===== navigate to login page ====

  const navigate = useNavigate();
  let login = () => {
    navigate("/login");
  };

 //===== navigate to login page ====

  //============ Register Form =======================

  let Singup = async(event)=>{
    event.preventDefault();
    
    let ob={
        name:nameBox.current.value,
        phone:phoneBox.current.value,
        email:emailBox.current.value,
        password:passwordBox.current.value,
        address:addressBox.current.value
    }
    // console.log(ob);
      const response = await webService.postApiCall(url.USER_REGISTRATION,ob)
      console.log(response);

     event.target.reset()
  }

 //============ Register Form =======================





  return (
    <>
      <section className="Home">
        <div className="container">
          <h1 className="text-center mb-5">Register page</h1>
          <form onSubmit={Singup}>
            <div class="form-group row mt-2">
              <label htmlFor="inputName" class="col-sm-2 col-form-label">
                Name
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  placeholder="Enter Name"
                  ref={nameBox}
                />
              </div>
            </div>
            <div class="form-group row mt-2">
              <label htmlFor="inputName" class="col-sm-2 col-form-label">
                Phone Number
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputphone"
                  placeholder="Enter Phone Number"
                  ref={phoneBox}
                />
              </div>
            </div>

            <div class="form-group row mt-2">
              <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                  ref={emailBox}
                />
              </div>
            </div>
            <div class="form-group row mt-2">
              <label htmlFor="inputPassword3" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                  placeholder="Password"
                  ref={passwordBox}
                />
              </div>
            </div>
            <div class="form-group row mt-2">
              <label htmlFor="inputaddress" class="col-sm-2 col-form-label">
                Address
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputaddress"
                  placeholder="Address -123"
                  ref={addressBox}
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary mt-5 mx-2">
              Sing up
            </button>

            <button class="btn btn-primary mt-5" onClick={login}>
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterForm;
