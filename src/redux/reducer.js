const FETCHING = "FETCHING";
const DATA_LOADED = "DATA_LOADED";
const FETCH_DATA = "FETCH_DATA";
const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";
const initialState = {
  data: [],
  isFetching: false,
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, isFetching: action.bool };
    case DATA_LOADED:
      return {
        ...state,
        data: action.data,
      };

    case DATA_LOAD_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

//Action creators

export const isFetching = (bool) => {
  return { type: FETCHING, bool };
};

export const dataLoaded = (data) => {
  return {
    type: DATA_LOADED,
    data,
  };
};

export const dataLoadError = () => {
  debugger;
  return { type: DATA_LOAD_ERROR };
};

export const fetchData = (payload) => {
  return { type: FETCH_DATA, payload };
};
