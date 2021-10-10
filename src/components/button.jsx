import React from "react";

const Button = ({ color, nameBtn, typeForm, onClick }) => {
  function getFormBtn(form) {
    const styles = { fontSize: "20px" };
    if (form === "sharp") {
      styles.borderRadius = "0px";
    } else if (form === "remove") {
      styles.width = "100%";
      styles.height = "40%";
    }
    return styles;
  }
  return (
    <button
      style={getFormBtn(typeForm)}
      type="button"
      className={`btn btn-${color}`}
      onClick={onClick}
    >
      {nameBtn}
    </button>
  );
};

export default Button;
