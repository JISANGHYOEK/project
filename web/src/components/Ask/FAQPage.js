import FAQTable from "./FAQTable";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../Footer/Footer";
import { Box } from "@mui/material";
function FAQPage({ faqs }) {
  return (
    <div>
      <HeaderComponent />
      <Box
        sx={{
          display: "block",
          wordBreak: "break-all",
          fontSize: "1.75em",
          fontWeight: 400,
          textAlign: "left",
          padding: "20px",
          marginBottom: "20px",
          background: "none",
          borderBottom: "2px solid black",
        }}
      >
        FAQ 게시판
      </Box>
      <FAQTable faqs={faqs} />
      <FooterComponent />
    </div>
  );
}

export default FAQPage;
