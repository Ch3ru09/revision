import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";

import Layout from "./components/layout/Layout";
import Fundamentals from "./fundamentals/Fundamentals";
import Variables from "./variables/Variables";
import Functions from "./functions/Functions";
import NotFound from "./notfound/NotFound";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fundamentals" element={<Fundamentals />} />
            <Route path="variables" element={<Variables />} />
            <Route path="functions" element={<Functions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

