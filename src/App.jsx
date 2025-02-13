import "./App.css";
import Settings from "./components/Settings.jsx";
import MyNavBar from "../src/components/MyNavBar.jsx";
import MyFooter from "./components/MyFooter.jsx";
import MyMain from "./components/MyMain.jsx";
import Account from "./components/Account.jsx";

import { BrowserRouter, Link, Route, Routes } from "react-router";
import TvShows from "./components/TvShows.jsx";
import Details from "./components/Details.jsx";
function App() {
  return (
    <BrowserRouter>
      <MyNavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-dark">
              <MyMain />
              <MyFooter />
            </div>
          }
        />

        <Route
          path="/account"
          element={
            <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-dark">
              <Account />
            </div>
          }
        />

        <Route path="/settings" element={<Settings />} />
        <Route
          path="/tvshows"
          element={
            <div style={{ minHeight: "100vh" }} className="d-flex flex-column bg-dark">
              <TvShows />
            </div>
          }
        />
        <Route path="/moviedetails/:movieId" element={<Details />} />
        <Route
          path="*"
          element={
            <div
              style={{
                minHeight: "100vh",
                backgroundImage:
                  "url(https://dilei.it/wp-content/uploads/sites/3/2022/07/ezio-greggio.jpg?w=670&h=377&quality=100&strip=all&crop=1)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="d-flex flex-column text-white"
            >
              <h1 className="text-center mt-5">OH OH, SEI FINITO NELLE GRINFIE DEL VILE</h1>
              <Link className="btn btn-danger text-warning w-25 p-2 mx-auto mt-5" to="/">
                IMPLORA PIETÁ E TORNA ALLA HOME
              </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
