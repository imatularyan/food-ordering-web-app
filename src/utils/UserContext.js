import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Username",
    age: "age",
  },
});

export default UserContext;
