import React, { Fragment } from "react";
import PropTypes from "prop-types";

/**
 * Our new book component
 */
const Header = ({ _body, _nav, tabs }) => (
  <nav>
    <ul>
      {Object.keys(tabs).map(tabKey => {
        const tab = tabs[tabKey];
        let path = _nav.index[tabKey] || "";
        let pathName = typeof path === "string" ? path : tabKey;
        return (
          <li>
            <a href={`/${pathName}`}>{tab.label}</a>
            {typeof path === "object" && (
              <ul className="dropdown">
                {Object.keys(tab.items).map(itemKey => {
                  const item = tab.items[itemKey];
                  return (
                    <li>
                      <a href={`/${pathName}/${item.path}`}>{item.label}</a>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Header;
