import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MeetPatelImage from "./MeetPatelImage.png";
export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setBtntext] = useState("Enable Dark Mode");
  const [accordStyle, setAccordStyle] = useState({
    backgroundColor: "#3498db",
    color: "white",
  });
  const styleChange = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "#7f7a71",
        border: "1px solid white",
      });
      setAccordStyle({
        backgroundColor: "black",
        color: "White",
      });
      setBtntext("Enable Light Mode");
      document.body.style.backgroundColor = "#d6d5d3";
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setAccordStyle({
        backgroundColor: "#3498db",
        color: "White",
      });
      setBtntext("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div
      className="container mt-4 p-5"
      style={{
        myStyle,
        transition: "all 0.3s",
        borderRadius: "15px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        className="mb-4 text-center"
        style={{
          fontSize: "3rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontFamily: "initial",
        }}
      >
        Meet Patel
      </h1>
      <div className="text-center mb-4">
        <img
          src={MeetPatelImage}
          alt="Meet Patel"
          style={{ height: "200px", width: "200px", borderRadius: "50%" }}
        />
      </div>
      <div className="accordion" id="accordionExample">
        <div
          className="accordion-item"
          style={{ myStyle, borderRadius: "8px", marginBottom: "10px" }}
        >
          <h2 className="accordion-header" style={{ fontFamily: "initial" }}>
            <button
              className="accordion-button collapsed"
              style={accordStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Education
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p style={{ fontFamily: "cursive" }} className="small text">
                Software Engineering Diploma, Sheridan College, Brampton
                <br />
                September, 2018 — August, 2020
              </p>
              <p style={{ fontFamily: "cursive" }} className="small text">
                High School, N.M. High school, Ahmedabad
                <br />
                July, 2015 — July, 2017
              </p>
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={{ accordStyle, borderRadius: "8px", marginBottom: "10px" }}
        >
          <h2 className="accordion-header" style={{ fontFamily: "initial" }}>
            <button
              className="accordion-button collapsed"
              style={accordStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Professional Summary
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p style={{ fontFamily: "cursive" }} className="small text">
                Restaurant Managing Partner, Loaded Pierogi, Greater Napanee,
                Ontario
                <br />
                October, 2022 — October, 2023
              </p>
              <p style={{ fontFamily: "cursive" }} className="small text">
                Restaurant General Manager, Pizzahut, Greater Napanee, Ontario
                <br />
                September, 2020 — October, 2022
              </p>
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={{ myStyle, borderRadius: "8px", marginBottom: "10px" }}
        >
          <h2 className="accordion-header" style={{ fontFamily: "initial" }}>
            <button
              className="accordion-button collapsed"
              style={accordStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Certifications
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p style={{ fontFamily: "cursive" }} className="small text">
                Python for Everybody Specialization Certificates, University of
                Michigan
                <br />
                May, 2023 — July, 2023
              </p>
              <p style={{ fontFamily: "cursive" }} className="small text">
                Meta Front-End Developer Professional Certificate, Meta
                <br />
                July, 2023 — September, 2023
              </p>
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={{ myStyle, borderRadius: "8px", marginBottom: "10px" }}
        >
          <h2 className="accordion-header" style={{ fontFamily: "initial" }}>
            <button
              className="accordion-button collapsed"
              style={accordStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Skills
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <ul className="list-inline small text">
                <li className="list-inline-item">Python</li>
                <li className="list-inline-item">JavaScript</li>
                <li className="list-inline-item">React</li>
                <li className="list-inline-item">Java</li>
                <li className="list-inline-item">SQL</li>
                <li className="list-inline-item">HTML</li>
                <li className="list-inline-item">CSS</li>
                <li className="list-inline-item">JSON</li>
                <li className="list-inline-item">jQuery</li>
                <li className="list-inline-item">Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={{ myStyle, borderRadius: "8px", marginBottom: "10px" }}
        >
          <h2 className="accordion-header" style={{ fontFamily: "initial" }}>
            <button
              className="accordion-button collapsed"
              style={accordStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Projects
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p style={{ fontFamily: "cursive" }} className="small text">
                Project 1: NewsGoose
              </p>
              <p style={{ fontFamily: "cursive" }} className="small text">
                Project 2: TextUtils
              </p>
            </div>
          </div>
        </div>

        <div
          className="accordion-item"
          style={{ myStyle, borderRadius: "8px", marginBottom: "10px" }}
        >
          <h2 className="accordion-header" style={{ fontFamily: "initial" }}>
            <button
              className="accordion-button collapsed"
              style={accordStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Contact
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <p style={{ fontFamily: "cursive" }} className="small text">
                Email: Meetpatel4567.mp@gmail.com
              </p>
              <p style={{ fontFamily: "cursive" }} className="small text">
                Phone: +1 (647) 774-8468
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 text-center">
        <button type="button" className="btn btn-dark" onClick={styleChange}>
          {btntext}
        </button>
      </div>
    </div>
  );
}
