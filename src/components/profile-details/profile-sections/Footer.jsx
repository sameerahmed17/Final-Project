import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import ClearAllIcon from "@mui/icons-material/ClearAll";

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  return (
    <footer className="py-4 px-2 mt-4">
      <Grid container className="justify-content-between" spacing={4}>
        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="body1" gutterBottom>
            About
          </Typography>
          <Typography variant="body2">
            Professional Community Policies
          </Typography>
          <Typography variant="body2">Privacy & Terms</Typography>
          <Typography variant="body2">Sales Solutions</Typography>
          <Typography variant="body2">Careers</Typography>
          <Typography variant="body2">Marketing Solutions</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="body1" gutterBottom>
            Accessibility
          </Typography>
          <Typography variant="body2">Careers</Typography>
          <Typography variant="body2">Ad Choices</Typography>
          <Typography variant="body2">Mobile</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="body1" gutterBottom>
            Talent Solutions
          </Typography>
          <Typography variant="body2">Marketing Solutions</Typography>
          <Typography variant="body2">Visit our Help Center.</Typography>
          <Typography variant="body2">Advertising</Typography>
          <Typography variant="body2">Small Business</Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4}>
          <Typography className="my-2" variant="body1" gutterBottom>
            <HelpIcon /> Questions?
          </Typography>
          <Typography className="my-2" variant="body2">
            <SettingsIcon /> Manage your account and privacy Go to your
            Settings.
          </Typography>
          <Typography className="my-2" variant="body2">
            <SecurityIcon /> Recommendation transparency Learn more about
            Recommended Content.
          </Typography>
          <Typography
            className="my-2"
            variant="body1"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              localStorage.clear();
              window.location.reload(); // Refresh to apply changes
            }}
          >
            <ClearAllIcon /> Clear local storage
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4}>
          <Typography variant="body1" gutterBottom>
            Select Language
          </Typography>
          <FormControl fullWidth>
            <Select
              value={selectedLanguage}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select a language
              </MenuItem>
              <MenuItem value="Dansk (Danish)">Dansk (Danish)</MenuItem>
              <MenuItem value="Polski (Polish)">Polski (Polish)</MenuItem>
              <MenuItem value="Suomi (Finnish)">Suomi (Finnish)</MenuItem>
              <MenuItem value="Tagalog (Tagalog)">Tagalog (Tagalog)</MenuItem>
              <MenuItem value="English (English)">English (English)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Typography
        className="mt-4 text-secondary"
        variant="body2"
        sx={{ mt: 4, color: "text.secondary" }}
      >
        © 2025 Your Company Name. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
