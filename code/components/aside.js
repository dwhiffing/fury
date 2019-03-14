import React, { Fragment } from 'react'
import { getShouldRenderDeepLinks } from '../utils'
import { Link } from './link'

const Aside = ({ nav, pages, pathArray }) => {
  const [name, pathCountry] = pathArray
  const links = nav.index[name]

  const renderDeepLinks = data => {
    if (typeof data !== 'object') {
      return null
    }

    const deepLinks = Object.keys(data).sort((a, b) => {
      const pageAPosition =
        typeof pages[a].position === 'number' ? pages[a].position : 0
      const pageBPosition =
        typeof pages[b].position === 'number' ? pages[b].position : 0
      return pageAPosition > pageBPosition ? 1 : -1
    })

    return (
      <ul>
        {deepLinks.map(key => (
          <Fragment key={`link-${key}`}>
            <Link
              linkKey={key}
              isActive={
                key.split('/')[key.split('/').length - 1] ===
                pathArray[key.split('/').length - 1]
              }
              label={pages[key].label}
              displayDeeplinkIcon={typeof data[key] === 'object'}
            />
            {getShouldRenderDeepLinks(pathArray, key.split('/')) &&
              renderDeepLinks(data[key])}
          </Fragment>
        ))}
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
        label={pages[linkKey].label}>
        {linkKey.split('/')[1] === pathCountry &&
          renderDeepLinks(nav.index[name][linkKey])}
      </Link>
    ))

  return (
    <Fragment>
      <ul>{renderedLinks.slice(0, renderedLinks.length / 2)}</ul>
      <ul>
        {renderedLinks.slice(renderedLinks.length / 2, renderedLinks.length)}
      </ul>
    </Fragment>
  )
}

export default Aside
