import React from "react";
import logo from "./assets/images/logo.svg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./styles/App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
