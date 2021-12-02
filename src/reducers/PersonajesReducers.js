import { TYPES } from "../actions/types";

const initialState = {
  loading: true,
  personajes: [],
};

const PersonajesReducers = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_CHARACTERS:
      return {
        ...state,
        personajes: action.payload,
        loading: false,
      };
    case TYPES.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default PersonajesReducers;
