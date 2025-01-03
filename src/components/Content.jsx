import React from "react";

//rfc
export default function Content() {
  const contetStyle = {
    backgroundColor: "yellow",
    height: "300px",
    width: "100%",
  };

  var age = 17;
  var isActive = false;

  return (
    <div style={contetStyle}>
      <h1 style={{ color: "blue" }}>Content...</h1>
      <h2 style={{ color: age >= 18 ? "green" : "red" }}>age = {age}</h2>
      {isActive == true ? (
        <div>
          <h1>hello</h1>
          <h2>hi</h2>
          <h3>ok</h3>
        </div>
      ) : (
        ""
      )}
      {isActive == true && (
        <div>
          <h1>hello</h1>
          <h2>hi</h2>
          <h3>ok</h3>
        </div>
      )}
    </div>
  );
}
