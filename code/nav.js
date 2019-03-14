import React from 'react'
import Dropdown from './components/Dropdown'
import { PREFIX } from './page'

const Logo = () => (
  <a href={`${PREFIX}/`}>
    <img className="logo" src={`${PREFIX}/assets/images/logo.png`} />
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
              <a href={`${PREFIX}/${pathName}`}>{tab.label}</a>

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
