import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";

import Fundamentals from "./fundamentals/Fundamentals";
import Variables from "./variables/Variables";
import NotFound from "./notfound/NotFound";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL ?? "/"}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fundamentals" element={<Fundamentals />} />
            <Route path="variables" element={<Variables />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

