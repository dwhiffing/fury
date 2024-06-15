import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { PREFIX } from './page'

const Home = ({ _body }) => (
  <div style={{ margin: '0 auto' }}>
    <div className="hero" alt="Home">
      <img
        className="hero_logo"
        src={`${PREFIX}/assets/images/home_logo.png`}
        alt="Northern Fury"
      />
    </div>

    <div className="home-wrapper">
      <div className="home-content">{_body}</div>

      <div style={{ flex: '1', justifyContent: 'center', padding: '0 20' }}>
        <img src={`${PREFIX}/assets/images/cover.jpg`} alt="Cover" />
      <div style={{ flex: '1', justifyContent: 'center', padding: '0 20' }}></div>
        <img src={`${PREFIX}/assets/images/nordkapp.jpg`} alt="Nordkapp" />
        <p className="sponsors">
          More information on COMMAND Modern Air/Naval Operations can be found
          at:
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="http://www.warfaresims.com/">
            <img
              src={`${PREFIX}/assets/images/warfaresims.gif`}
              alt="Warfare Sims"
            />
          </a>
          <a href="http://www.matrixgames.com/">
            <img
              src={`${PREFIX}/assets/images/matrix.png`}
              alt="Matrix Games"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
)

Home.propTypes = {
  _body: PropTypes.node.isRequired,
}

Home.defaultProps = {}

export default Home
