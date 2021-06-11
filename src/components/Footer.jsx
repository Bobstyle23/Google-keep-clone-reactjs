import React, { Component } from "react";

class Footer extends Component {
  state = {};

  render() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return (
      <div>
        <footer>
          <p>Copyright {currentYear}</p>
        </footer>
      </div>
    );
  }
}

export default Footer;
