import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
import { Col, Row } from "antd";

function App() {
  return (
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
  );
}

export default App;
