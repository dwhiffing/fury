import React, { Fragment } from 'react'

const Head = ({ _relativeURL, _ID }) => (
  <head>
    <title>Northern Fury</title>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon.ico" />

    <StyleSheet href="https://fonts.googleapis.com/css?family=Exo:300,400,500" />
    <StyleSheet href="https://fonts.googleapis.com/css?family=Droid+Serif:300,400,500" />
    <StyleSheet href={_relativeURL('/assets/css/normalize.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/skeleton.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/site.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/main.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/nav.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/text.css', _ID)} />
    <StyleSheet href={_relativeURL('/assets/css/utils.css', _ID)} />

    <GoogleAnalytics />

    {_ID === 'index' && <MailChimp />}
  </head>
)

const StyleSheet = ({ href }) => <link rel="stylesheet" href={href} />

const GoogleAnalytics = () => (
  <Fragment>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-136109754-1"
    />
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)};gtag('js', new Date()); gtag('config', 'UA-136109754-1');`,
      }}
    />
  </Fragment>
)

const MailChimp = () => (
  <Fragment>
    <script
      type="text/javascript"
      src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js"
      data-dojo-config="usePlainJson: true, isDebug: false"
    />
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us20.list-manage.com","uuid":"40207b1c822d45c9de3c64ade","lid":"a5cb1201d5","uniqueMethods":true })})`,
      }}
    />
  </Fragment>
)

export default Head
