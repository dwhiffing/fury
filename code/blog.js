import Footer from './components/footer'
import React, { Fragment } from 'react'
import Head from './components/head'
import Header from './components/header'
import Article from './components/article'
import { PREFIX } from './page'

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
  const pages = Object.values(_pages)
    .filter(page => page.tag)
    .sort((a, b) => {
      return new Date(a.date) < new Date(b.date) ? 1 : -1
    })

  const Heading = ({ tag }) => (
    <Fragment>
      <h5 style={{ marginTop: 20, marginBottom: 10 }}>{tag}</h5>
      {pages
        .filter(p => p.tag === tag)
        .map(post => (
          <li key={`blog-item-${post._url}`}>
            <a
              href={post._url}
              style={{
                fontWeight: `/${_ID}` === post._url ? '800' : 'normal',
              }}>
              {post.title}
            </a>
          </li>
        ))}
    </Fragment>
  )

  return (
    <html>
      <Head _relativeURL={_relativeURL} _ID={_ID} />

      <body>
        <Header nav={nav} label={label} />

        <main>
          <aside>
            <ul>
              <Heading tag="The Story" />
            </ul>
            <ul>
              <Heading tag="The World" />
              <Heading tag="The Scenarios" />
            </ul>
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
