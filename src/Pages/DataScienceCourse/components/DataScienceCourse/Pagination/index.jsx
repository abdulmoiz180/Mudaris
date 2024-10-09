import React from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { styled } from "@mui/system";
import './Pagination.css';

const CustomPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    color: "#fff", // Default text color for pagination items
  },
  "& .MuiPaginationItem-page": {
    borderRadius: "50%", // Circular page numbers
    "&.Mui-selected": {
      backgroundColor: "#141415", // Background color for selected page
      color: "#fff", // Text color for selected page
    },
  },
  "& .MuiPaginationItem-previousNext": {
    border: "1px solid rgba(255, 255, 255, 0.5)", // Border for previous/next buttons
    color: "#fff", // Text color for previous/next buttons
    borderRadius: "50%",
    backgroundColor: "#8C45FF", // Circular arrows
  },
  "& .MuiPaginationItem-previous, & .MuiPaginationItem-next": {
    border: "1px solid rgba(255, 255, 255, 0.5)", // Border for previous/next buttons
    color: "#fff", // Text color for previous/next buttons
    borderRadius: "50%", // Circular arrows
    "&.Mui-selected": {
      backgroundColor: "#8C45FF", // Background color for selected previous/next buttons
      color: "#fff", // Text color for selected previous/next buttons
    },
  },
});

const PaginationComponent = () => {
  return (
    <CustomPagination
      count={6}
      variant="outlined"
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          sx={{
            "&.Mui-selected": {
              backgroundColor: "#7f3afc", // Purple color on active page
              color: "#fff", // White text on selected
            },
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Hover effect for buttons
            },
          }}
        />
      )}
    />
  );
};

export default PaginationComponent;
