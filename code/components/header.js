import React, { Fragment } from 'react'
import { PREFIX } from '../page'
import { capitalize } from './link'

const Header = ({ nav, label }) => (
  <Fragment>
    <header className="about">
      <div className="container">
        <p>Alternative Cold War History 1994</p>
        <span>
          <a href="#">Facebook</a>
          <span> | </span>
          <a href="https://twitter.com/NorthernFury94">Twitter</a>
          <span> | </span>
          <a href={`${PREFIX}/blog/post2`}>Blog</a>
          <span> | </span>
          <a href="mailto:northernfury94@gmail.com">Email us</a>
        </span>
      </div>
    </header>

    <nav>{nav}</nav>

    {label && (
      <header className="title">
        <h1>{capitalize(label)}</h1>
      </header>
    )}
  </Fragment>
)

export default Header
