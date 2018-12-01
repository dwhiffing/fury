import PropTypes from "prop-types";
import React from "react";
import Aside from "./aside";
import Header from "./header";

const StyleSheet = ({ href }) => <link rel="stylesheet" href={href} />;

const Page = ({
  nav,
  title,
  main,
  script,
  stylesheet,
  _relativeURL,
  _nav,
  _ID,
  _pages
}) => {
  let aside = _ID.split("/")[0];
  const label = _pages[_ID].label;

  title = title || label;

  return (
    <html>
      <head>
        <title>Northern Fury</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <StyleSheet href="https://fonts.googleapis.com/css?family=Exo:300,400,500" />
        <StyleSheet href="https://fonts.googleapis.com/css?family=Droid+Serif:300,400,500" />
        <StyleSheet href={_relativeURL("/assets/css/normalize.css", _ID)} />
        <StyleSheet href={_relativeURL("/assets/css/skeleton.css", _ID)} />
        <StyleSheet href={_relativeURL("/assets/css/site.css", _ID)} />

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
          {["nato", "warsaw", "scenarios"].includes(aside) && (
            <Aside name={aside} nav={_nav} pages={_pages} />
          )}

          <section>
            <article>{main}</article>
          </section>
        </main>

        <footer>© 2017 Northern Fury.</footer>

        {script && (
          <script src={_relativeURL(`/assets/js/${script}.js`, _ID)} />
        )}
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
  main: PropTypes.node.isRequired
};

Page.defaultProps = {};

export default Page;
