import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import "./sidebar.css";
import LogoMadaris from "../assets/images/LogoAcademy.jfif";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDispatch } from "react-redux";
import { logoutUser } from "@features/auth/authThunk";
import courseicon from "../assets/icons/courseicon.png";
import dashboardicon from "../assets/icons/dashboardicon.png";
import usericon from "../assets/icons/usericon.png";
const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },

  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <img className="side-icon" src={dashboardicon} alt="Dashboard" />, // Custom image icon
  },
  {
    segment: "dashboard/Courses",
    title: "Courses",
    icon: <img className="side-icon" src={courseicon} alt="Courses" />, // Custom image icon
    children: [
      {
        segment: "AddCourse",
        title: "Add Course",
      },
      {
        segment: "AllCourses",
        title: "All Courses",
      },
      {
        segment: "Livestream",
        title: "Live Stream",
      },
    ],
  },

  {
    segment: "",
    title: "Logout",
    icon: <LogoutIcon className="side-icon" />,
  },
];
const Icons = [

  { icon: <img className="side-icon" src={dashboardicon} alt="Dashboard" /> },
  {
    icon: <img src={usericon} className="side-icon" />,
    title: "Profile",
    segment: "profile",
  },
  {
    icon: <LogoutIcon className="side-icon" />,
    title: "Logout",
    segment: "logout",
  },
];

function Search({ onNavigate }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
    console.log("user Logged out...");
  };

  return (
    <React.Fragment>
      <Box className="ParentSideBarNav">
        <Box className="SideBarNavLogoandName">
          <img src={LogoMadaris} />
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
                onClick={() => {
                  if (item.segment === "logout") {
                    handleLogout(); // Call the logout function
                  } else {
                    onNavigate(item.segment); // Navigate for other icons
                  }
                }}
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
  const navigate = useNavigate(); // Use useNavigate to handle routing

  const handleNavigate = (segment) => {
    navigate(`/${segment}`); // Navigate to the respective route dynamically
  };

  return (
    <AppProvider navigation={NAVIGATION}>
      <DashboardLayout
        slots={{ toolbarActions: () => <Search onNavigate={handleNavigate} /> }}
      >
        {props.children}
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutSlots.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutSlots;
