import React, { Fragment } from "react";
import PropTypes from "prop-types";

/**
 * Our new book component
 */
const Header = ({ _body, tabs }) => (
  <nav>
    <ul>
      {Object.keys(tabs).map(tabKey => {
        const tab = tabs[tabKey];
        return (
          <li>
            <a href={tab.link}>{tab.label}</a>
            {tab.items && (
              <ul className="dropdown">
                {tab.items.map(item => (
                  <li>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Header;
