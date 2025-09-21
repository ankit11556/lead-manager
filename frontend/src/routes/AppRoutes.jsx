import { Routes,Route } from "react-router-dom"
import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"
import AddAgent from "../pages/AddAgent"
const AppRoutes = () => {
  return(
<Routes>
  <Route path="/register" element={<RegisterPage/>}></Route>
  <Route path="/login" element={<LoginPage/>}></Route>
  <Route path="/add-agent" element={<AddAgent/>}></Route>
</Routes>
  )
}

export default AppRoutes