import { Routes,Route } from "react-router-dom"
import RegisterPage from "../pages/Register"
import LoginPage from "../pages/Login"
const AppRoutes = () => {
  return(
<Routes>
  <Route path="/register" element={<RegisterPage/>}></Route>
  <Route path="/login" element={<LoginPage/>}></Route>
</Routes>
  )
}

export default AppRoutes