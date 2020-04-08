import React from "react";

const Contacts = () => {
  let i = 0;
  const text = "zygaityte.indre@gmail.com";
  const letters = text.split("");
  const leterElements = letters.map((letter) => (
    <span key={i++}>{letter}</span>
  ));

  return (
    <div id="Contacts" className="contactPage">
      <div className="emailText">
        <h4>{leterElements}</h4>
      </div>
    </div>
  );
};

export default Contacts;
