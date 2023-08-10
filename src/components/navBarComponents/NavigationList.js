import React from 'react'
import { Link } from 'react-router-dom'
export default function NavigationList() {
  return (
   <>
   <div className="item1"><Link to="/" style={{textDecoration:"none", color:"White"}}>HOME</Link></div>
   <div className="item2"><Link to="/bicycle" style={{textDecoration:"none", color:"White"}}>BICYCLES</Link></div>
   <div className="item5"><Link to="/contact" style={{textDecoration:"none", color:"White"}}>CONTACT</Link></div>
   </>
  )
}
