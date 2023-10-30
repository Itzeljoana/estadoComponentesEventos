import React from "react";

const SocialButton = ({icon}) => {
  return (
    <button className="social-button">
      <i className={icon}></i>
    </button>
  );
};

export default SocialButton;