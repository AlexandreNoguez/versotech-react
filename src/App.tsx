import AppRoutes from "./routes/AppRoutes"
import Header from "./components/Header"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="px-8 py-4">
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
