import React, { Fragment } from 'react'

const prefix = process.env.NODE_ENV === 'production' ? '/fury' : ''

const regex = /(Air Force|Navy|Army)/

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

const Aside = ({ nav, pages, name, currentCountry, currentSection, _ID }) => {
  const sortedKeys = Object.keys(nav.index[name]).sort((a, b) => {
    const pageALabel = pages[a].label.replace('The ', '')
    const pageBLabel = pages[b].label.replace('The ', '')
    return pageALabel[0] > pageBLabel[0] ? 1 : -1
  })

  const renderDeepLinks = data => {
    return (
      <ul>
        {Object.keys(data).map(key => {
          const navData = data[key]
          const page = pages[key]
          const pathArray = key.split('/')
          const renderedPage = pathArray[pathArray.length - 1]
          const fallbackLabel = renderedPage
            .replace('-', ' ')
            .capitalize()

          const pageLabel = page.label || page.title || fallbackLabel
          const match = pageLabel.match(regex)
          let label = match ? match[0] : pageLabel
          const sanitizedLabel = label.replace(/MEF|Amphibious|Naval Aviation/g, '').trim()
          if (sanitizedLabel !== '') {
            label = sanitizedLabel
          }

          const isActiveSection = pathArray[2] === currentSection && pathArray.length < 4
          const isActivePage = _ID[_ID.length - 1] === pathArray[pathArray.length - 1]
          const isActive = isActiveSection || isActivePage
          const shouldRenderDeepLinks = pathArray.length < 4 || _ID[3] === pathArray[3]

          const link = (
            <li key={`link-${key}`}>
              <a
                href={`${prefix}/${key}`}
                style={{
                  fontWeight: isActive ? 'bold' : 'normal'
                }}
              >
                {label} {pathArray.length > 2 && typeof navData === 'object' && '+'}
              </a>
            </li>
          )

          if (typeof navData === 'string') {
            return link
          } else {
            return (
              <Fragment key={`link-${key}`}>
                {link}
                {/* need to fix MEF being weird due to extra nesting */}
                {(isActive && shouldRenderDeepLinks || _ID[4] === 'mef') && renderDeepLinks(navData)}
              </Fragment>
            )
          }
        })}
      </ul>
    )
  }

  const renderLinks = key => {
    const countryNavData = nav.index[name][key]
    const page = pages[key]
    const isActive = key.split('/')[1] === currentCountry
    const shouldRenderDeepLinks =
      typeof countryNavData === 'object' && isActive

    return (
      <li key={`link-${key}`}>
        <a style={{ fontWeight: isActive ? 'bold' : 'normal' }} href={`${prefix}/${key}`}>{page.label}</a>

        {shouldRenderDeepLinks && renderDeepLinks(countryNavData)}
      </li>
    )
  }

  return (
    <Fragment>
      <ul>{sortedKeys.slice(0, sortedKeys.length / 2).map(renderLinks)}</ul>
      <ul>
        {sortedKeys
          .slice(sortedKeys.length / 2, sortedKeys.length)
          .map(renderLinks)}
      </ul>
    </Fragment>
  )
}

export default Aside
