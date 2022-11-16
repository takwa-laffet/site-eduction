import "./contact.css";
import "../../styles.css";
import { useState } from "react";
import {
  MdOutlineNearMe,
  MdOutlineAssignmentInd,
  MdOutlineLocationOn
} from "react-icons/md";
import React, { Component, Fragment } from 'react';

import { HiOutlineMail } from "react-icons/hi";
export default function () {
  const [submit, setsubmit] = useState(false);

  return (
    <main id="Contact">
      <div className="subTitle">
        <h2>
          {" "}
          <MdOutlineAssignmentInd className="avatar" />
          Contact US
        </h2>
      </div>
      <div className="App2">
        <h3>
          <MdOutlineLocationOn className="avatar" />
          Google map.
        </h3>
        <br />

        <div>
          
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m13!1m8!1m3!1d26550.176201766022!2d8.973169!3d33.714845!3m2!1i1024!2i768!4f13.1!2m1!1sRoute+de+Gab%C3%A8s+K%C3%A9bili+Tunisie!5e0!6i14!3m1!1sfr!5m1!1sfr"
            frameborder="0"
            className="map"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="App">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setsubmit(true);
            setTimeout(() => {
              setsubmit(false);
            }, 3000);
          }}
        >
          <h1>Your feedback.</h1>
     
          <label for="Emain">
            {/* <HiOutlineMail className="usericon i" /> */}
            Email address
          </label>

          <input type="text" name="username" placeholder="Nobita@gnail.com" />
          <label for="password">Message</label>

          <textarea
            name="discription"
            placeholder="give feedback somthing ..:}"
            rows="10"
            cols="50"
          ></textarea>

          <button type="submit">
            send Message <MdOutlineNearMe />
          </button>
          {<b>Message sent succsessfullly......</b> && submit}
        </form>
      </div>
    </main>
  );
}
