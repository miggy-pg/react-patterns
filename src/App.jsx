import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactPattern from "./react-patterns/ReactPattern";
import CompoundComponent from "./compound-components/CompoundComponent";
import HomePage from "./HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="react-patterns" element={<ReactPattern />} />
        <Route path="compound-component" element={<CompoundComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
