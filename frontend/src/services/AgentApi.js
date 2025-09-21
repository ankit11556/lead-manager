import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const addAgentApi = async (data) => {
  return axios.post(`${API_URL}/agent`,data,
   {withCredentials: true}
  )
}

export const allAgentsApi = async () => {
  return axios.get(`${API_URL}/agent`,
    {withCredentials: true}
  )
}

export const getCustomersByAgentApi = async (agentId) => {
  return axios.get(`${API_URL}/agent/${agentId}`,
    {withCredentials: true}
  )
}