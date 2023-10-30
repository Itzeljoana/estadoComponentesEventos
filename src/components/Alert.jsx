import React from "react";

const Alert = ({type,  mensaje }) => {
  return (
    <div className="alert alert-${type}">
      {mensaje}
    </div>
  );
};

export default Alert;