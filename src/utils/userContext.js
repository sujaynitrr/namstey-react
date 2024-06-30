import { createContext } from "react";

const userContext = createContext({
  user: "Default user",
});

export default userContext;
