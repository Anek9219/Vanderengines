import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer my-5">
        <div className="container py-5">
          <div className="row justify-content-between">
            <div className="col-lg-3 lh-lg mb-3">
              SS Tech Services is a leading Digital Marketing Services provider.
              We provides SEO, SMO, Google Ads, Meta Ads, Web Development
              services.
            </div>
            <div className="col-lg-3 lh-lg mb-3">
              <ul>
                <li>
                  <a href="/"> Home </a>
                </li>
                <li>
                  <a href="smo"> SMO</a>
                </li>
                <li>
                  <a href="web">Web Development</a>
                </li>
                <li>
                  <a href="content">Content Writing</a>
                </li>
                <li>
                  <a href="ppc">Pay Per Click</a>
                </li>
                <li>
                  <a href="graphic">Graphic Design</a>
                </li>
                <li>
                  <a href="bpo">BPO Solutions</a>
                </li>
                <li>
                  <a href="seo"> SEO</a>
                </li>
                <li>
                  <a href="blog">Blog</a></li>
              </ul>
            </div>
            <div
              className="col-lg-3 d-flex justify-content-center gap-4 lh-lg mb-3"
              style={{ marginLeft: "-30px" }}
            >
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
            <div className="col-lg-3 lh-lg">
              <h6>
                Contact Us
                <p>+18448931760</p>
              </h6>
              <h6>customerservice@sstechservices.net</h6>
              <h6>Address - 15150 Cicero Avenue, Oak Forest, Il 60452</h6>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-5 text-center">
        Copyright © 2024 | Powered by{" "}
        <span style={{ color: "#0f5a6c" }}>[SS Tech Services]</span>
      </p>
    </>
  );
}
