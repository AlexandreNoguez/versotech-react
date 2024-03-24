import { ToastContainer } from "react-toastify"

import Header from "./components/Header"
import AppRoutes from "./routes/AppRoutes"

import 'react-toastify/dist/ReactToastify.css';
import useWindowSize from "./hooks/SizeObserver";

function App() {
  const { width } = useWindowSize();
  return (
    <div className="flex flex-col h-screen">

      <Header />
      <div className={`${width < 480 ? "px-2 py-4" : "px-8 py-4"}`}>
        <AppRoutes />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
