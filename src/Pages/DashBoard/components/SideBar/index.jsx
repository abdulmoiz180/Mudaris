import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

function DashboardContent() {
  return <Typography>Welcome to the Dashboard</Typography>;
}

function AboutCourseContent() {
  return <Typography>About this Course</Typography>;
}

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "dashboard/Courses",
    title: "Courses",
    icon: <SchoolIcon />,
    children: [
      {
        segment: "AddCourse",
        title: "Add Course",
        icon: <SchoolIcon />,
      },
      {
        segment: "AboutCourse",
        title: "About Course",
        icon: <SchoolIcon />,
      },
    ],
  },
];

function Search({ onNavigate }) {
  return (
    <React.Fragment>
      <Box className="ParentSideBarNav">
        <h2>Madaras Academy</h2>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search"
          sx={{
            display: { xs: "none", md: "inline-block" },
            mr: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "22px", // Customize border radius
            },
          }}
        />
        <Box className="IconsInsideNavBar">
          {NAVIGATION.map((item) => {
            // Check if the item has children (like Courses)
            if (item.children) {
              return (
                <React.Fragment key={item.segment}>
                  {item.children.map((child) => (
                    <Tooltip key={child.segment} title={child.title} enterDelay={1000}>
                      <IconButton
                        aria-label={child.title}
                        onClick={() => onNavigate(`${item.segment}/${child.segment}`)}
                      >
                        {child.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </React.Fragment>
              );
            }
            return (
              <Tooltip key={item.segment} title={item.title} enterDelay={1000}>
                <IconButton aria-label={item.title} onClick={() => onNavigate(item.segment)}>
                  {item.icon}
                </IconButton>
              </Tooltip>
            );
          })}
        </Box>
      </Box>
    </React.Fragment>
  );
}

Search.propTypes = {
  onNavigate: PropTypes.func.isRequired,
};

function DashboardLayoutSlots(props) {
  const { window } = props;
  const navigate = useNavigate(); // Use useNavigate to handle routing

  const handleNavigate = (segment) => {
    navigate(`/${segment}`); // Navigate to the respective route dynamically
  };

  return (
    <AppProvider navigation={NAVIGATION}>
      <DashboardLayout slots={{ toolbarActions: () => <Search onNavigate={handleNavigate} /> }}>
        {props.children}
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutSlots.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutSlots;
