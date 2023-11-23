// @ts-expect-error: there isn't a newer version of types for react-router-dom v6
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./home/Home";
import Variables from "./variables/Variables";
import NotFound from "./notfound/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="variable" element={<Variables />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;

