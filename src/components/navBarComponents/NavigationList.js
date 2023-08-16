import React from 'react'
import { Link } from 'react-router-dom'
export default function NavigationList({showModal}) {
  return (
   <>
   <div className="item1"><Link to="/" style={{textDecoration:"none", color:"White"}}>HOME</Link></div>
   <div className="item2"><Link to="/bicycle" style={{textDecoration:"none", color:"White"}}>BICYCLES</Link></div>
   <div className="item3"><Link to="/contact" style={{textDecoration:"none", color:"White"}}>CONTACT</Link></div>
   <div className="item4"><Link style={{textDecoration:"none", color:"White"}} onClick={showModal}>SIGN-IN/SIGN-UP</Link></div>
   </>
  )
}
