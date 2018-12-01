import React from "react";

const Aside = ({ nav, pages, name }) => (
  <aside>
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
  </aside>
);
export default Aside;
