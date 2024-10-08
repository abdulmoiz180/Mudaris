import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../../assets/Icons/Nav/Frame 1.png";
import { useLanguage } from "../../globalContext/GlobalProvider";
import "./nav.css";
import Signup from "../../Pages/Signup";
import Signin from "../../Pages/Login";
const pages = ["Explore", "Analysis Personalize", "Try Now", "Portfolio"];
const RightBtns = ["EN", "Sign In", "Get Started"];
import Heart from "../../assets/Icons/Heart.png";
import Cart from "../../assets/Icons/Bag.png";
function ResponsiveAppBar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const { data } = useLanguage();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentForm, setCurrentForm] = useState("SignIn");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClickOpen = (formType) => {
    setCurrentForm(formType);
    if (formType === "SignIn") {
      setOpenLogin(true);
      setOpenSignUp(false);
    } else {
      setOpenLogin(false);
      setOpenSignUp(true);
    }
  };
  const handleToggleDialogs = () => {
    if (currentForm === "SignIn") {
      setCurrentForm("Signup");
      setOpenLogin(false);
      setOpenSignUp(true);
    } else if (currentForm === "Signup") {
      setCurrentForm("SignIn");
      setOpenLogin(true);
      setOpenSignUp(false);
    }
  };

  const handleClose = () => {
    setOpenLogin(false);
    setOpenSignUp(false);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Helper function to check if a string is a URL (image path)
  const isImageUrl = (url) => {
    return /\.(png|jpg|jpeg|gif|svg)$/.test(url);
  };

  // Ensure that data is loaded before rendering
  if (!data) return <div>Loading...</div>;

  return (
    <AppBar
      position="static"
      className="Navbar"
      sx={{ background: "transparent" }}
    >
      <Container
        maxWidth="xl"
        sx={{ borderBottom: "1px solid #aaa", background: "transparent" }}
      >
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a">
            <img src={Logo} alt="LOGO" />
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "#aaaaaa",
                    display: "block",
                    fontFamily: "inherit",
                  }}
                >
                  {page === "Explore" ? (
                    <>
                      Explore <ArrowDropDownIcon />
                    </>
                  ) : (
                    page
                  )}
                </Button>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <div className="Btns">
              <div className="btnContainer">
                {pages.map((page, i) => (
                  <Button
                    key={i}
                    onClick={handleCloseNavMenu}
                    className="nav-menu-btn"
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page === "Explore" ? (
                      <>
                        Explore <ArrowDropDownIcon key={i} />
                      </>
                    ) : (
                      page
                    )}
                  </Button>
                ))}
              </div>

              <Box component="div" className="navBarBtns2 BorderDiv">
                {RightBtns.map((btn, index) => (
                  <div className="rightbtn inter" key={index}>
                    {btn === "Get Started" ? (
                      <Button
                        onClick={() => handleClickOpen("Signup")}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        Get Started
                      </Button>
                    ) : btn === "Sign In" ? (
                      <Button
                        onClick={() => handleClickOpen("SignIn")}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        Sign In
                      </Button>
                    ) : (
                      <Button
                        sx={{ my: 2, color: "white", display: "block" }}
                        className="inter"
                      >
                        {isImageUrl(btn) ? (
                          <img
                            src={btn}
                            alt="icon"
                            key={index}
                            style={{ width: 24, height: 24 }}
                          />
                        ) : (
                          btn
                        )}
                      </Button>
                    )}
                  </div>
                ))}
              </Box>
            </div>
          </Box>
          {currentForm === "SignIn" && (
            <Signin
              open={openLogin}
              handleClose={handleClose}
              toggle={handleToggleDialogs}
            />
          )}
          {currentForm === "Signup" && (
            <Signup
              open={openSignUp}
              handleClose={handleClose}
              toggle={handleToggleDialogs}
            />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
