import React from 'react'
import { PREFIX } from '../page'

export const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

const sanitizeLabel = label => {
  const match = label.match(/(Air Force|Navy|Army)/)
  const sanitizedLabel = match ? match[0] : label
  if (sanitizedLabel.match(/air/)) {
    return 'Air Force'
  }

  return capitalize(
    sanitizedLabel.replace(/Naval Aviation |MEF |Amphibious /, '')
  )
}

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
        href={`${PREFIX}/${linkKey}`}
        style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
        {sanitizeLabel(label)}
        {displayDeeplinkIcon ? ' +' : ''}
      </a>
      {children}
    </li>
  )
}
