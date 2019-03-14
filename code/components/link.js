import React from 'react'
import { PREFIX } from '../page'

const sanitizeLabel = label => {
  const match = label.match(/(Air Force|Navy|Army)/)
  const sanitizedLabel = match ? match[0] : label

  return sanitizedLabel.replace(/Naval Aviation |MEF |Amphibious /, '')
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
