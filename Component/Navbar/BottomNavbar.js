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
  const [Index, setIndex] = useState(0);

  return (
    <>
      {[
        { name: "home", icon: <BiHome /> },
        {
          name: "About",
          icon: <MdAnchor />
        },
        { name: "skills", icon: <MdHistoryToggleOff className="avatar" /> },

        { name: "Contact", icon: <MdOutlineContacts className="avatar" /> },
        { name: "Logout", icon: <HiLogout className="avatar" /> }
      ].map((i, index) => (
        <>
          <a
            style={{ color: Index === index ? "black" : "#DDD" }}
            href={`#${i.name}`}
            onClick={() => {
              setIndex(index);
            }}
          >
            {i.icon}
            <b>{i.name}</b>
          </a>
        </>
      ))}
    </>
  );
}
