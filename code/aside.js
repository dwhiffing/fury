import React, { Fragment } from "react";

const prefix = process.env.NODE_ENV === "production" ? "/fury" : "";

const regex = /(Air Force|Navy|Army)/;

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const Aside = ({ nav, pages, name, country, section }) => {
  const keys = Object.keys(nav.index[name]);

  const renderDeepLinks = data => {
    return (
      <ul>
        {Object.keys(data).map(key => {
          const navData = data[key];
          const page = pages[key];
          const pathArray = key.split("/");
          const fallbackLabel = pathArray[pathArray.length - 1]
            .replace("-", " ")
            .capitalize();

          const pageLabel = page.label || fallbackLabel;
          const match = pageLabel.match(regex);
          const label = match ? match[0] : pageLabel;

          const _section = key.split("/")[3];

          if (typeof navData === "string") {
            return (
              <li>
                <a href={`${prefix}/${key}`}>{label}</a>
              </li>
            );
          } else {
            return (
              <Fragment>
                <li>
                  <a href={`${prefix}/${key}`}>{label}</a>
                </li>
                {(match || _section === section) && renderDeepLinks(navData)}
              </Fragment>
            );
          }
        })}
      </ul>
    );
  };

  const renderLinks = key => {
    const countryNavData = nav.index[name][key];
    const page = pages[key];
    const shouldRenderDeepLinks =
      typeof countryNavData === "object" && key.split("/")[1] === country;

    return (
      <li>
        <a href={`${prefix}/${key}`}>{page.label}</a>

        {shouldRenderDeepLinks && renderDeepLinks(countryNavData)}
      </li>
    );
  };

  return (
    <Fragment>
      <ul>{keys.slice(0, keys.length / 2).map(renderLinks)}</ul>
      <ul>{keys.slice(keys.length / 2, keys.length).map(renderLinks)}</ul>
    </Fragment>
  );
};

export default Aside;
