import { FETCH_CATEGORIES_FAILURE } from "store/actions/categoryActions";
import { FETCH_CATEGORIES_SUCCESS } from "store/actions/categoryActions";
import { FETCH_CATEGORIES_REQUEST } from "store/actions/categoryActions";

const initialState = {
  loading: false,
  error: "",
  categories: "",
};

export const categoriesReducer = (
  state = initialState,
  { type, error, categories }
) => {
  switch (type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, loading: true };

    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: categories, error: "" };

    case FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
