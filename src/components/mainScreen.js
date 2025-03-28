import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "../styles/mainScreen.css";
import Header from "./header";
import Timer from "./timer";

function MainScreen() {
  const [isFocused, setIsFocused] = useState(true);
  const [initialTime, setInitialTime] = useState(1500);

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setIsFocused(newValue === 0); // Set focus state based on tab index
    setInitialTime(newValue === 0 ? 1500 : 300);
  };

  return (
    <div className="main-container">
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
                tabValue === 0 ? "tab-button tab-button-selected" : "tab-button"
              }
              sx={{
                fontFamily: "Montserrat, sans-serif", // Change font
                fontSize: "1rem",
                backgroundColor: "#e57b6f",
                color: "white",
                borderRadius: "8px 8px 0px 0px",
                minHeight: "2rem",
                minWidth: "auto",
              }}
            />
            <Tab
              label="Break"
              className={
                tabValue === 1 ? "tab-button tab-button-selected" : "tab-button"
              }
              sx={{
                fontFamily: "Montserrat, sans-serif", // Change font
                fontSize: "1rem",
                backgroundColor: "#e57b6f",
                color: "white",
                borderRadius: "8px 8px 0px 0px",
                minHeight: "2rem",
                minWidth: "auto",
              }}
            />
          </Tabs>
        </Box>
      </div>
      <div class="fading-line-container">
        <div class="fading-line-wrapper">
          <div class="fading-line"></div>
        </div>
      </div>
      <Timer time={initialTime} />
    </div>
  );
}

export default MainScreen;
