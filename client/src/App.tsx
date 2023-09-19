import { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Login/Home/Home";
import LoginPage from "./pages/Login/LoginPage";
function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  interface GoogleOAuth2User {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
  }

  const userdata:GoogleOAuth2User = {
    sub: "1234567890",
    name: "John Doe",
    given_name: "John",
    family_name: "Doe",
    picture: "https://example.com/profile_picture.jpg",
    email: "john.doe@example.com",
    email_verified: true,
    locale: "en"
  }

  return (
    <Home UserDetails={userdata}/>
    // <Router>
    //   <div className="container">
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           user ? <Home UserDetails={user} /> : <Navigate to="/login" />
    //         }
    //       />
    //     </Routes>
    //     <Routes>
    //       <Route
    //         path="/login"
    //         element={user ? <Navigate to="/" /> : <LoginPage />}
    //       />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
