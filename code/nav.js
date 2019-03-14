import React from 'react'
import Dropdown from './components/Dropdown'

const prefix = process.env.NODE_ENV === 'production' ? '/fury' : ''

const Logo = () => (
  <a href={`${prefix}/`}>
    <img className="logo" src={`${prefix}/assets/images/logo.png`} />
  </a>
)

const Nav = ({ _nav, tabs }) => (
  <div className="nav-container">
    <div className="mobile-container">
      <Logo />
    </div>

    <ul>
      <li className={`nav-top-button tab-home`}>
        <Logo />
      </li>

      <div className="tab-container">
        {Object.keys(tabs).map(tabKey => {
          const tab = tabs[tabKey]
          let path = _nav.index[tabKey] || ''
          let pathName = typeof path === 'string' ? path : tabKey

          return (
            <li
              key={`nav-${tabKey}`}
              className={`nav-top-button tab-${pathName}`}>
              <a href={`${prefix}/${pathName}`}>{tab.label}</a>

              {typeof path === 'object' && (
                <Dropdown tab={tab} pathName={pathName} />
              )}
            </li>
          )
        })}
      </div>
    </ul>
  </div>
)

export default Nav
