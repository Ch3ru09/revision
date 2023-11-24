import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Navbar from "./components/NavBar";
import Fundamentals from "./fundamentals/Fundamentals";
import Variables from "./variables/Variables";
import NotFound from "./notfound/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="fundamentals" element={<Fundamentals />} />
              <Route path="variables" element={<Variables />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
