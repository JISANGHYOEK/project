import FAQTable from "./FAQTable";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import FAQItem from "./FAQItem";

function FAQPage({ faqs }) {
  return (
    <div>
      <HeaderComponent />
      <FAQItem faqs={faqs} />
      <FAQTable faqs={faqs} />
      <FooterComponent />
    </div>
  );
}

export default FAQPage;
