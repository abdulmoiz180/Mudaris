import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
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
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <img className="side-icon" src={dashboardicon} alt="Dashboard" />,
  },
  {
    segment: "Mudaris/dashboard",  // Parent segment for "Courses"
    title: "Courses",
    icon: <img className="side-icon" src={courseicon} alt="Courses" />,
    children: [
      {
        segment: "courses/AddCourse",  // Correct full segment path
        title: "Add Course",
      },
      {
        segment: "courses/AllCourses",  // Correct full segment path
        title: "All Courses",
      },
      {
        segment: "courses/Livestream",  // Correct full segment path
        title: "Live Stream",
      },
    ],
  },
  {
    segment: "",  // Segment for Logout, you might need this to handle routing properly
    title: "Logout",
    icon: <LogoutIcon className="side-icon" />,
  },
];

const Icons = [
  { icon: <img className="side-icon" src={dashboardicon} alt="Dashboard" /> },
  {
    icon: <img src={usericon} className="side-icon" alt="Profile"/>,
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
    navigate("/Mudaris");
    console.log("User logged out...");
  };

  return (
    <React.Fragment>
      <Box className="ParentSideBarNav">
        <Box className="SideBarNavLogoandName">
          <img src={LogoMadaris} alt="Mudaris Academy" />
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
                    handleLogout();
                  } else {
                    onNavigate(item.segment); // Correctly navigate to segment
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
  const navigate = useNavigate();

  const handleNavigate = (segment) => {
    navigate(`/Mudaris/dashboard/${segment}`);  // Prefix routes with `/Mudaris/dashboard/`
    console.log(segment);
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
