import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { faqArray } from "../../Constants/Seed"; // Ensure this path is correct
import "./faq.css"; // Ensure you have the styles needed in this file
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <section className="width-90 faq-section">
      <Box component="div" className="faq-title-container column">
        <Typography variant="h6" className="clr-white inter faq-title">
          Frequently Asked Questions
        </Typography>
        <Typography className="clr-white inter faq-subtitle">
          Still you have any questions? Contact our Team via hello@squareup.com
        </Typography>
      </Box>
      <div className="faq-container column ">
        {faqArray.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleAccordionChange(index)}
            className="faq-wrapper column transparent"
          >
            <AccordionSummary
              expandIcon={
                expanded === index ? (
                  <CloseIcon
                    className={expanded === index ? `purple` : `clr-white`}
                  />
                ) : (
                  <AddIcon
                    className={expanded === index ? `purple` : `clr-white`}
                  />
                )
              }
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              className={`faq-question flex flex-center ${
                expanded === index ? "purple" : "clr-white"
              }`}
            >
              <span className="faq-number-container flex flex-center">
                <Typography
                  className={`faq-number inter  ${
                    expanded === index ? "purple" : "clr-white"
                  }`}
                >
                  0{index + 1}
                </Typography>
              </span>

              <Typography
                className={`faq-question inter flex flex-center ${
                  expanded === index ? "purple" : "clr-white"
                }`}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq-answer-wrapper">
              <Typography className="gray">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
