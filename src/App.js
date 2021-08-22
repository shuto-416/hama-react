import { useState } from "react";
import Hage from "./Hage";

function App() {
  const a = 2, b = 4;
  const [hage, setHair] = useState(0);

  return <div>{a == 2 && <Hage yyy={hage} setHair={setHair} />}</div>;
}

export function add(a, b) {
  return a + b;
}

export default App;
