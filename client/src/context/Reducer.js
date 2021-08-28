const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
      };
    case "UPDATE_USER":
      return {
        user: action.payload,
        isFetching: false,
      };
    case "SET_FETCHING":
      return {
        user: state.user,
        isFetching: true,
      };
    case "STOP_FETCHING":
      return {
        user: state.user,
        isFetching: false
      };
    default:
      return state;
  }
};

export default Reducer;
