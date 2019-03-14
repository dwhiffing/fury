import React, { Fragment } from 'react'

const prefix = process.env.NODE_ENV === 'production' ? '/fury' : ''

const regex = /(Air Force|Navy|Army)/

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

const Aside = ({ nav, pages, pathArray }) => {
  const [name, currentCountry, currentSection] = pathArray

  const renderDeepLinks = data => {
    let list = Object.keys(data)

    list = list.sort((a, b) => {
      const pageAPosition = pages[a].position || -1
      const pageBPosition = pages[b].position || -1
      return pageAPosition > pageBPosition ? 1 : -1
    })

    return (
      <ul>
        {list.map(key => {
          const navData = data[key]
          const page = pages[key]
          const splitKey = key.split('/')
          const renderedPage = splitKey[splitKey.length - 1]
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

          const isActiveSection = splitKey[2] === currentSection && splitKey.length < 4
          const isActivePage = pathArray[pathArray.length - 1] === splitKey[splitKey.length - 1]
          const isActive = isActiveSection || isActivePage
          const shouldRenderDeepLinks = splitKey.length < 4 || pathArray[3] === splitKey[3]

          const link = (
            <li key={`link-${key}`}>
              <a
                href={`${prefix}/${key}`}
                style={{
                  fontWeight: isActive ? 'bold' : 'normal'
                }}
              >
                {label} {splitKey.length > 2 && typeof navData === 'object' && '+'}
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
                {(isActive && shouldRenderDeepLinks || pathArray[4] === 'mef') && renderDeepLinks(navData)}
              </Fragment>
            )
          }
        })}
      </ul>
    )
  }

  const renderLinks = key => {
    const countryNavData = nav.index[name][key]
    const label = pages[key].label
    const isActive = key.split('/')[1] === currentCountry

    return (
      <li key={`link-${key}`}>
        <a style={{ fontWeight: isActive ? 'bold' : 'normal' }} href={`${prefix}/${key}`}>{label}</a>

        {typeof countryNavData === 'object' && isActive && renderDeepLinks(countryNavData)}
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
      <ul>
        {renderedLinks.slice(0, renderedLinks.length / 2)}
      </ul>
      <ul>
        {renderedLinks.slice(renderedLinks.length / 2, renderedLinks.length)}
      </ul>
    </Fragment>
  )
}

export default Aside
