import React from "react";

interface CardTypes {
  icon?: React.ReactNode;
  title: string;
  content: string | [];
  variant?: string | undefined;
  thumb?: string;
}

const Card = ({ icon, title, content, variant, thumb }: CardTypes) => {
  return (
    <li className={`card${variant ? " " + variant : ""}`}>
      {icon}
      <h3>{title}</h3>
      {thumb ? <img src={thumb} alt="" /> : ""}

      {typeof content === "string" ? (
        <p>{content}</p>
      ) : (
        <ul>
          {content.map((content) => (
            <li>{content}</li>
          ))}
        </ul>
      )}
      {variant !== "third" ? (
        ""
      ) : (
        <div>
          <p>repo</p>
          <p>deploy</p>
          <p>info</p>
        </div>
      )}
    </li>
  );
};

export default Card;
