import React, { Fragment } from 'react'
import { Link } from './link'

const Aside = ({ nav, pages, pathArray }) => {
  const [name, pathCountry] = pathArray
  const links = nav.index[name]

  const renderDeepLinks = data =>
    typeof data === 'object' && (
      <ul>
        {Object.keys(data)
          .sort(sortLinksByPosition(pages))
          .map(key => {
            const keyArray = key.split('/')
            const lastKey = keyArray.length - 1

            return (
              <Fragment key={`link-${key}`}>
                <Link
                  linkKey={key}
                  label={pages[key].label}
                  isActive={keyArray[lastKey] === pathArray[lastKey]}
                  displayDeeplinkIcon={typeof data[key] === 'object'}
                />
                {getShouldRenderDeepLinks(pathArray, keyArray) &&
                  renderDeepLinks(data[key])}
              </Fragment>
            )
          })}
      </ul>
    )

  const render = Object.keys(links)
    .sort(sortLinksByLabel(pages))
    .map(linkKey => {
      const isActiveCountry = linkKey.split('/')[1] === pathCountry

      return (
        <Link
          key={`link-${linkKey}`}
          linkKey={linkKey}
          isActive={isActiveCountry}
          label={pages[linkKey].label}>
          {isActiveCountry && renderDeepLinks(nav.index[name][linkKey])}
        </Link>
      )
    })

  return (
    <Fragment>
      <ul>{render.slice(0, render.length / 2)}</ul>
      <ul>{render.slice(render.length / 2, render.length)}</ul>
    </Fragment>
  )
}

export default Aside

const getShouldRenderDeepLinks = (currentPath, keyPath) => {
  const [name, pathCountry, pathGroup, pathGroup2] = currentPath
  const [name2, keyCountry, keyGroup, keyGroup2] = keyPath

  if (keyGroup2) {
    return pathGroup2 === keyGroup2
  }

  if (keyGroup) {
    return pathGroup === keyGroup
  }

  return pathCountry === keyCountry
}

const sortLinksByLabel = pages => (a, b) => {
  const pageALabel = pages[a].label.replace('The ', '')
  const pageBLabel = pages[b].label.replace('The ', '')
  return pageALabel[0] > pageBLabel[0] ? 1 : -1
}

const sortLinksByPosition = pages => (a, b) => {
  const pageAPosition =
    typeof pages[a].position === 'number' ? pages[a].position : 0
  const pageBPosition =
    typeof pages[b].position === 'number' ? pages[b].position : 0
  return pageAPosition > pageBPosition ? 1 : -1
}
