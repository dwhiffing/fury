import React from 'react'
import { sanitizeLabel } from '../utils'

const prefix = process.env.NODE_ENV === 'production' ? '/fury' : ''

export const Link = ({
  label,
  linkKey,
  isActive,
  displayDeeplinkIcon,
  children,
}) => {
  return (
    <li>
      <a
        href={`${prefix}/${linkKey}`}
        style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
        {sanitizeLabel(label)}
        {displayDeeplinkIcon ? ' +' : ''}
      </a>
      {children}
    </li>
  )
}
