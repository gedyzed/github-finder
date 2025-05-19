import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/layout/NavBar";
import Footer from "./component/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/Github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import User from "./pages/User";


function App() {

  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen gap-10">
            <NavBar />
            <main className="container mx-auto  px-5">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>

  )
}

export default App
