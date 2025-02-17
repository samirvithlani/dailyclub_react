import { useEffect, useState } from "react";

const useAuthentication = () => {
  const [role, setrole] = useState(null);

  // if (userRole) {
  //   setrole(userRole);
  // }

  useEffect(() => {
    var userRole = localStorage.getItem("role");
    if (userRole) {
      setrole(userRole);
    }
  }, []);

  const isAdmin = role === "ADMIN" || role === "admin";
  const isUser = role === "USER" || role === "user";
  const isManager = role === "MANAGER" || role === "manager";

  return { isAdmin, isUser, isManager };
};
export default useAuthentication;
