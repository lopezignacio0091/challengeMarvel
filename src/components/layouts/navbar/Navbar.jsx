import React from "react";
import { AppBar, Container, Grid, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import marvel from "../../../img/Marvel_Logo.svg";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <h1>
          <NavLink to="/">
            <img src={marvel} alt="marvel" style={{ width: "200px" }} />
          </NavLink>
        </h1>
        <Grid container>
          <Grid item xs={3}>
            <NavLink
              to="/characters"
              activeclassname="active"
              style={{
                fontFamily: "fantasy",
                fontSize: "26px",
                color: "white",
              }}
            >
              Characters
            </NavLink>
          </Grid>
          <Grid item xs={3}>
            <NavLink
              to="/comics"
              activeclassname="active"
              style={{
                fontFamily: "fantasy",
                fontSize: "26px",
                color: "white",
              }}
            >
              Comics
            </NavLink>
          </Grid>
          <Grid item xs={3}>
            <NavLink
              to="/series"
              activeclassname="active"
              style={{
                fontFamily: "fantasy",
                fontSize: "26px",
                color: "white",
              }}
            >
              Series
            </NavLink>
          </Grid>
          <Grid item xs={3}>
            <NavLink
              to="/stories"
              activeclassname="active"
              style={{
                fontFamily: "fantasy",
                fontSize: "26px",
                color: "white",
              }}
            >
              Stories
            </NavLink>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Navbar;
