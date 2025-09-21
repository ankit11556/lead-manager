import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const getCustomersByAgentApi = async (agentId) => {
  return axios.get(`${API_URL}/agent/${agentId}`,
    {withCredentials: true}
  )
}