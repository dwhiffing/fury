import React from 'react'
import Aside from './aside'
import Header from './header'
import StyleSheets from './stylesheets'
import Article from './article'
import { GoogleAnalytics, MailChimp } from './scripts'

const Page = ({
  nav,
  label,
  main,
  _relativeURL,
  _nav,
  _ID,
  _pages,
}) => {
  const pathArray = _ID.split('/')
  const page = _pages[_ID]

  return (
    <html>
      <head>
        <title>Northern Fury</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='shortcut icon' type='image/x-icon' href='/assets/favicon.ico' />

        <StyleSheets _relativeURL={_relativeURL} _ID={_ID} />

        <GoogleAnalytics />
        {_ID === 'index' && <MailChimp />}
      </head> 

      <body>
        <Header />

        <nav>{nav}</nav>

        {label && <header className="title"><h1>{label}</h1></header>}

        <main>
          {_ID !== 'index' && (
            <aside>
              {['nato', 'warsaw', 'scenarios'].includes(pathArray[0]) &&  (
                <Aside nav={_nav} pages={_pages} pathArray={pathArray} />
              )}
            </aside>
          )}

          {_ID === 'index' ? main : (
            <Article renderFlag={page.isIndexPage} url={page._url}>
              {main}
            </Article>
          )}
        </main>

        <footer>
          <div>
            <p>©2019 Northern Fury</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

export default Page
