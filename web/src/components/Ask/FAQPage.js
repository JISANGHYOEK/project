import { useState, useEffect } from "react";
import axios from "axios";
import FAQTable from "./FAQTable";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import FAQItem from "./FAQItem";
import { adminStore } from "../../store";

function FAQPage() {
  const [data, setData] = useState([]);
  const { setAdmin } = adminStore();

  useEffect(() => {
    axios
      .get("/api/AskPage", { withCredentials: true })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/isAdmin", { withCredentials: true })
      .then((response) => {
        setAdmin(true);
      })
      .catch((error) => {
        console.error(error);
        setAdmin(false);
      });
  }, []);

  return (
    <div>
      <HeaderComponent />
      <FAQItem faqs={data} />
      <FAQTable faqs={data} />
      <FooterComponent />
    </div>
  );
}

export default FAQPage;
