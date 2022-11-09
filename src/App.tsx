import React from "react";
import "./App.css";
import { Typography } from "./app/shared_components/Typography";
import { Page } from "./app/shared_components/Page/Page";

function App() {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center">
        <Typography variant="H3" text="Welcome to my app" />
      </div>
    </div>
    // <>
    //   <Page />
    // </>
  );
}

export default App;
