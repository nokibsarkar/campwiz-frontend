import React from "react";
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Button, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";

// const primaryColor = "#3a9c6b";
// const secondaryColor = "#3a9c6b";
// const accentColor = "#006699";
const campaignNameColor = "#000000z"; // Black color for Campaign Names
const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Sidebar with Blue Background */}
      <Drawer
        variant="permanent"
        sx={{
          width: 260,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 260,
            bgcolor: "#006699", // Solid Blue Background
            color: "#fff",
          },
          "@media (max-width: 768px)": { width: 200 }, // Adjust width on smaller screens
        }}
      >
        <List>
          {["Home", "Active Campaigns", "Create Campaign", "Create Round", "Admin Panel"].map((text, index) => (
            <ListItem
              // button
              key={index}
              sx={{
                transition: "0.3s",
                "&:hover": {
                  bgcolor: "#fff", // White background on hover
                  color: "#000", // Black text color on hover
                  transform: "scale(1.05)"
                },
                "& .MuiListItemText-root": {
                  textAlign: "center"
                }
              }}
            >
              <ListItemText primary={text} sx={{ textAlign: "center", color: "inherit" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Updated AppBar with Blue Background */}
        <AppBar position="static" sx={{
          bgcolor: "#006699", // Solid Blue Background for AppBar
          boxShadow: "none",
          borderRadius: 2
        }}>
          <Toolbar>
            {/* Removed Menu Icon */}
            <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center", fontFamily: "Lora, serif" }}>
              Campwiz NXT Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Container sx={{ my: 4, textAlign: "center", bgcolor: "#fff", p: 4, borderRadius: 3, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
          {/* Updated font to Lora */}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontFamily: "Lora, serif",
              color: "#006699", // Blue color for the text
            }}
          >
            Welcome to Campwiz NXT
          </Typography>
          <Typography variant="subtitle1" color="gray" sx={{ fontFamily: "Lora, serif" }}>
            Taking jury experience to another level
          </Typography>
          {/* Updated Outlined Button with Blue Border and Text */}
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              borderColor: "#006699", // Blue border color
              color: "#006699", // Blue text color
              borderRadius: 30,
              transition: "0.3s",
              "&:hover": {
                bgcolor: "#006699", // Blue background on hover
                color: "#fff", // White text on hover
                transform: "scale(1.05)",
              },
            }}
          >
            Read Documentation
          </Button>
        </Container>

        {/* Active Campaigns */}
        <Container>
          {/* Updated font to Lora and color to #006699 */}
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", fontFamily: "Lora, serif", color: "#006699" }}>
            Active Campaigns
          </Typography>
          <Grid container spacing={3}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Card sx={{ borderRadius: 3, boxShadow: 3, transition: "0.3s", "&:hover": { boxShadow: 6, transform: "scale(1.05)" } }}>
                  <CardContent sx={{ textAlign: "center" }}>
                    {/* Updated font to Lora and color to black for Campaign Name */}
                    <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Lora, serif", color: campaignNameColor }}>
                      Campaign Name {item}
                    </Typography>
                    <Typography variant="body2" color="gray">Date: 2025-XX-XX</Typography>
                    {/* Updated Outlined Button with Blue Border and Text */}
                    <Button
                      variant="outlined"
                      sx={{
                        mt: 1,
                        borderColor: "#006699", // Blue border color
                        color: "#006699", // Blue text color
                        borderRadius: 30,
                        transition: "0.3s",
                        "&:hover": {
                          bgcolor: "#006699", // Blue background on hover
                          color: "#fff", // White text on hover
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      Go to Campaign
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
