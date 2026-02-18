import Navbar from "./Components/Navbar"
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { FirebaseProvider } from "./context/Firebase";

function App() {
  return (
    <>
      <FirebaseProvider>
        <Navbar />
        {/* TODO :- custom cursor of spray or gel */}
        <Outlet />
        <Footer />
      </FirebaseProvider>
    </>
  )
}

export default App
