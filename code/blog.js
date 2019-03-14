import Footer from './components/footer'
import React from 'react'
import Head from './components/head'
import Header from './components/header'
import Article from './components/article'

const numbers = Array.apply(null, { length: 17 }).map(Number.call, Number)

const Blog = ({ nav, label, main, _relativeURL, _ID, _pages }) => {
  return (
    <html>
      <Head _relativeURL={_relativeURL} _ID={_ID} />

      <body>
        <Header nav={nav} label={label} />

        <main>
          <aside>
            <ul>
              {numbers.map(n => (
                <li>
                  <a href={`/blog/post${n + 2}`}>Post {n + 2}</a>
                </li>
              ))}
            </ul>
          </aside>

          <Article url={_pages[_ID]._url}>{main}</Article>
        </main>

        <Footer />
      </body>
    </html>
  )
}

export default Blog
