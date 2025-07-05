import "./App.css";
import TableList from "./components/TableList";

function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: "1260px",
        margin: "0 auto",
      }}
    >
      <TableList />
    </div>
  );
}

export default App;
