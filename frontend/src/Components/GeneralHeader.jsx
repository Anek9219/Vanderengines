import React from "react";

export default function GeneralHeader() {
  return (
    <div className=" general-header bg-black text-white w-100 ">
      <div className="container">
        <div className="row d-flex align-items-center h-100">
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex gap-5 align-items-center">
            <a href="" className="">
              <i className="fa-solid fa-envelope me-2"></i>abc@gmail.com
            </a>
            <a href="" className="">
              <i className="fa-solid fa-phone-volume me-2"></i>1234567890
            </a>
            {/* <a href="">
              <i className="fa-brands fa-whatsapp fs-2 text-success"></i>
            </a> */}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end gap-4">
            <a href="">
              {" "}
              <i className="fa-brands fa-facebook-f"></i>{" "}
            </a>
            <a href="">
              {" "}
              <i className="fa-brands fa-twitter"></i>{" "}
            </a>
            <a href="">
              {" "}
              <i className="fa-brands fa-youtube"></i>{" "}
            </a>
            <a href="">
              {" "}
              <i className="fa-brands fa-linkedin"></i>{" "}
            </a>
            <a href="">
              {" "}
              <i className="fa-brands fa-pinterest"></i>{" "}
            </a>
            <a href="">
              {" "}
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
