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
    segment: "Courses",
    title: "Courses",
    icon: <img className="side-icon" src={courseicon} alt="Courses" />,
    children: [
      {
        segment: "AddCourse", // Updated to include parent 'Courses'
        title: "Add Course",
      },
      {
        segment: "AllCourses", // Updated to include parent 'Courses'
        title: "All Courses",
      },
      {
        segment: "Livestream", // Updated to include parent 'Courses'
        title: "Live Stream",
      },
    ],
  },
  {
    segment: "", // You may want to set segment to handle logout properly
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
    navigate("/Mudaris");
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
  const navigate = useNavigate();

  const handleNavigate = (segment) => {
    navigate(`${segment}`); // This will now work for both parent and child segments
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
