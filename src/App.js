import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import routes from './routes';
import MeasurementTable from './components/Table/Table';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" /></head>
      <div className="main">
        <Header />
          <MeasurementTable></MeasurementTable>
          <Routes>
              {routes.map((route, i) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
