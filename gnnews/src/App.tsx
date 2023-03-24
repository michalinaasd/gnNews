import { Route, Routes } from "react-router-dom";
import Content from "./components/Content/Content";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
    </Routes>
  );
}

export default App;
