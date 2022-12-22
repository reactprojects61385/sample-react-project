import "./global.css";
import Test from "./components/Test";
import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [show, setShow] = useState(false);
  const text = show ? "Hide" : "Show";

  return (
    <main>
      <Button
        onClick={() => setShow((show) => !show)}
        text={text}
        variant="dark"
      />
      {show && <Test />}
    </main>
  );
}
