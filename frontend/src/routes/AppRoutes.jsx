import { Routes,Route } from "react-router-dom"
import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"
import AddAgent from "../pages/AddAgent"
import AllAgents from "../pages/AllAgents"
import AgentCustomers from "../pages/View Customers"
import UploadCSV from "../pages/UploadCSV"
const AppRoutes = () => {
  return(
<Routes>
  <Route path="/register" element={<RegisterPage/>}></Route>
  <Route path="/login" element={<LoginPage/>}></Route>
  <Route path="/add-agent" element={<AddAgent/>}></Route>
  <Route path="/all-agents" element={<AllAgents/>}></Route>
  <Route path="/agent/:agentId" element={<AgentCustomers/>}></Route>
  <Route path="/upload" element={<UploadCSV/>}></Route>
</Routes>
  )
}

export default AppRoutes