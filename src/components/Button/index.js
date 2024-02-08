import React from "react"
import "./index.css"

const Button = ({
  type = "primary",
  text,
  onClick = () => void 0,
  className,
  url = "#",
}) => {
  return (
    <div
      className={`button-component ${className || ""} button-component-${type}`}
      onClick={onClick}
    >
      <a className="button-component-anchor" href={url}>
        {text}
      </a>
    </div>
  )
}

export default Button
