import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const addAgentApi = async (data) => {
  return axios.post(`${API_URL}/agent`,data,
   {withCredentials: true}
  )
}