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
import { useLanguage } from "../../globalContext/GlobalProvider";
import "./nav.css";

function ResponsiveAppBar() {
  const { language } = useLanguage();
  const { toggleLanguage, data } = useLanguage();
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

  // Ensure that data is loaded before rendering
  if (!data) return <div>Loading...</div>;

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
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {data.pagesnav.map((page, index) => (
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
                {data.pagesnav.map((page, i) => (
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

              {/* Right-side Buttons */}
              <Box component="div" className="navBarBtns2 BorderDiv">
                {data.navRightBtns.map((btn, index) => (
                  <div className="rightbtn" key={index}>
                    <Button
                      sx={{ my: 2, color: "white", display: "block" }}
                      className="inter"
                      onClick={
                        btn === "EN" || btn === "فارسی"
                          ? toggleLanguage
                          : handleCloseNavMenu
                      }
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
                  </div>
                ))}
              </Box>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
