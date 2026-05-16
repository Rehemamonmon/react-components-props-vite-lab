import react from "react";

function Article({ title, date, preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date ||"September 15, 2026"}</small>
      <p>{preview}</p>
      <p>{minutes} minutes read</p>
    </article>
  );
}

export default Article;