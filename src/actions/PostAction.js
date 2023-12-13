import * as PostsApi from "../api/PostRequest.js";

export const getRemedy = (ailment) => async (dispatch) => {
  console.log("START BACKEND DATA", ailment)
  dispatch({ type: "REQUEST_START" });
  try {
    console.log("TRY BACKEND DATA", ailment)
    let { data } = await PostsApi.getRemedy(ailment);
    
    console.log("BACKEND DATA", data)
    dispatch({ type: "REQUEST_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "REQUEST_FAIL" });
  }
};

export const getHerb = (herbName) => async (dispatch) => {
  dispatch({ type: "HERB_REQUEST_START" });
  try {
    let { data } = await PostsApi.getHerb(herbName);
    
    console.log("HERB INFO!!!", data)
    dispatch({ type: "HERB_REQUEST_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "HERB_REQUEST_FAIL" });
  }
};

export const getAllHerbs = () => async (dispatch) => {
  dispatch({ type: "HERB_LIST_REQUEST_START" });
  try {
    let { data } = await PostsApi.getAllHerbs();

    dispatch({ type: "HERB_LIST_REQUEST_SUCCESS", data: data });
    
  } catch (error) {
    console.log(error);
    dispatch({ type: "HERB_LIST_REQUEST_FAIL" });
  }
};

