import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
