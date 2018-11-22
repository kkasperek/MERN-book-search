import React from "react";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <div>
      <h1>KTs awesome home page</h1>

      <Button variant="contained" color="primary" href="/search">
        Click to go to other page ...
      </Button>
    </div>
  );
};
export default Home;
