import "../Home/Home.css";
import { useState } from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import aboutimg from "../assets/036.png";
import { MdPersonOutline, MdOutlineEvent } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { BsWhatsapp, BsInstagram, BsLightningCharge } from "react-icons/bs";

export default function () {
  const [dark, setdark] = useState(false);
  const [Age, setAge] = useState("");


  return (
    <div
      className="Home"
      id="About"
      style={{
        minHeight: window.innerHeight,
        color: dark ? "white" : "black",
        background: dark ? "#191919" : "white"
      }}
    >
    
      <div
        className="header"
        style={{ background: dark ? "#ffffff1e" : "white" }}
      >
        <h1>
        For You
          <span style={{ color: dark ? "#4a4854" : "#0508be67" }}> Page </span>
        </h1>
        <div className="About-containt">
          <p>
            My name is Laxmikant varkal, I’m 21 years old and I am currently
            pursuing degree . I like to learn new things. Being knowledgeable
            about any subject is an ongoing process, and I’m always proactive
            about seeking new opportunities to develop and grow in my role
          </p>{" "}
      
          <hr />
          <br />
        </div>
      </div>
    </div>
  );
}
