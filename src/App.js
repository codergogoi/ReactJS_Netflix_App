import React from "react";
import { Provider as UserProvider } from "../src/context/UserContext";

import Landing from "../src/home/Landing";

function App() {
  return (
    <UserProvider>
      <Landing />
    </UserProvider>
  );
}

export default App;
