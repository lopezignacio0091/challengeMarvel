import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

const Search = ({ search }) => {
  const [text, setText] = useState("");

  const onSearch = (q) => {
    setText(q);
    search(q);
  };

  return (
    <Grid>
      <TextField
        variant="outlined"
        type="text"
        name="SearchCharacter"
        onChange={(e) => onSearch(e.target.value)}
        value={text}
        style={{
          marginBottom: "2rem",
          backgroundColor: "white",
          borderRadius: "15px",
          width: "30%",
        }}
      />
    </Grid>
  );
};

export default Search;
