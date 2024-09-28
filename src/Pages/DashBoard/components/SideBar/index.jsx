import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import DescriptionIcon from "@mui/icons-material/Description";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import { AppProvider } from "@toolpad/core/AppProvider";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import SchoolIcon from "@mui/icons-material/School";
import "./sidebar.css";

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
    segment: "Courses",
    title: "Courses",
    icon: <SchoolIcon />,
    children: [
      {
        segment: "Add Course",
        title: "Add Course",
        icon: <SchoolIcon />,
      },
      {
        segment: "About Course",
        title: "About Course",
        icon: <SchoolIcon />,
      },
    ],
  },
];

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};
function Icons() {
  return (
    <React.Fragment>
      <Tooltip title="Profile" enterDelay={1000}>
        <IconButton aria-label="profile">
          <AccountCircle />
        </IconButton>
      </Tooltip>
      <Tooltip title="Search" enterDelay={1000}>
        <IconButton aria-label="search">
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Dashboard" enterDelay={1000}>
        <IconButton aria-label="dashboard">
          <DashboardIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Description" enterDelay={1000}>
        <IconButton aria-label="description">
          <DescriptionIcon />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
}

function Name(){
  return(
    <>
    {/* <img src={}/> */}
    <h2>Madaras Academy</h2>
    </>
  )
}
function Search() {
  return (
    <React.Fragment>
      <Box className="ParentSideBarNav">
        <Name/>
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: "inline", md: "none" },
            }}
          >
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{
          display: { xs: "none", md: "inline-block" },
          mr: 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: "22px", // Change this value to the desired border radius
          },
        }}
      />
      <Box className="IconsInsideNavBar">
      <Icons />
      </Box>
      </Box>
    </React.Fragment>
  );
}
function DashboardLayoutSlots(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState("/dashboard");

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider navigation={NAVIGATION} router={router} window={demoWindow}>
      <DashboardLayout slots={{ toolbarActions: Search }}>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutSlots.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutSlots;
