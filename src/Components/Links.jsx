import React from "react";
import "./Navbar.css";

const Links = () => {
  const arr = ["Services", "Projects", "About"];
  return (
    <>
      <div className="links-div">
        {arr.map((el) => {
          return <span>{el}</span>;
        })}
      </div>
    </>
  );
};

export default Links;
