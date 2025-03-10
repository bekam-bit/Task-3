import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { Suspense, lazy} from "react";

const Home = lazy(() => import("./Task3/Home"));
const About = lazy(() => import("./Task3/About"));
const Contact = lazy(() => import("./Task3/Contact"));
const NotFound = lazy(() => import("./Task3/NotFound"));
const UserProfile = lazy(() => import("./Task3/UserProfile"));

const username = "Bekam";
function App() {
  return (
    <div>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact-Us">Contact</Link>
        <Link to={`/user/${username}`}>User Profile</Link>
      </nav>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact-Us" element={<Contact />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}
export default App



