import React from "react"
import './Nav.css'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
      <div className="link-list">
        <div className="link-list__wrap">
          <Link
            to='/profile'
            className="link-list__link"
          >
            Profile
          </Link>
        </div>
        <div className="link-list__wrap">
          <Link
            to='/masseges'
            className="link-list__link"
          >
            Masseges
          </Link>
        </div>
        <div className="link-list__wrap">
          <Link
            to='/news'
            className="link-list__link"
          >
            News
          </Link>
        </div>
        <div className="link-list__wrap">
          <Link
            to='/music'
            className="link-list__link"
          >
            Music
          </Link>
        </div>
        <div className="link-list__wrap">
          <Link
            to='/settings'
            className="link-list__link"
          >
            Settings
          </Link>
        </div>
        <div className="link-list__wrap">
          <Link
            to='/formTest'
            className="link-list__link"
          >
            Form test
          </Link>
        </div>
      </div>
    </nav>
  );
};