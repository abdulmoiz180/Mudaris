import * as React from "react";
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
import Heart from "../../assets/Icons/Heart.png";
import Cart from "../../assets/Icons/Bag.png";
import "./nav.css";

const pages = ["Explore", "Analysis Personalize", "Try Now", "Portfolio"];
const RightBtns = ["EN", Heart, Cart, "Sign In", "Get Started"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Helper function to check if a string is a URL (image path)
  const isImageUrl = (url) => {
    return /\.(png|jpg|jpeg|gif|svg)$/.test(url);
  };

  return (
    <AppBar position="static" className="Navbar">
      <Container maxWidth="xl">
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
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
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
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
              </div>
              
              {/* Right-side Buttons */}
              <div className="navBarBtns2">
              <div className="BorderDiv">
                {RightBtns.map((btn, index) => (
                  <div className="rightbtn">
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                    className="inter "
                  >
                    {isImageUrl(btn) ? (
                      <img src={btn} alt="icon" style={{ width: 24, height: 24 }} />
                    ) : (
                      btn
                    )}
                  </Button>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
