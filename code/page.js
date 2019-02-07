import PropTypes from 'prop-types'
import React from 'react'
import Aside from './aside'
import Header from './header'

const StyleSheet = ({ href }) => <link rel="stylesheet" href={href} />

const Page = ({
  nav,
  title,
  main,
  script,
  stylesheet,
  _relativeURL,
  _nav,
  _ID,
  _pages,
}) => {
  let aside = _ID.split('/')[0]
  const thing = _pages[_ID]
  const label = thing.label
  const key = thing._url.replace('/nato', '')

  title = title || label

  return (
    <html>
      <head>
        <title>Northern Fury</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
      </head>

      <body>
        <Header />

        <nav>{nav}</nav>

        {title && (
          <header className="title">
            <h1>{title}</h1>
          </header>
        )}

        <main>
          <aside>
            {['nato', 'warsaw', 'scenarios'].includes(aside) && (
              <Aside
                name={aside}
                nav={_nav}
                pages={_pages}
                country={_ID.split('/')[1]}
                section={_ID.split('/')[3]}
              />
            )}
          </aside>

          <section>
            {thing.isIndexPage && (
              <div className="country-index">
                <img
                  className="flag"
                  src={`/assets/images/nato${key}/flag.png`}
                />
                <img
                  className="map"
                  src={`/assets/images/nato${key}/map.jpg`}
                />
              </div>
            )}
            <article>{main}</article>
          </section>
        </main>

        <footer>
          <span>© 2017 Northern Fury.</span>
          <div>
            <a href="#">Facebook</a>
            <span> | </span>
            <a href="https://twitter.com/NorthernFury94">Twitter</a>
          </div>
        </footer>

        {script && (
          <script src={_relativeURL(`/assets/js/${script}.js`, _ID)} />
        )}
      </body>
    </html>
  )
}

Page.propTypes = {
  /**
   * title: Homepage
   */
  title: PropTypes.string.isRequired,

  /**
   * main: (partials)(5)
   */
  main: PropTypes.node.isRequired,
}

Page.defaultProps = {}

export default Page
