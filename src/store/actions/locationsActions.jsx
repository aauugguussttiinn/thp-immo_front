export const FETCH_LOCATIONS_REQUEST = "FETCH_LOCATIONS_REQUEST";
export const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
export const FETCH_LOCATIONS_FAILURE = "FETCH_LOCATIONS_FAILURE";

export const fetchLocationsRequest = () => {
  return {
    type: FETCH_LOCATIONS_REQUEST,
  };
};
export const fetchLocationsSuccess = (locations) => {
  return {
    type: FETCH_LOCATIONS_SUCCESS,
    locations,
  };
};
export const fetchLocationsFailure = (error) => {
  return {
    type: FETCH_LOCATIONS_FAILURE,
    error,
  };
};
