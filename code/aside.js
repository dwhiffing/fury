import React, { Fragment } from "react";

const prefix = process.env.NODE_ENV === "production" ? "/fury" : "";

const Aside = ({ nav, pages, name, country }) => {
  const keys = Object.keys(nav.index[name]);
  const doThing = key => {
    const countryNavData = nav.index[name][key];
    const page = pages[key];
    const shouldRenderDeepLinks =
      typeof countryNavData === "object" && key.split("/")[1] === country;

    return (
      <li>
        <a href={`${prefix}/${key}`}>{page.label}</a>

        {shouldRenderDeepLinks && (
          <ul>
            {Object.keys(countryNavData).map(key => (
              <li>
                <a href={`${prefix}/${key}`}>{pages[key].label}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <Fragment>
      <ul>{keys.slice(0, 7).map(doThing)}</ul>
      <ul>{keys.slice(7, 14).map(doThing)}</ul>
    </Fragment>
  );
};

export default Aside;
