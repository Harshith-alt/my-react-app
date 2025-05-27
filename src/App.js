import React from "react";
import LeadForm from "./components/LeadForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Service</h1>
      </header>
      <main>
        <LeadForm />
      </main>
    </div>
  );
}

export default App;
