"use client";

import React from "react";

const FIlterError = ({ error }) => {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>Could not fetch news for selected filter settings.</p>
      <p>{error.message}</p>
    </div>
  );
};

export default FIlterError;
