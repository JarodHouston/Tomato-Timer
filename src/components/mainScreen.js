import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../styles/mainScreen.css";
import Header from "./header";
import Timer from "./timer";
import TomatoImage from "../images/tomato.png";
import BlueberryImage from "../images/blueberry.png";

function MainScreen() {
  const [isFocused, setIsFocused] = useState(true);
  const [initialTime, setInitialTime] = useState(1500);

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setIsFocused(newValue === 0); // Set focus state based on tab index
    setInitialTime(newValue === 0 ? 1500 : 300);
  };

  const focusGradient = "linear-gradient(to bottom, #a74646, #9e2020)";
  const breakGradient = "linear-gradient(to bottom, #d2e2e5, #2c4fa6)";

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: isFocused ? focusGradient : breakGradient,
        transition: "background-image 2s ease-in-out",
      }}
    >
      {/* Background gradient layers */}
      <div
        className="gradient-container break-gradient"
        style={{
          opacity: isFocused ? 0 : 1,
          transition: "opacity 2s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />
      <div
        className="gradient-container focus-gradient"
        style={{
          opacity: isFocused ? 1 : 0,
          transition: "opacity 2s ease-in-out",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />

      {/* Content wrapper with higher z-index */}
      <div
        className="content-wrapper"
        style={{ position: "relative", zIndex: 1 }}
      >
        <img
          src={TomatoImage}
          alt="tomato"
          className="fruit-image"
          style={{
            opacity: isFocused ? 0.7 : 0,
            transition: isFocused
              ? "opacity 2s ease-in" // Fade in slowly when showing
              : "opacity 0s", // Disappear immediately when hiding
          }}
        />
        <img
          src={BlueberryImage}
          alt="tomato"
          className="fruit-image"
          style={{
            opacity: isFocused ? 0 : 0.7,
            transition: isFocused
              ? "opacity 0s" // Disappear immediately when hiding
              : "opacity 2s ease-in", // Fade in slowly when showing
          }}
        />
        <Header focus={isFocused} />
        <div className="tab-button-container">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="none"
              sx={{ minHeight: "2rem" }}
            >
              <Tab
                label="Focus"
                className={
                  tabValue === 0
                    ? "tab-button tab-button-selected"
                    : "tab-button"
                }
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1rem",
                  backgroundColor: isFocused ? "#e57b6f" : "#6f8ae5", // Change color based on focus state
                  transition: "background-color 2s ease-in-out",
                  color: "white",
                  borderRadius: "8px 8px 0px 0px",
                  minHeight: "2rem",
                  minWidth: "auto",
                }}
              />
              <Tab
                label="Break"
                className={
                  tabValue === 1
                    ? "tab-button tab-button-selected"
                    : "tab-button"
                }
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "1rem",
                  backgroundColor: isFocused ? "#e57b6f" : "#6f8ae5", // Change color based on focus state
                  transition: "background-color 2s ease-in-out",
                  color: "white",
                  borderRadius: "8px 8px 0px 0px",
                  minHeight: "2rem",
                  minWidth: "auto",
                }}
              />
            </Tabs>
          </Box>
        </div>
        <div className="fading-line-container">
          <div className="fading-line-wrapper">
            <div className="fading-line"></div>
          </div>
        </div>
        <Timer time={initialTime} />
      </div>
    </div>
  );
}

export default MainScreen;
