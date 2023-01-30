import { Outlet, Navigate } from "react-router-dom";

function PrivateRoute() {
  let auth = { token: localStorage.getItem("isAuthenticated") };
  return !auth.token ? (
    <>
     
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default PrivateRoute;
