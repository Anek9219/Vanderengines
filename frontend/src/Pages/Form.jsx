import React, { useState }  from "react";

export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name,
      email,
      number,
      message,
    };

    // Make API request to Node.js endpoint
    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="form my-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 p-4">
            <h3>Our Innovative Approach in Digital Marketing</h3>
            <p>
              At SS Tech Service, we pride ourselves to be a leading digital
              marketing, our innovative digital marketing approach, Our
              uniqueness sets us apart in a competitive agency. we serve clients
              not only locally but also around the world, delivering customized
              digital marketing solutions that drive success and growth.
            </p>
            <p>
              Our professionals begins by analyzing our client’s businesses, we
              understand their business goal and make the best and result
              oriented strategies for them. We find the perfect audience for
              your business that helps in generating high quality leads. This
              foundational knowledge allows us to craft strategies that are both
              creative and effective. That makes SS Tech Services one of the
              best digital marketing services. We have worked with 100s of
              clients in India as well as around the world.
            </p>
          </div>
          <div className="col-lg-6">
            <form onSubmit={handleSubmit} >
              <h3 className="text-center">Get a Free Consultation</h3>
              <div class="mb-2">
                <label for="exampleInputname1" class="form-label">
                  Name <span className="text-danger fw-bold fs-5">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="namelHelp"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>
              <div class="mb-2">
                <label for="exampleInputno1" class="form-label">
                  Number <span className="text-danger fw-bold fs-5">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="number"
                  aria-describedby="numberlHelp"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  required
                />
              </div>
              <div class="mb-2">
                <label for="exampleInputEmail1" class="form-label">
                  Email address{" "}
                  <span className="text-danger fw-bold fs-5">*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp1"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <div id="emailHelp" class="form-text">
                 
                </div>
              </div>
              <div class="mb-2">
                <label for="exampleInputmessage1" class="form-label">
                  Comment or Message{" "}
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="message"
                  aria-describedby="messagelHelp"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>

              <div class="mb-2 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
