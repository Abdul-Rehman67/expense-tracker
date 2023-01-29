import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Dashboard from "../pages/Dashboard";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import PrivateRoute from "./privateRoutes";

function Navigator() {
  // const login = useSelector((state) => state.login.loginUser);
//   const login = JSON.parse(localStorage.getItem("isAuthenticated"));
const login = true

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />}></Route>
          </Route>

          <Route element={<Login />} path="/login" />
          <Route exact path="/signup" element={<CreateAccount />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default Navigator;
