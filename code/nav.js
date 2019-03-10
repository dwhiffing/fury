import React from 'react'

const Nav = ({ _nav, tabs }) => (
  <div className="nav-container">
    <div className="mobile-container">
      <a href={`${process.env.NODE_ENV === 'production' ? '/fury' : '/'}`}>
        <img className="logo" src={`/assets/images/logo.png`} />
      </a>
    </div>
    <ul>
      <li className={`nav-top-button tab-home`}>
        <a href={`${process.env.NODE_ENV === 'production' ? '/fury' : '/'}`}>
          <img className="logo" src={`/assets/images/logo.png`} />
        </a>
      </li>
      <div className="tab-container">
        {Object.keys(tabs).map(tabKey => {
          const tab = tabs[tabKey]
          let path = _nav.index[tabKey] || ''
          let pathName = typeof path === 'string' ? path : tabKey

          return (
            <li className={`nav-top-button tab-${pathName}`}>
              <a href={`/${pathName}`}>{tab.label}</a>
              {typeof path === 'object' && (
                <ul className="dropdown">
                  {tab.items.map(item => {
                    const mainHref = `/${pathName}/${item.path}`
                    const renderDropdown = !['Iceland', 'Luxembourg'].includes(
                      item.label,
                    )
                    return (
                      <li>
                        <a href={mainHref}>{item.label}</a>
                        {renderDropdown && (
                          <ul className="dropdown">
                            {['Air Force', 'Army', 'Navy'].map(label => {
                              const subPath = label.toLowerCase().split(' ')[0]
                              return (
                                <li>
                                  <a href={`${mainHref}/${subPath}`}>{label}</a>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </div>
    </ul>
  </div>
)

export default Nav
