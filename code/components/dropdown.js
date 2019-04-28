import React from 'react'
import { PREFIX } from '../page'

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
      const href = `${PREFIX}/${pathName}/${path}`

      return (
        <Item key={`inner-nav-${href}`} label={label} href={href}>
          {!WIDOW_COUNTRIES.includes(label) && (
            <ul className="dropdown">
              {GROUP_LABELS.filter(groupLabel => {
                if (path === 'cz' && groupLabel[1] === 'navy') {
                  return false
                }
                if (path === 'hu' && groupLabel[1] === 'navy') {
                  return false
                }
                if (path === 'pl' && groupLabel[1] === 'air') {
                  return false
                }
                return true
              }).map(([groupLabel, groupPath]) => (
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
