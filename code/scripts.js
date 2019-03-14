import React, { Fragment } from 'react'

export const GoogleAnalytics = () => (
<Fragment>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136109754-1"></script>
  <script type="text/javascript" dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)};gtag('js', new Date()); gtag('config', 'UA-136109754-1');`}} />
</Fragment>
)
  
export const MailChimp = () => (
<Fragment>
  <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>
  <script type="text/javascript" dangerouslySetInnerHTML={{__html: `window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us20.list-manage.com","uuid":"40207b1c822d45c9de3c64ade","lid":"a5cb1201d5","uniqueMethods":true })})`}}></script>
</Fragment>
)