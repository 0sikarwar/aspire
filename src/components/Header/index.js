import { Link } from "gatsby-link"
import React from "react"
import "./index.css"
import logo from "../../images/logo.webp"
import chevronDown from "../../images/chevron_down.webp"

const NavList = [
  {
    text: "Products",
    url: "#",
  },
  {
    text: "Solutions",
    url: "",
  },
  {
    text: "Why Aspire",
    url: "#",
  },
  {
    text: "Resources",
    url: "#",
  },
  {
    text: "Pricing",
    url: "#",
  },
]

const Header = () => {
  return (
    <header>
      <div className="header base-container">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Aspire" />
        </Link>
        <ul className="header-nav">
          {NavList.map(({ text, url }, index) => {
            return (
              <li key={index} className="header-nav-item">
                <Link to={url}>
                  {text}
                  <img src={chevronDown} alt="" />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header
