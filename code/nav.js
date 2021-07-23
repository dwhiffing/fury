import React from 'react'
import Dropdown from './components/dropdown'
import { PREFIX } from './page'

const Logo = () => (
  <a href={`${PREFIX}/`}>
    <img className="logo" src={`${PREFIX}/assets/images/logo.png`} />
  </a>
)

const Nav = ({ _nav, _pages }) => {
  const tabs = {}
  Object.entries(_pages).forEach(([k, v]) => {
    const keys = k.split('/')
    if (keys.length === 1 && v._url !== '/') {
      tabs[keys[0]] = { label: v.label || 'index', url: v._url, items: [] }
    }
  })

  Object.entries(_pages).forEach(([k, v]) => {
    const keys = k.split('/')
    if (keys.length === 2 && tabs[keys[0]]) {
      tabs[keys[0]].items = [
        ...(tabs[keys[0]].items || []),
        { label: v.label, url: v._url },
      ]
    }
  })

  Object.entries(_pages).forEach(([k, v]) => {
    const keys = k.split('/')
    const [key1, key2 = 'index', key3 = 'index'] = keys
    if (keys.length === 3 && tabs[key1]) {
      tabs[key1].items = (tabs[key1].items || []).map((item) => {
        if (item.url.split('/')[2] === key2) {
          return {
            ...item,
            subitems: [
              ...(item.subitems || []),
              { label: v.label, url: v._url },
            ],
          }
        }
        return item
      })
    }
  })

  return (
    <div className="nav-container">
      <div className="mobile-container">
        <Logo />
      </div>

      <ul>
        <li className={`nav-top-button tab-home`}>
          <Logo />
        </li>

        <div className="tab-container">
          {Object.keys(tabs)
            .sort((a, b) => {
              if (a === 'overview') return -1
              if (a === 'aar') return 1

              return 0
            })
            .map((tabKey) => {
              const tab = tabs[tabKey]
              let path = _nav.index[tabKey] || ''
              let pathName = typeof path === 'string' ? path : tabKey
              return (
                <li
                  key={`nav-${tab.url}`}
                  className={`nav-top-button tab-${pathName}`}
                >
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
}

export default Nav
