import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
import { RouteContextProvider } from "./hooks/context/routeContext";

function App() {
  return (
    <RouteContextProvider>
      <Router>
        <Header />
        <div className="main">
          <Routes>
            {routes.map((route, i) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            ))}
          </Routes>
        </div>
        <Footer />
      </Router>
    </RouteContextProvider>
  );
}

export default App;
