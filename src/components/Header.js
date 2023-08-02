import React from 'react'
import "./static_css/Header.css"
export default function Header(props) {
  return (
    <div>
      <div className="header">{props.header}</div>
    </div>
  )
}
