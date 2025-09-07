import { Route, Routes } from "react-router"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import ProfilePage from "./Pages/ProfilePage/ProfilePage"

function App() {
  return (
    <div className="bg-[url('/backgroundImg.jpg')] bg-cover bg-no-repeat bg-center">
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/" element={<ProfilePage></ProfilePage>}/>
      </Routes>
    </div>
  )
}

export default App
