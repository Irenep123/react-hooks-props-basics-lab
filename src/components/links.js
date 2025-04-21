import React from "react";

function Links({ github, linkedin }) {
  return (
    <div id="links">
      <h4>Links</h4>
      <a href={github}>{github}</a>
      <br />
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}
export default Links;
