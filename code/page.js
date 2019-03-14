import Footer from './components/footer'
import React from 'react'
import Head from './components/head'
import Aside from './components/aside'
import Header from './components/header'
import Article from './components/article'

export const PREFIX = process.env.NODE_ENV === 'production' ? '/fury' : ''

const Page = ({ nav, label, main, _relativeURL, _nav, _ID, _pages }) => {
  const pathArray = _ID.split('/')
  const page = _pages[_ID]

  return (
    <html>
      <Head _relativeURL={_relativeURL} _ID={_ID} />

      <body>
        <Header nav={nav} label={label} />

        <main>
          {_ID !== 'index' && (
            <aside>
              {['nato', 'warsaw'].includes(pathArray[0]) && (
                <Aside nav={_nav} pages={_pages} pathArray={pathArray} />
              )}
            </aside>
          )}

          {_ID === 'index' ? (
            main
          ) : (
            <Article renderFlag={page.isIndexPage} url={page._url}>
              {main}
            </Article>
          )}
        </main>

        <Footer />
      </body>
    </html>
  )
}

export default Page
