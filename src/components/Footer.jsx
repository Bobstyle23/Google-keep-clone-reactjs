import React from "react";

function Footer() {
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright ©️ {currentYear}</p>
        <p>BobStyle_023 Soft production</p>
      </footer>
    </div>
  );
}

export default Footer;
