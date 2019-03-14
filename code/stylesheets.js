import React, { Fragment } from 'react'

const StyleSheet = ({ href }) => <link rel="stylesheet" href={href} />

const StyleSheets = ({ _relativeURL, _ID }) => (
  <Fragment>
    <StyleSheet href="https://fonts.googleapis.com/css?family=Exo:300,400,500" />
    <StyleSheet href="https://fonts.googleapis.com/css?family=Droid+Serif:300,400,500" />
    <StyleSheet href={_relativeURL('/assets/css/normalize.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/skeleton.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/site.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/main.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/nav.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/text.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/utils.css', _ID)} />
  </Fragment>
)

export default StyleSheets
