import "./App.css";
import Model from "./pages/Home";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyItems: "center",
        marginTop: 100,
      }}
    >
      <Model />
    </div>
  );
}

export default App;
