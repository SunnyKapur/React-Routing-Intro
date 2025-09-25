import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Products from "./components/Products"
import Service from "./components/Service"
import About from "./components/About"
import Nav from "./components/Nav"

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App