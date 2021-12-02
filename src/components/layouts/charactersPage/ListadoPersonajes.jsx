import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";
import Progress from "../progress/Progress";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, setLoading } from "../../../actions/action";

const ListadoPersonajes = () => {
  const dispatch = useDispatch();

  const { personajes, loading } = useSelector(
    (state) => state.PersonajesReducers
  );

  console.log(personajes);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {loading ? (
        <Progress />
      ) : (
        personajes.map((el) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={el.id}
            justifyContent="space-around"
            style={{ padding: "30px" }}
          >
            <CardItem el={el} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ListadoPersonajes;
