import "./App.css";
import Name from "./components/Name";
import Book from "./components/Book";
// import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" exact element={<Name />} />
        <Route path="Book" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
