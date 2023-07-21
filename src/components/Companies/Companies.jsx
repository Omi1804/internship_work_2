import React from "react";
import "./companies.css";
import img from "../../assets/com1.png";
import img2 from "../../assets/com2.png";
import img3 from "../../assets/com3.png";

const Companies = () => {
  return (
    <div className="companies">
      <div className="com_content">
        <div className="des">
          <h3>Trusted Clients</h3>
          <p>Companies that have worked with us in the past</p>
        </div>
        <div className="com_logos">
          <img src={img} alt="" />
          <img src={img3} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
