import React from "react";

interface CardTypes {
  icon?: React.ReactNode;
  title: string;
  content: string[] | string;
  variant?: string | undefined;
  thumb?: string;
  repoUrl?: string;
  deployUrl?: string;
}

const Card = ({ icon, title, content, variant, thumb, repoUrl, deployUrl }: CardTypes) => {
  return (
    <li className={`card${variant ? " " + variant : ""}`}>
      <h3>{title}</h3>
      {icon}
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
          <a target="_blank" href={repoUrl}>repo</a>
          {deployUrl && <a target={deployUrl} href={deployUrl}>deploy</a>}
          <p >info</p>
        </div>
      )}
    </li>
  );
};

export default Card;
