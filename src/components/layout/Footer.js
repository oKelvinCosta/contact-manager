import React, { Component } from "react";
import Colors from "../Colors";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer center">
        <p>
          Made by{" "}
          <a
            className="shake-slow shake-constant"
            href="https://www.behance.net/okelvincosta"
          >
            <b style={{ color: Colors.primary }}>Kelvin Costa</b>
          </a>
        </p>
      </div>
    );
  }
}
