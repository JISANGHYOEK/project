import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from "./components/Header/Header";
import Sectioncomponent from "./components/Section/Section";
import FooterComponent from "./components/Footer/Footer";
import LoginPage from "./components/LoginPage/LoginPage";
import TermsAgree from "./components/SignupPage/TermsAgree";
import SignupPage from "./components/SignupPage/SignupPage";
import MainPage from "./components/MainPage/MainPage";
import TermsPage from "./components/Footer/TermsPage";
import PersonalPage from "./components/Footer/PersonalPage";
import CscPage from "./components/Csc/CscPage";
import MainCscPage from "./components/Csc/MainCscPage";
import AskPage from "./components/Ask/CscPage";

function LandingPage() {
  return (
    <div className="App">
      <HeaderComponent />
      <Sectioncomponent />
      <div className="Footer">
        <FooterComponent />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/TermsAgree" element={<TermsAgree/>} />
        <Route path="/SignupPage" element={<SignupPage/>} />
        <Route path="/MainPage" element={<MainPage/>} />
        <Route path="/TermsPage" element={<TermsPage/>} />
        <Route path="/PersonalPage" element={<PersonalPage/>} />
        <Route path="/CscPage" element={<CscPage/>} />
        <Route path="/MainCscPage" element={<MainCscPage/>} />
        <Route path="/AskPage" element={<AskPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
