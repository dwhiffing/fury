import React, { Fragment } from "react";

const Nav = ({ _nav, tabs }) => (
  <ul>
    <img className="logo" src="/assets/images/logo.png" />
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
);

export default Nav;
