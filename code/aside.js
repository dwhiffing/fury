import React, { Fragment } from 'react'

const prefix = process.env.NODE_ENV === 'production' ? '/fury' : ''

const sanitizeLabel = (label) => {
  const match = label.match(/(Air Force|Navy|Army)/)
  const sanitizedLabel = match ? match[0] : label

  return sanitizedLabel.replace(/Naval Aviation |MEF |Amphibious /, '')
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

const Aside = ({ nav, pages, pathArray }) => {
  const [name, currentCountry, currentSection] = pathArray

  
  const renderDeepLinks = data => {
    if (typeof data !== 'object') {
      return null
    }
    
    let list = Object.keys(data)

    list = list.sort((a, b) => {
      const pageAPosition = typeof pages[a].position === 'number' ? pages[a].position : 0
      const pageBPosition = typeof pages[b].position === 'number' ? pages[b].position : 0
      return pageAPosition > pageBPosition ? 1 : -1
    })

    return (
      <ul>
        {list.map(key => {

          const navData = data[key]
          const splitKey = key.split('/')
          const isActiveSection = splitKey[2] === currentSection && splitKey.length < 4
          const isActivePage = pathArray[pathArray.length - 1] === splitKey[splitKey.length - 1]
          const isActive = isActiveSection || isActivePage
          
          const [_nat, pathCountry, pathGroup, pathGroup2] = pathArray
          const [_nat1, renderedCountry, renderedGroup, renderedGroup2] = splitKey

          let shouldRenderDeepLinks = pathCountry === renderedCountry

          if (renderedGroup) {
            shouldRenderDeepLinks = pathGroup === renderedGroup
          }

          if (renderedGroup2) {
            shouldRenderDeepLinks = pathGroup2 === renderedGroup2
          }

          const link = (
            <li key={`link-${key}`}>
              <a
                href={`${prefix}/${key}`}
                style={{ fontWeight: isActive ? 'bold' : 'normal' }}
              >
                {sanitizeLabel(pages[key].label)} {splitKey.length > 2 && typeof navData === 'object' && '+'}
              </a>
            </li>
          )

          if (typeof navData === 'string') {
            return link
          } else {
            return (
              <Fragment key={`link-${key}`}>
                {link}
                {shouldRenderDeepLinks && renderDeepLinks(navData)}
              </Fragment>
            )
          }
        })}
      </ul>
    )
  }

  const renderLinks = key => {
    const isActive = key.split('/')[1] === currentCountry

    return (
      <li key={`link-${key}`}>
        <a style={{ fontWeight: isActive ? 'bold' : 'normal' }} href={`${prefix}/${key}`}>{pages[key].label}</a>
        {isActive && renderDeepLinks(nav.index[name][key])}
      </li>
    )
  }

  const renderedLinks = Object.keys(nav.index[name]).sort((a, b) => {
    const pageALabel = pages[a].label.replace('The ', '')
    const pageBLabel = pages[b].label.replace('The ', '')
    return pageALabel[0] > pageBLabel[0] ? 1 : -1
  }).map(renderLinks)

  return (
    <Fragment>
      <ul>{renderedLinks.slice(0, renderedLinks.length / 2)}</ul>
      <ul>{renderedLinks.slice(renderedLinks.length / 2, renderedLinks.length)}</ul>
    </Fragment>
  )
}

export default Aside
