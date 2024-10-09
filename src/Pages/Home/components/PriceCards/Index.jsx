import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import "./PriceCard.css";
import Line from "../../../../assets/Icons/line.png";
import Tick from "../../../../assets/Icons/tick.png";

// Import the other component for the "$999" plan
import PaymentScreen from "./PaymentScreen"; // Assuming it's in the same folder

export const PriceCards = () => {
  const { data, language } = useLanguage();
  const [showSpecial, setShowSpecial] = useState(false); // State to track if SpecialComponent should be shown

  if (!data) {
    return <div>Loading...</div>;
  }

  const paymentPlans = data.paymentPlans;

  // const handleSubscribe = (plan) => {
  //   const url =
  //     plan.price === "$299"
  //       ? "https://buy.stripe.com/5kA8ww5xk2EUe0o6oL"
  //       : "https://buy.stripe.com/4gw7ssf7U6Va09y4gF";
  //   window.location.href = url; // Redirect for other prices
  // };
  // const url =
  //   plan.price === "$299"
  //     ? "https://buy.stripe.com/5kA8ww5xk2EUe0o6oL"
  //     : "https://buy.stripe.com/4gw7ssf7U6Va09y4gF";
  // window.location.href = url; // Redirect for other prices

  // Dynamically set the font based on the language
  const fontClass = language === "persian" ? "rubik" : "";
  return (
    <section className="price-container">
      <Box className="text-container">
        <Typography variant="h1" className={`plan-title inter ${fontClass}`}>
          {paymentPlans[0].title}
        </Typography>
        <Typography
          variant="body1"
          className={`plan-description inter ${fontClass}`}
        >
          {paymentPlans[0].description}
        </Typography>
      </Box>
      <Box className="card-wrapper">
        {paymentPlans.slice(1, 5).map((plan, index) => (
          <Card
            key={index}
            className={`plan-card ${
              language === "persian" ? `align-right` : `align-left`
            } ${fontClass}`}
          >
            <CardContent>
              <Box className="plan-upper">
                <Typography
                  variant="h5"
                  className={`plan-heading inter ${fontClass}`}
                >
                  {plan[`plan${index + 1}`]}
                </Typography>
                <Typography
                  variant="h6"
                  className={`plan-price inter ${fontClass}`}
                >
                  {plan.price}
                </Typography>
                <img src={Line} className="linePic" alt="line separator" />
              </Box>
              {plan.para && (
                <Typography
                  variant="body2"
                  className={`plan-para inter ${fontClass}`}
                >
                  {plan.para}
                </Typography>
              )}
              <ul className="plan-perks">
                {[
                  plan.perk1,
                  plan.perk2,
                  plan.perk3,
                  plan.perk4,
                  plan.perk5,
                  plan.perk6,
                ]
                  .filter(Boolean)
                  .map((perk, perkIndex) => (
                    <Box className="perk flex inter" key={perkIndex}>
                      <img src={Tick} alt="Tick Icon" />
                      <li className={fontClass}>{perk}</li>
                    </Box>
                  ))}
              </ul>
            </CardContent>
            <Box className="ButtonDiv">
              <Button
                className={`subscribe-button ${fontClass}`}
                onClick={() => handleSubscribe(plan)}
              >
                {paymentPlans[5].subscribe}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </section>
  );
};
export default PriceCards;
