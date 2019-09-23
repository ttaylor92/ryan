import React from "react";
import "./anim.css";

export default class Animations extends React.Component {
  render() {
    return (
      <div className="animations">
        <div
          id="ball-one"
          className="bounce"
          style={{
            background: "url(/images/logo-trans.png) no-repeat",
            backgroundSize: "100px 100px"
          }}
        ></div>
        <div
          id="ball-two"
          className="bounce1"
          style={{
            background: "url(/images/logo-trans.png) no-repeat",
            backgroundSize: "80px 80px"
          }}
        >
          >
        </div>
        <div
          id="ball-three"
          className="bounce2"
          style={{
            background: "url(/images/logo-trans.png) no-repeat",
            backgroundSize: "90px 90px"
          }}
        >
          >
        </div>
        <div
          id="ball-four"
          className="bounce3"
          style={{
            background: "url(/images/logo-trans.png) no-repeat",
            backgroundSize: "60px 60px"
          }}
        >
          >
        </div>
        <div
          id="ball-five"
          className="bounce4"
          style={{
            background: "url(/images/logo-trans.png) no-repeat",
            backgroundSize: "120px 120px"
          }}
        >
          >
        </div>

        <div className="demo demo-wrap">
          <div
            className="ball"
            style={{
              background: "url(/images/logo-trans.png) no-repeat",
              backgroundSize: "160px 160px"
            }}
          ></div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="item">
          <div className="inner"></div>
        </div>
        <div className="item">
          <div className="inner"></div>
        </div>
        <div className="item">
          <div className="inner"></div>
        </div> */
}
