import Footer from './components/footer'
import React from 'react'
import Head from './components/head'
import Header from './components/header'
import Article from './components/article'

const numbers = Array.apply(null, { length: 17 }).map(Number.call, Number)

const Blog = ({
  nav,
  label,
  main,
  _relativeURL,
  _ID,
  _pages,
  title,
  date,
  _nav,
  category,
}) => {
  const posts = Object.values(_nav.index.blog)
    .sort((a, b) => {
      const dateA = new Date(_pages[a].date)
      const dateB = new Date(_pages[b].date)
      return dateA < dateB ? 1 : -1
    })
    .map(key => {
      const [blog, postNum] = key.split('/')
      return (
        <li>
          <a href={`/${key}`}>{_pages[key].title}</a>
        </li>
      )
    })

  return (
    <html>
      <Head _relativeURL={_relativeURL} _ID={_ID} />

      <body>
        <Header nav={nav} label={label} />

        <main>
          <aside>
            <ul>{posts.slice(0, posts.length / 2)}</ul>
            <ul>{posts.slice(posts.length / 2, posts.length)}</ul>
          </aside>

          <Article url={_pages[_ID]._url}>
            <h2>{title}</h2>
            <p>
              {date} | {category}
            </p>
            {main}
          </Article>
        </main>

        <Footer />
      </body>
    </html>
  )
}

export default Blog
