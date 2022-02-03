import Info from "./Info";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "hide" : "show"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
