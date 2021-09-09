import { FETCH_LOCATIONS_FAILURE } from "store/actions/locationsActions";
import { FETCH_LOCATIONS_SUCCESS } from "store/actions/locationsActions";
import { FETCH_LOCATIONS_REQUEST } from "store/actions/locationsActions";

const initialState = {
  loading: false,
  error: "",
  locations: "",
};

export const locationsReducer = (
  state = initialState,
  { type, error, locations }
) => {
  switch (type) {
    case FETCH_LOCATIONS_REQUEST:
      return { ...state, loading: true };

    case FETCH_LOCATIONS_SUCCESS:
      return { ...state, loading: false, locations: locations, error: "" };

    case FETCH_LOCATIONS_FAILURE:
      return { ...state, loading: false, error: error };

    default:
      return state;
  }
};
