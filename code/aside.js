import React from "react";

const prefix = process.env.NODE_ENV === "production" ? "/fury" : "";

const Aside = ({ nav, pages, name }) => (
  <ul>
    {Object.keys(nav.index[name]).map(key => {
      const countryNavData = nav.index[name][key];
      const page = pages[key];

      return (
        <li>
          <a href={`${prefix}/${key}`}>{page.label}</a>

          {typeof countryNavData === "object" && (
            <ul>
              {Object.keys(countryNavData).map(key => {
                const page = pages[key];
                return (
                  <li>
                    <a href={`${prefix}/${key}`}>{page.label}</a>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    })}
  </ul>
);

export default Aside;
