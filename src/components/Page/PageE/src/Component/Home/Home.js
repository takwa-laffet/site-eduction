import "./Home.css";
import "./window.css";
import { useState, useContext, createContext } from "react";
import { FiLinkedin, FiGithub, FiCodesandbox } from "react-icons/fi";
import {
  MdOutlineNearMe,
  MdOutlineAddchart,
  MdOutlineFileDownload,
  MdEast
} from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import React, { Component, Fragment } from 'react';

import Context from "../Data/data";
import Window from "./Window";
import hero from "../assets/034.png";

export default function Home() {
  const [dark, setdark] = useState(false);
  const user = useContext(Context);

  // console.log(user);
  return (
    
    <section
      className="Home"
      id="home"
      style={{
        color: dark ? "white" : "black",
        background: dark ? "#191919" : "white"
      }}
    >
      {/* <div className="Topheader">
        <button style={{ backgroundColor: dark ? "#4a4854" : "#f1f1f3" }}>
          {dark ? (
            <MdWbSunny
              className="iconButton"
              onClick={() => {
                setdark(!dark);
              }}
              style={{
                color: "white"
              }}
            />
          ) : (
            <FiMoon
              className="iconButton"
              onClick={() => {
                setdark(!dark);
              }}
            />
          )}
        </button>
      </div> */}
      <div
        className="header"
        // style={{ background: dark ? "#ffffff1e" : "white" }}
      >
        <h1>Welcome</h1>
        <h1>
          {user.Home.name.split(" ")[0]}{" "}
          <span style={{ color: dark ? "#4a4854" : "#0508be67" }}>
            {user.Home.name.split(" ")[1]}
          </span>
          <p>
            {" "}
            {user.Home.keywords[0]} , {user.Home.keywords[1]}{" "}
          </p>
        </h1>

        <div style={{ paddingTop: "1rem" }}>
          <h1>
            {" "}
            <p>current status</p>
          </h1>
          <button
            className="current-status"
            style={{
              backgroundColor: dark ? "#4a4854" : "#DDD",
              color: dark ? "#ffff" : "black",
              fontWeight: dark ? "200" : "700"
            }}
          >
            <MdOutlineAddchart
              style={{
                fontSize: "50px",
                marginRight: "0.6rem",
                color: dark ? "#ffff" : "#191919"
              }}
            />
            <span>{user.Home.currentStatus}</span>
          </button>
        </div>
        <br />
        <div className="buttons-grup">
          {/* <button>
            <span>explore more</span>
            <span>
              <MdOutlineNearMe />
            </span>
          </button> */}

          <button>
            <span>Download Resume</span>
            <span>
              <MdOutlineFileDownload style={{ fontSize: "24px" }} />
            </span>
          </button>
        </div>
      </div>

      <div
        className="hero"
        style={{ backgroundColor: dark ? "#4a4854" : "none" }}
      >
        <img src={hero} width="80%" alt="bscjhdh" />
        <div>
          {/* <FiLinkedin className="switch" /> */}
          {/* <MdEast className="switch" /> */}
        </div>
      </div>
      {/* <div>
        <Window />
        <br />
      </div> */}
    </section>
  );
}
