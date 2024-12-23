import React from "react";

export default function Header() {
  return (
    <div className="w-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container d-flex ">
          <a className="navbar-brand" href="#">
            <img
              src="/assets/Untitled_design__3_-removebg-preview.png"
              alt=""
              width={250}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 gap-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="smo">
                      SMO
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="web">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="content">
                      Content Writing{" "}
                    </a>{" "}
                  </li>
                  <li>
                    <a className="dropdown-item" href="ppc">
                      Pay Per Click
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="graphic">
                      Graphic Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="bpo">
                      BPO Solutions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="seo">
                      SEO
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
