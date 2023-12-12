import axios from "axios"

const API = axios.create({baseUrl: process.env.REACT_APP_SERVER_URL})

export const getRemedy = (ailment) =>{
    console.log("URL", process.env.REACT_APP_SERVER_URL)
    return API.post(`remedy/getremedy`, { ailment: ailment })
}

export const getHerb = (herbName) => API.get(`herb/getherb/${herbName}`)

export const getAllHerbs = () => API.get(`herb/getallherbs`)

export const getAllRemedies = () => API.get(`remedy/getallremedies`)