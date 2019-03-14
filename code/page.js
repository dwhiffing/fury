import PropTypes from 'prop-types'
import React from 'react'
import Aside from './aside'
import Header from './header'

const StyleSheet = ({ href }) => <link rel="stylesheet" href={href} />
const prefix = process.env.NODE_ENV === 'production' ? '/fury' : ''

const Page = ({
  nav,
  label,
  main,
  script,
  stylesheet,
  _relativeURL,
  _nav,
  _ID,
  _pages,
}) => {
  const pathArray = _ID.split('/')
  let aside = pathArray[0]
  const page = _pages[_ID]
  const key = page._url.replace('/nato', '')
  const isIndex = pathArray[0] === 'index'

  return (
    <html>
      <head>
        <title>Northern Fury</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='shortcut icon' type='image/x-icon' href='/assets/favicon.ico' />

        <StyleSheet href="https://fonts.googleapis.com/css?family=Exo:300,400,500" />
        <StyleSheet href="https://fonts.googleapis.com/css?family=Droid+Serif:300,400,500" />
        <StyleSheet href={_relativeURL('/assets/css/normalize.css', _ID)} />
        <StyleSheet href={_relativeURL('/assets/css/skeleton.css', _ID)} />
        <StyleSheet href={_relativeURL('/assets/css/site.css', _ID)} />
        <StyleSheet href={_relativeURL('/assets/css/main.css', _ID)} />
        <StyleSheet href={_relativeURL('/assets/css/nav.css', _ID)} />
        <StyleSheet href={_relativeURL('/assets/css/text.css', _ID)} />
        <StyleSheet href={_relativeURL('/assets/css/utils.css', _ID)} />

        {stylesheet && (
          <StyleSheet
            href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)}
          />
        )}

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136109754-1"></script>
        <script type="text/javascript" dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)};gtag('js', new Date()); gtag('config', 'UA-136109754-1');`}} />
        {_ID === 'index' && <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script>}
        {_ID === 'index' && <script type="text/javascript" dangerouslySetInnerHTML={{__html: `window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us20.list-manage.com","uuid":"40207b1c822d45c9de3c64ade","lid":"a5cb1201d5","uniqueMethods":true })})`}} />}
      </head> 

      <body>
        <Header />

        <nav>{nav}</nav>

        {label && (
          <header className="title">
            <h1>{label}</h1>
          </header>
        )}

        <main>
          {!isIndex && (
            <aside>
              {['nato', 'warsaw', 'scenarios'].includes(aside) &&  (
                <Aside
                  name={aside}
                  nav={_nav}
                  pages={_pages}
                  currentCountry={pathArray[1]}
                  currentSection={pathArray[2]}
                  _ID={pathArray}
                />
              )}
            </aside>
          )}

          {isIndex ? main : (
            <section>
              {page.isIndexPage && (
                <div className="country-index">
                  <img
                    className="flag"
                    src={`${prefix}/assets/images/nato${key}/flag.png`}
                  />
                  <img
                    className="map"
                    src={`${prefix}/assets/images/nato${key}/map.jpg`}
                  />
                </div>
              )}
              <article>{main}</article>
            </section>
          )}
        </main>

        <footer>
          <div>
            <p>©2019 Northern Fury</p>
          </div>
        </footer>

        {script && (
          <script src={_relativeURL(`/assets/js/${script}.js`, _ID)} />
        )}
      </body>
    </html>
  )
}

export default Page
