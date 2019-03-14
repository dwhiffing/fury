export const sanitizeLabel = label => {
  const match = label.match(/(Air Force|Navy|Army)/)
  const sanitizedLabel = match ? match[0] : label

  return sanitizedLabel.replace(/Naval Aviation |MEF |Amphibious /, '')
}

export const getShouldRenderDeepLinks = (currentPath, keyPath) => {
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
