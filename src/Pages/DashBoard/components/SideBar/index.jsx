import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircle from '@mui/icons-material/AccountCircle';
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import "./sidebar.css";
import LogoMadaris from '../assets/images/LogoAcademy.jfif'
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

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
        segment: "AllCourses",
        title: "All Courses",
        icon: <SchoolIcon />,
      },

      {
        segment: "Livestream",
        title: "Live Stream",
        icon: <SchoolIcon />, 
      },
      
    ],
  },
  {
    segment: "logout",
    title: "Logout",
    icon: <LogoutIcon />
  }
];
const Icons = [
  { icon: <DashboardIcon />, title: "Dashboard", segment: "dashboard" },
  { icon: <AccountCircle />, title: "Profile", segment: "profile" },
  { icon: <LogoutIcon />, title: "Logout", segment: "logout" }
];

function Search({ onNavigate }) {
  return (
    <React.Fragment>
      <Box className="ParentSideBarNav">
        <Box className="SideBarNavLogoandName">
        <img src={LogoMadaris}/>
        <h2>Mudaris Academy</h2>
        </Box>
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
          {Icons.map((item, index) => (
            <Tooltip key={index} title={item.title} enterDelay={1000}>
              <IconButton
                aria-label={item.title}
                onClick={() => onNavigate(item.segment)}
              >
                {item.icon}
              </IconButton>
            </Tooltip>
          ))}
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
