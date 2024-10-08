import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { useLanguage } from "../../../../globalContext/GlobalProvider";
import "./PriceCard.css";
import Line from "../../../../assets/Icons/line.png";
import Tick from "../../../../assets/Icons/tick.png";

export const PriceCards = () => {
  const { data, language } = useLanguage();

  if (!data) {
    return <div>Loading...</div>;
  }

  const paymentPlans = data.paymentPlans;

  const handleSubscribe = (plan) => {
    const url =
      plan.price === "$299"
        ? "https://buy.stripe.com/5kA8ww5xk2EUe0o6oL"
        : "https://buy.stripe.com/4gw7ssf7U6Va09y4gF";
    window.location.href = url;
  };

  return (
    <section className="price-container">
      <Box className="text-container">
        <Typography variant="h1" className="plan-title inter">
          {paymentPlans[0].title}
        </Typography>
        <Typography variant="body1" className="plan-description inter">
          {paymentPlans[0].description}
        </Typography>
      </Box>
      <Box className="card-wrapper">
        {paymentPlans.slice(1, 5).map((plan, index) => (
          <Card
            key={index}
            className={`plan-card ${
              language === "persian" ? `align-right` : `align-left`
            }`}
          >
            <CardContent>
              <Box className="plan-upper">
                <Typography variant="h5" className="plan-heading inter">
                  {plan[`plan${index + 1}`]}
                </Typography>
                <Typography variant="h6" className="plan-price inter">
                  {plan.price}
                </Typography>
                <img src={Line} className="linePic" alt="line separator" />
              </Box>
              {plan.para && (
                <Typography variant="body2" className="plan-para inter">
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
                      <li>{perk}</li>
                    </Box>
                  ))}
              </ul>
            </CardContent>
            <Box className="ButtonDiv">
              <Button
                className="subscribe-button"
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
