import "./global.css";
import Test from "./components/Test";
import { useEffect, useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [show, setShow] = useState(false);
  const text = show ? "Hide" : "Show";

  useEffect(() => {
    window.onkeyup = (e) => {
      const { key } = e;

      if (key === "Enter") setShow((show) => !show);
    };
  }, []);

  return (
    <main>
      <Button
        onClick={() => setShow((show) => !show)}
        text={text}
        variant="primary"
      />
      {show && <Test />}
    </main>
  );
}
