import React, { Fragment } from 'react'
import { sanitizeLabel, getShouldRenderDeepLinks } from './utils'

const prefix = process.env.NODE_ENV === 'production' ? '/fury' : ''

const Link = ({ label, linkKey, isActive, children }) => {
  return (
    <li>
      <a
        href={`${prefix}/${linkKey}`}
        style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
        {label}
      </a>
      {children}
    </li>
  )
}

const Aside = ({ nav, pages, pathArray }) => {
  const [name, pathCountry] = pathArray
  const links = nav.index[name]

  const renderDeepLinks = data => {
    if (typeof data !== 'object') {
      return null
    }
    
    const deepLinks = Object.keys(data).sort((a, b) => {
      const pageAPosition = typeof pages[a].position === 'number' ? pages[a].position : 0
      const pageBPosition = typeof pages[b].position === 'number' ? pages[b].position : 0
      return pageAPosition > pageBPosition ? 1 : -1
    })

    return (
      <ul>
        {deepLinks.map(key => {
          const navData = data[key]
          const keyPath = key.split('/')
          const isActivePage = keyPath[keyPath.length - 1] === pathArray[keyPath.length - 1]

          return (
            <Fragment key={`link-${key}`}>
              <li>
                <a
                  href={`${prefix}/${key}`}
                  style={{ fontWeight: isActivePage ? 'bold' : 'normal' }}
                >
                  {sanitizeLabel(pages[key].label)} {keyPath.length > 2 && typeof navData === 'object' && '+'}
                </a>
              </li>
              {getShouldRenderDeepLinks(pathArray, keyPath) && renderDeepLinks(navData)}
            </Fragment>
          )
        })}
      </ul>
    )
  }

  const renderedLinks = Object.keys(links)
    .sort((a, b) => {
      const pageALabel = pages[a].label.replace('The ', '')
      const pageBLabel = pages[b].label.replace('The ', '')
      return pageALabel[0] > pageBLabel[0] ? 1 : -1
    })
    .map(linkKey => (
      <Link
        key={`link-${linkKey}`}
        linkKey={linkKey}
        isActive={linkKey.split('/')[1] === pathCountry}
        label={pages[linkKey].label}
      >
        {linkKey.split('/')[1] === pathCountry && renderDeepLinks(nav.index[name][linkKey])}
      </Link>
    ))

  return (
    <Fragment>
      <ul>{renderedLinks.slice(0, renderedLinks.length / 2)}</ul>
      <ul>{renderedLinks.slice(renderedLinks.length / 2, renderedLinks.length)}</ul>
    </Fragment>
  )
}

export default Aside
