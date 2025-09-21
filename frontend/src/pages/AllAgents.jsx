import { useEffect, useState } from "react";
import { allAgentsApi, getCustomersByAgentApi } from "../services/AgentApi";

const AllAgents = () => {
  const [agents, setAgents] = useState([]);
  
  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const res = await allAgentsApi() 
        setAgents(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchAgents();
  }, []);

  const viewCustomers = async (agentId) => {
    setSelectedAgent(agentId);
    try {
      const res = await getCustomersByAgentApi(agentId);
      setCustomers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Agents</h2>

        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Mobile</th>
              <th className="border px-4 py-2">Customers</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((agent) => (
              <tr key={agent._id}>
                <td className="border px-4 py-2">{agent.name}</td>
                <td className="border px-4 py-2">{agent.email}</td>
                <td className="border px-4 py-2">{agent.mobileNumber}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => viewCustomers(agent._id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    View Customers
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAgents;
