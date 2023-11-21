import "./App.css";
import HeaderComponent from "./components/Header/Header";
import Sectioncomponent from "./components/Section/Section";
import FooterComponent from "./components/Footer/Footer";
import Login from "./components/Login/Login";


function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Sectioncomponent />
        <div className="Footer">
        <FooterComponent />
      </div>
      <div>
      <Login/>
      </div>
    </div>
    </Router>
  );
}

export default App;
