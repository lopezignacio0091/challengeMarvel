import React from "react";
import ListadoPersonajes from "../layouts/charactersPage/ListadoPersonajes";
import Search from "../layouts/charactersPage/Search";
import { Grid } from "@mui/material";

const CharactersPage = () => {
  // const dispatch = useDispatch();
  // const { personajes, loading } = useSelector(
  //   (state) => state.PersonajesReducers
  // );
  // const [personajes, setPersonajes] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [query, setQuery] = useState("");

  // useEffect(() => {
  // if (query === "") {
  //   axios.get(`${defaultUrl}/characters?${apiKey}`).then((res) => {
  //     setPersonajes(res.data.data.results);
  //   });
  // } else {
  //   axios
  //     .get(`${defaultUrl}/characters?nameStartsWith=${query}&${apiKey}`)
  //     .then((res) => {
  //       setPersonajes(res.data.data.results);
  //       console.log(personajes);
  //     });
  // }
  // setLoading(false);
  //   dispatch(getCharacters());
  // }, []);

  // const search = (value) => {
  //   setQuery(value);
  // };

  return (
    <Grid container>
      <Grid item xs={12} marginTop={3}>
        {/* <Search search={search} /> */}
        <Search />
      </Grid>
      <ListadoPersonajes />
    </Grid>
  );
};

export default CharactersPage;
