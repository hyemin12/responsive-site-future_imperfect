import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Search from "./routes/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Detail />} />
          <Route path="/search/:param" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
