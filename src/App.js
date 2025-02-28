import React from "react";
import "./App.css";
import Main from "./containers/Main";
import ReactGa from 'react-ga';

ReactGa.initialize('UA-206397703-1');

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
