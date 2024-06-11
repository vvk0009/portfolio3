import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>vivekchaudhary846@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/vvk_0009/?igsh=YXhrcWQ0cTNjd3Vk"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/vivek-chaudhary-237136173/"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://github.com/vvk0009"><Gitub color="white" size={"3rem"}/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
