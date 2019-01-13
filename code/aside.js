import React, { Fragment } from "react";

const prefix = process.env.NODE_ENV === "production" ? "/fury" : "";

const regex = /(Air Force|Navy|Army)/;

const Aside = ({ nav, pages, name, country }) => {
  const keys = Object.keys(nav.index[name]);
  const renderLinks = key => {
    const countryNavData = nav.index[name][key];
    const page = pages[key];
    const shouldRenderDeepLinks =
      typeof countryNavData === "object" && key.split("/")[1] === country;

    return (
      <li>
        <a href={`${prefix}/${key}`}>{page.label}</a>

        {shouldRenderDeepLinks && (
          <ul>
            {Object.keys(countryNavData).map(key => {
              const match = pages[key].label.match(regex);
              const label = match ? match[0] : pages[key].label;
              return (
                <li>
                  <a href={`${prefix}/${key}`}>{label}</a>
                </li>
              );
            })}
          </ul>
        )}
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
