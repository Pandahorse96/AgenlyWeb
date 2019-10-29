import { Link } from "gatsby"
import React from "react"
import InputButton from "./inputButton"

const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__logo'>
        <Link to="/">
          Agenly
        </Link>
      </div>
      <div className='Header__links'>
        <Link to='/why'>Why?</Link>
        {/* <span>Newsletter</span> */}
        <InputButton />
      </div>
    </header>
  )
}

export default Header
