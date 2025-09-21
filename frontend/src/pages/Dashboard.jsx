import { useEffect, useState } from "react";
import { getDashboardApi } from "../services/DashboardApi";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await getDashboardApi();
        setData(res.data);
      } catch (error) {
        console.error("Error fetching dashboard", error);
      }
    };
    fetchDashboard();
  }, []);

  if (!data) return <p className="text-center mt-10">Loading Dashboard...</p>;

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-xl font-bold">Total Agents</h2>
          <p className="text-3xl mt-2">{data.totalAgents}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-xl font-bold">Total Customers</h2>
          <p className="text-3xl mt-2">{data.totalCustomers}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-xl font-bold">Assigned Customers</h2>
          <p className="text-3xl mt-2">{data.totalCustomers}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-xl font-bold">Unassigned Customers</h2>
          <p className="text-3xl mt-2">0</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">Customers per Agent</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.customersPerAgent}>
            <XAxis dataKey="agentName" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Customers */}
      <div className="bg-white shadow-lg rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">Recent Customers</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Name</th>
              <th className="border-b p-2">Phone</th>
              <th className="border-b p-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.recentCustomers.map((c, idx) => (
              <tr key={idx} className="hover:bg-gray-100">
                <td className="p-2">{c.firstName}</td>
                <td className="p-2">{c.phoneNumber}</td>
                <td className="p-2">{c.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
