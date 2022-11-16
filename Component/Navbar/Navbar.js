import "./Navbar.css";
import "../Home/Home.css";
import {
  MdKeyboardArrowUp,
  MdTurnedInNot,
  MdAnchor,
  MdOutlineAssignment,
  MdHistoryToggleOff,
  MdOutlineContacts
} from "react-icons/md";
import { HiLogout} from "react-icons/hi";
import { BiHome } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function App() {
  const [active, setactive] = useState([1, 0, 0, 0]);
  const [show, hide] = useState(false);
  let temp = [0, 0, 0, 0];

  return (
    <div className="item-container">
      <div style={{ visibility: show ? "hidden" : "visible" }}>
        {[
          { name: "home", icon: <BiHome className="avatar" /> },
          {
            name: "About",
            icon: <MdAnchor className="avatar" />
          },
          { name: "Skills", icon: <MdHistoryToggleOff className="avatar" /> },
          { name: "Contact", icon: <MdOutlineContacts className="avatar" /> },
          { name: "Logout", icon: <HiLogout className="avatar" /> },

        ].map((i, index) =>
          active[index] ? (
            <div className="active" /* data-foo={i.name} */>
              {i.icon}
            </div>
          ) : (
            <a href={`#${i.name}`}>
              <div
                className="inactive"
               /*  data-foo={i.name}  */
                onClick={() => {
                  temp[index] = 1;
                  setactive(temp);
                }}
              >
                {i.icon}
              </div>
            </a>
          )
        )}
      </div>
      {/* <div className="boll">
        <MdKeyboardArrowUp
          style={{ height: "100%" }}
          onClick={() => {
            hide(!show);
          }}
        />
      </div> */}
    </div>
  );
}
