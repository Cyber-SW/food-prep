import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
  // If the user is not logged in ❌
    return <Navigate to="/login" />;
  } else {
  // If the user is logged in, allow to see the page ✅
    return children;
  }
}

IsPrivate.propTypes = {
  children: PropTypes.node.isRequired
};

export default IsPrivate;