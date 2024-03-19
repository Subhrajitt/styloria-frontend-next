import React, { useEffect, useState } from "react";
import stylorialogo from "../../public/assest/styloria_logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, alpha, styled } from "@mui/material";
import youtube from "../../public/assest/youtube_styloria.png";
import facebook from "../../public/assest/facebook_logo_styloria.png"
import twitter from "../../public/assest/x_logo_styloria.png"
import linkedin from "../../public/assest/linkedIn_logo_styloria.png"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setAnchorEl(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="styloria_header_main">
        <div className="commonWidth">
          <div className="navTopWrpr">
            <div className="navMainWrpr">
              <div className="styloria_logo">
                <div className="styloria_logo_wrpr">
                  <Image src={stylorialogo} alt="" />
                </div>
              </div>
              <div className={`navMenus ${anchorEl ? "showDiv" : ""}`}>
                <ul className="navMenuMain">
                  <li className={`menus ${pathname === "/" ? "active" : ""}`}>
                    <Link href="/" onClick={() => router.push("/")}>
                      Home
                    </Link>
                  </li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Offers</li>
                  <li>Blogs</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="searchFields">
                <Search>
                  <StyledInputBase
                    placeholder=""
                    inputProps={{ "aria-label": "search" }}
                  />

                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                </Search>
              </div>
            </div>
            <div className="socialMedia_logo">
              <Link href="https://www.youtube.com/" target="_blank">
                <Image src={youtube} alt="" />
              </Link>
              <Link href="https://www.facebook.com/" target="_blank">
                <Image src={facebook} alt="" />
              </Link>{" "}
              <Link href="https://twitter.com" target="_blank">
                <Image src={twitter} alt="" />
              </Link>{" "}
              <Link href="https://www.linkedin.com/" target="_blank">
                <Image src={linkedin} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
