import { useState } from "react";

function TestUseState() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="exercise-card">
      <h2>Test useState</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button>Change</button>

      <p className="result-text">
        My name is <b>{username || "___"}</b>, age{" "}
        <b>{age || "___"}</b>
      </p>
    </div>
  );
}

export default TestUseState;
