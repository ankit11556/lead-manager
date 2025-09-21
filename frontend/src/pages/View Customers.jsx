import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getCustomersByAgentApi} from "../services/CustomerApi"
const AgentCustomers = () => {
  const { agentId } = useParams();
  const [agent, setAgent] = useState(null);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCustomersByAgentApi(agentId)
        setAgent(res.data.agent);        
        setCustomers(res.data.customers);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [agentId]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {agent && (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-2">Agent Details</h2>
          <p><strong>Name:</strong> {agent.name}</p>
          <p><strong>Email:</strong> {agent.email}</p>
          <p><strong>Mobile:</strong> {agent.mobileNumber}</p>
        </div>
      )}

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Customers</h2>
        {customers.length === 0 ? (
          <p className="text-gray-500">No customers found for this agent.</p>
        ) : (
          <table className="w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">First Name</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(cust => (
                <tr key={cust._id}>
                  <td className="border px-4 py-2">{cust.firstName}</td>
                  <td className="border px-4 py-2">{cust.phoneNumber}</td>
                  <td className="border px-4 py-2">{cust.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AgentCustomers;
