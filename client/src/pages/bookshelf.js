import React from "react";
import Button from "@material-ui/core/Button";
import Container from "../components/container";
import NavBar from "../components/Navigation";
import Wrapper from "../components/Layout";

const Bookshelf = () => {
  return (
    <div>
    <NavBar />
      <Wrapper>
      <h1>The Bookshelf</h1>

      <Button variant="contained" color="primary" href="/search">
        Click to go to other page ...
      </Button>

      <Container>
      </Container>
      </Wrapper>
    </div>
  );
};
export default Bookshelf;
