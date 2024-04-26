import React from "react";
import "./card.scss";

const Card = ({ title, text }: { title: string; text: string }) => {
  return (
    <section className="card">
      <h5>{title}</h5>
      <p>{text}</p>
    </section>
  );
};

export default Card;
