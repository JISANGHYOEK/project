import React from "react";
import { Link } from "react-router-dom";
import FAQItem from "./FAQItem";
const FAQTable = ({ faqs }) => {
  return (
    <table className="faq-item-table">
      <tbody>
        {faqs.map((faq) => (
          <tr key={faq.id}>
            <td>
              <Link to={`/faq/${faq.id}`}>
                <h2>{faq.question}</h2>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FAQTable;
