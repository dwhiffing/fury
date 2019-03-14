import React from 'react'
import { PREFIX } from '../page'

const Article = ({ renderFlag, url, children }) => (
  <section>
    {renderFlag && (
      <div className="country-index">
        <img className="flag" src={`${PREFIX}/assets/images${url}/flag.png`} />
        <img className="map" src={`${PREFIX}/assets/images${url}/map.jpg`} />
      </div>
    )}
    <article>{children}</article>
  </section>
)

export default Article
