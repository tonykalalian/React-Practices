import React from "react";
import Contact from "../contacts";

const Card = () => {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      {Contact.map((contact) => (
        <div className="card">
          <div className="top">
            <h2 className="name">{contact.name}</h2>
            <img src={contact.imgURL} alt="avatar_img" className="circle-img" />
          </div>
          <div className="bottom">
            <p className="info">{contact.phone}</p>
            <p className="info">{contact.email}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
