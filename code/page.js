import PropTypes from "prop-types";
import React from "react";

const SideBar = ({ nav, pages, name }) => (
  <div>
    <ul>
      {Object.keys(nav.index[name]).map(key => {
        const countryNavData = nav.index[name][key];
        const page = pages[key];

        return (
          <li>
            <a href={`/${key}`}>{page.label}</a>

            {typeof countryNavData === "object" && (
              <ul>
                {Object.keys(countryNavData).map(key => {
                  const page = pages[key];
                  return (
                    <li>
                      <a href={`/${key}`}>{page.label}</a>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  </div>
);

const Page = ({
  title,
  stylesheet,
  header,
  banner,
  main,
  footer,
  script,
  _relativeURL,
  _nav,
  _ID,
  _pages
}) => {
  let sidebar = _ID.split("/")[0];
  const label = _pages[_ID].label;

  banner = banner || label;

  return (
    <html>
      <head>
        <title>Northern Fury</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/normalize.css`, _ID)}
        />
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/skeleton.css`, _ID)}
        />
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/site.css`, _ID)}
        />
        {stylesheet != undefined ? (
          <link
            rel="stylesheet"
            href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)}
          />
        ) : null}
      </head>
      <body>
        <div className="top">
          <header>{header}</header>
          {banner && (
            <div className="banner">
              <h1>{banner}</h1>
            </div>
          )}

          <main>{main}</main>

          {["nato", "warsaw", "scenarios"].includes(sidebar) && (
            <SideBar name={sidebar} nav={_nav} pages={_pages} />
          )}
        </div>

        <footer>{footer}</footer>

        {script != undefined ? (
          <script src={_relativeURL(`/assets/js/${script}.js`, _ID)} />
        ) : null}
      </body>
    </html>
  );
};

Page.propTypes = {
  /**
   * title: Homepage
   */
  title: PropTypes.string.isRequired,

  /**
   * main: (partials)(5)
   */
  main: PropTypes.node.isRequired,

  /**
   * footer: (partials)(2)
   */
  footer: PropTypes.node.isRequired
};

Page.defaultProps = {};

export default Page;
