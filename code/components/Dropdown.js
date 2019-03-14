import React from 'react'

const prefix = process.env.NODE_ENV === 'production' ? '/fury' : ''
const WIDOW_COUNTRIES = ['Iceland', 'Luxembourg']
const GROUP_LABELS = [['Air Force', 'air'], ['Army', 'army'], ['Navy', 'navy']]

const Item = ({ label, href, children }) => (
  <li>
    <a href={href}>{label}</a>
    {children}
  </li>
)

const Dropdown = ({ tab, pathName }) => (
  <ul className="dropdown">
    {tab.items.map(({ label, path }) => {
      const href = `${prefix}/${pathName}/${path}`

      return (
        <Item key={`inner-nav-${href}`} label={label} href={href}>
          {!WIDOW_COUNTRIES.includes(label) && (
            <ul className="dropdown">
              {GROUP_LABELS.map(([groupLabel, groupPath]) => (
                <Item
                  key={`inner-nav-${href}-${groupLabel}`}
                  label={groupLabel}
                  href={`${href}/${groupPath}`}
                />
              ))}
            </ul>
          )}
        </Item>
      )
    })}
  </ul>
)

export default Dropdown
