import React, { useState } from "react";
import Button from "@mui/material/Button";
import Search from "./Search";

import "./Banner.css";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a differe kind of gateway to uncover the hidden gens near you.
        </h5>
        <Button variant="outlined">Expand Near</Button>
      </div>
    </div>
  );
};

export default Banner;
