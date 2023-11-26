import FAQTable from "./FAQTable";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
function FAQPage({ faqs }) {
  return (
    <div>
      <HeaderComponent />
      <FAQTable faqs={faqs} />
      <FooterComponent />
    </div>
  );
}

export default FAQPage;
