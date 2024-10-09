import { Typography, Button } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <main>
      <Typography className="clr-white inter">404 Page not found</Typography>
      <Button variant="contained">
        <Link to="/">Go to home page</Link>
      </Button>
    </main>
  );
};

export default NotFound404;
