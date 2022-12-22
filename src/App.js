import logo from "./logo.svg";

import "./global.css";
import Test from "./Test";
import { Title, Tailwind } from "./Components";
import Bootsrap from "./Bootsrap";

import "./tailwind.css";
import MaterialUI from "./MaterialUi";
import Input from "./Input";

function App() {
  return (
    <main>
      {process.env.NODE_ENV === "production" && (
        <>
          <img src="/logo192.png" alt="" />
          <img src={logo} alt="" />
        </>
      )}
      <p className="black">{process.env.REACT_APP_API_URL}</p>
      <Test />
      <Title>Hello World!</Title>
      <Title size="small">This is a small title..</Title>
      <Bootsrap />
      <Tailwind />
      <MaterialUI />
      <Input />
    </main>
  );
}

export default App;
