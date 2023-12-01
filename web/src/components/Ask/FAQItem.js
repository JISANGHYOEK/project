import React from "react";
import { useParams } from "react-router-dom";
import FAQTable from "./FAQTable";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";

function FAQItem({ faqs }) {
  const { id } = useParams();

  const faq = faqs.find((faq) => faq.id === Number(id));

  if (!faq) {
    return <div></div>;
  }

  return (
    <div>
      <HeaderComponent />
      <FAQTable faqs={faq} />
      <FooterComponent />
    </div>
  );
}

export default FAQItem;
