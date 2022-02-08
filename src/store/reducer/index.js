const initialState = {
  email: "",
  name: "",
  role: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return {
        ...state,
        name: action.name,
        email: action.email,
        role: action.role,
      };
    }
    case "REMOVE_DATA": {
      return { ...state, name: null, email: null, role: null };
    }

    default: {
      return state;
    }
  }
};
export default reducer;
