import "./App.css";
import Model from "./pages/Home";
import Model2 from "./pages/Home/Model2";

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
      {/* <Model2></Model2> */}
    </div>
  );
}

export default App;
