import React from 'react'
import { PREFIX } from '../page'

const Dropdown = ({ tab, pathName }) => (
  <ul className="dropdown">
    {tab.items.map(({ label, url, subitems = [] }) => (
      <Item key={`inner-nav-${url}`} label={label} href={url}>
        <ul className="dropdown">
          {subitems.map((subitem) => (
            <Item
              key={`inner-nav-${subitem.url}`}
              label={subitem.label}
              href={subitem.url}
            />
          ))}
        </ul>
      </Item>
    ))}
  </ul>
)

const Item = ({ label, href, children }) => (
  <li>
    <a href={`${PREFIX}${href}`}>{label}</a>
    {children}
  </li>
)

export default Dropdown
