"use client";

import React, { useState } from "react";

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const handleMouseOver = (item: string) => {
    setHoveredItem(item);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  return (
    <nav className="box-border border-b border-black flex items-center justify-between w-full  px-10 py-5">
      <ul className="flex justify-evenly flex-grow">
        <li
          onMouseEnter={() => handleMouseOver("about me")}
          onMouseOut={handleMouseOut}
          className=" hover:cursor-pointer font-open-sans  text-2xl relative"
        >
          <span
            className={`absolute ${
              hoveredItem === "about me" ? "opacity-100" : "opacity-0"
            }`}
            style={{ left: "-10px" }}
          >
            [
          </span>
          about me
          <span
            className={`absolute ${
              hoveredItem === "about me" ? "opacity-100" : "opacity-0"
            }`}
            style={{ right: "-10px" }}
          >
            ]
          </span>
        </li>
        <li
          onMouseEnter={() => handleMouseOver("case study")}
          onMouseOut={handleMouseOut}
          className=" hover:cursor-pointer font-open-sans  text-2xl relative"
        >
          <span
            className={`absolute ${
              hoveredItem === "case study" ? "opacity-100" : "opacity-0"
            }`}
            style={{ left: "-10px" }}
          >
            [
          </span>
          case study
          <span
            className={`absolute ${
              hoveredItem === "case study" ? "opacity-100" : "opacity-0"
            }`}
            style={{ right: "-10px" }}
          >
            ]
          </span>
        </li>
        <li
          onMouseEnter={() => handleMouseOver("blog")}
          onMouseOut={handleMouseOut}
          className=" hover:cursor-pointer font-open-sans  text-2xl relative"
        >
          <span
            className={`absolute ${
              hoveredItem === "blog" ? "opacity-100" : "opacity-0"
            }`}
            style={{ left: "-10px" }}
          >
            [
          </span>
          blog
          <span
            className={`absolute ${
              hoveredItem === "blog" ? "opacity-100" : "opacity-0"
            }`}
            style={{ right: "-10px" }}
          >
            ]
          </span>
        </li>
      </ul>
      <button
        onMouseEnter={() => handleMouseOver("contact")}
        className="bg-complimentary text-white px-4 py-2 text-2xl font-bold"
      >
        contact
      </button>
    </nav>
  );
};
export default Navigation;
