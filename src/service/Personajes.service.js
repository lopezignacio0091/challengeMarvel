import { apiKey } from "../actions/types";
import http from "../helpers/AxiosInstance";

const characters = "characters";
// let seccionCategories = "categories";

const getCharacters = () => {
  return http.get(`/${characters}?${apiKey}`);
};

const getCharacterById = (id) => {
  return http.get(`/${characters}/${id}`);
};

// const getCategories = () => {
//   return http.get(`/${seccion}/${seccionCategories}`);
// };

const ProductService = {
  getCharacters,
  getCharacterById,
  // getCategories,
};

export default ProductService;
