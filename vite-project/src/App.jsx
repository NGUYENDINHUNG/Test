import { Outlet, Routes } from "react-router-dom"
import Foolter from "./components/layout/foolter/foolter"
import Navbar from "./components/navbar/narbar"
import "./App.css"

function App() {
  return (
    <>
      <div className="App" >
        <Navbar />
        <Outlet />
        <Foolter />
      </div>
    </>

  )
}

export default App
