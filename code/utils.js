export const sanitizeLabel = (label) => {
  const match = label.match(/(Air Force|Navy|Army)/)
  const sanitizedLabel = match ? match[0] : label

  return sanitizedLabel.replace(/Naval Aviation |MEF |Amphibious /, '')
}

export const getShouldRenderDeepLinks = (currentPath, keyPath) => {
  const [name, pathCountry, pathGroup, pathGroup2] = currentPath
  const [name2, keyCountry, keyGroup, keyGroup2] = keyPath
  let shouldRenderDeepLinks = pathCountry === keyCountry

  if (keyGroup) {
    shouldRenderDeepLinks = pathGroup === keyGroup
  }

  if (keyGroup2) {
    shouldRenderDeepLinks = pathGroup2 === keyGroup2
  }

  return shouldRenderDeepLinks
}