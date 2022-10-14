import "./App.css";
import Name from "./components/Name";
import Book from "./components/Book";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Booking from "./components/Booking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Name />} />
        <Route path="Book" element={<Book />} />
        <Route path="Booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
