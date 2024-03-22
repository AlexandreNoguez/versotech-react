import AppRoutes from "./routes/AppRoutes"
import Header from "./components/Header"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="px-8 py-4">
        <AppRoutes />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
