import axios from "axios"

const API = axios.create({baseUrl: process.env.REACT_APP_SERVER_URL})

export const getRemedy = async (ailment) =>{
    let { data } = await API.post(`remedy/getremedy`, { ailment: ailment })
    
    console.log(data)

    return data
}

export const getHerb = (herbName) => API.get(`herb/getherb/${herbName}`)

export const getAllHerbs = () => API.get(`herb/getallherbs`)

export const getAllRemedies = () => API.get(`remedy/getallremedies`)