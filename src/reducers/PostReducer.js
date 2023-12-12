const postReducer = (
    state = { remedy:[],herbList:[], error: false, loading: false},
    action
  ) => {
    switch (action.type) {
      case "REQUEST_START":
        return { ...state, error: false, loading: true};
      case "REQUEST_SUCCESS":
        return { ...state, remedy: action.data.remedy, herbList: action.data.herbs, loading: false, error: false};
      case "REQUEST_FAIL":
        return { ...state, loading: false, error: true }; 

      default:
        return state;
    } 
  };
  
  export default postReducer;