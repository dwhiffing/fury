import React from 'react'

const prefix = process.env.NODE_ENV === 'production' ? '/fury' : ''

const Article = ({ renderFlag, url, children }) => (
  <section>
    {renderFlag && (
      <div className="country-index">
        <img className="flag" src={`${prefix}/assets/images${url}/flag.png`} />
        <img className="map" src={`${prefix}/assets/images${url}/map.jpg`} />
      </div>
    )}
    <article>{children}</article>
  </section>
)

export default Article
