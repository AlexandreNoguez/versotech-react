import { ToastContainer } from "react-toastify"
import { useSelector } from 'react-redux'

import Header from "./components/Header"
import AppRoutes from "./routes/AppRoutes"

import 'react-toastify/dist/ReactToastify.css';
import useWindowSize from "./hooks/SizeObserver";

import pokedex from "./assets/pokedex.webp"

function App() {
  const { width } = useWindowSize();
  const { knownPokemon } = useSelector(rootReducer => rootReducer.userReducer);
  return (
    <div className="flex flex-col h-screen">

      <Header />
      <div className={`${width < 480 ? "px-2 py-4" : "px-8 py-4"}`}>
        <AppRoutes />
      </div>
      <ToastContainer />
      <div className="fixed bottom-4 right-2">
        <img className="w-16" src={pokedex} alt="" />
        <div className="absolute -top-2 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          {knownPokemon.length}
        </div>
      </div>
    </div>
  )
}

export default App
