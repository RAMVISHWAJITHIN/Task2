import React from "react";
import AddNudgeForm from "./components/AddNudgeForm";
import NudgeList from "./components/NudgeList";

function App() {
  return (
    <div className="App">
      <h1 className="text-4xl font-bold">Nudge Management</h1>
      <AddNudgeForm onNudgeAdded={() => window.location.reload()} />
      <NudgeList />
    </div>
  );
}

export default App;
