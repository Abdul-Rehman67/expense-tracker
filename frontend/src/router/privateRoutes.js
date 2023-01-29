import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
//   let auth = { token: localStorage.getItem("isAuthenticated") };
let auth =true
  return auth ? (
    <>
     
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
