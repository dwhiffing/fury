import React, { Fragment } from "react";

const prefix = process.env.NODE_ENV === "production" ? "/fury" : "";

const Nav = ({ _nav, tabs }) => (
  <div className="nav-container">
    <div className="mobile-container">
      <a href={`${process.env.NODE_ENV === "production" ? "/fury" : "/"}`}>
        <img className="logo" src={`${prefix}/assets/images/logo.png`} />
      </a>
    </div>
    <ul>
      <li className={`nav-top-button tab-home`}>
        <a href={`${process.env.NODE_ENV === "production" ? "/fury" : "/"}`}>
          <img className="logo" src={`${prefix}/assets/images/logo.png`} />
        </a>
      </li>
      <div className="tab-container">
        {Object.keys(tabs).map(tabKey => {
          const tab = tabs[tabKey];
          let path = _nav.index[tabKey] || "";
          let pathName = typeof path === "string" ? path : tabKey;

          return (
            <li className={`nav-top-button tab-${pathName}`}>
              <a href={`${prefix}/${pathName}`}>{tab.label}</a>
              {typeof path === "object" && (
                <ul className="dropdown">
                  {Object.keys(tab.items).map(itemKey => {
                    const item = tab.items[itemKey];
                    const mainHref = `${prefix}/${pathName}/${item.path}`;
                    return (
                      <li>
                        <a href={mainHref}>{item.label}</a>
                        {tab.label !== "Scenarios" && (
                          <ul className="dropdown">
                            {["Air Force", "Army", "Navy"].map(label => {
                              const subPath = label
                                .toLowerCase()
                                .replace(" ", "_");
                              return (
                                <li>
                                  <a href={`${mainHref}/${subPath}`}>{label}</a>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </div>
    </ul>
  </div>
);

export default Nav;
