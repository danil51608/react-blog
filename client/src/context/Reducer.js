const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: state.isFetching,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: state.isFetching,
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: state.isFetching,
      };
    case "UPDATE_USER":
      return {
        user: action.payload,
        isFetching: state.isFetching,
      };
    case "SET_FETCHING":
      return {
        user: state.user,
        isFetching: true,
      };
    case "STOP_FETCHING":
      return {
        user: state.user,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default Reducer;
