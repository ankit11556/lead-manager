import { Routes,Route } from "react-router-dom"
import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"
import AddAgent from "../pages/AddAgent"
import AllAgents from "../pages/AllAgents"
const AppRoutes = () => {
  return(
<Routes>
  <Route path="/register" element={<RegisterPage/>}></Route>
  <Route path="/login" element={<LoginPage/>}></Route>
  <Route path="/add-agent" element={<AddAgent/>}></Route>
  <Route path="/all-agents" element={<AllAgents/>}></Route>
</Routes>
  )
}

export default AppRoutes