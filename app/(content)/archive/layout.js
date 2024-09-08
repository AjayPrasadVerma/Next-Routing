import React from "react";

/**
 *
 * @param in parallel routes, the layout is shared between the routes and the layout is rendered once for all the parallel routes.
 *  and the layout component reccives the parallel routes as children.
 * @returns
 */

const Layout = ({ archive, latest }) => {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
};

export default Layout;
