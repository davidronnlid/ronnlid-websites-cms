import React, { Component } from "react"
import "../styles/scndFancyButton.css"
import Helmet from "react-helmet"

export class ScndFancyButton extends Component {
  render() {
    const { firstOrSecond, text, linkTo } = this.props //If first button should be rendered, boolean prop is true & vice versa
    return (
      <>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
          />
        </Helmet>
        {firstOrSecond ? (
          <div className="wrapper">
            <a href={linkTo} className="fancybutton pop-onhover bg-gradient1">
              <span>{text}</span>
            </a>
          </div>
        ) : (
          <div className="wrapper">
            <a href={linkTo} className="fancybutton pop-onhover bg-gradient3">
              <span>{text}</span>
            </a>
          </div>
        )}
      </>
    )
  }
}

export default ScndFancyButton
