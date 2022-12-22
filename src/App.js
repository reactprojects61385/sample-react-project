import logo from "./logo.svg";

function App() {
  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <>
          <img src="/logo192.png" alt="" />
          <img src={logo} alt="" />
        </>
      )}
      <p>{process.env.REACT_APP_API_URL}</p>
    </>
  );
}

export default App;
