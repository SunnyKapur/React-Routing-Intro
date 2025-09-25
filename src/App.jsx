import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="w-screen h-screen bg-cyan-700 text-white px-[10%]">
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App