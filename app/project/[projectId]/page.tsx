import React from "react";
import {


  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { ArrowForward, Add } from "@mui/icons-material";
import Link from "next/link";



const campaignNameColor = "#000000"; // Black color for Campaign Name
type DashboardProps = {
  params: Promise< 
    {projectId : string}
  >
}

const Dashboard = async ({params}:DashboardProps) => {
  const {projectId} = await params
  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            my: 4,
            textAlign: "center",
            bgcolor: "#006699",
            p: 4,
            borderRadius: 3,
            boxShadow: 3,
            transition: "0.3s",
            "&:hover": { boxShadow: 6 },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              fontFamily: "Lora, serif",
              color: "#fff",
            }}
          >
            Welcome to Campwiz NXT
          </Typography>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{ fontFamily: "Roboto" }}
          >
            Taking jury experience to another level
          </Typography>
          <Button
            variant="outlined"
            sx={{
              mt: 2,
              borderColor: "white",
              color: "#006699",
              bgcolor: "white",
              borderRadius: 30,
              transition: "0.3s",
              "&:hover": {
                bgcolor: "#006699",
                color: "#fff",
                transform: "scale(1.05)",
              },
            }}
            endIcon={<ArrowForward />}
          >
            Read Documentation
          </Button>
        </Container>

        {/* Active Campaigns */}
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", fontFamily: "Lora, serif", color: "#006699" }}
            >
              Active Campaigns
            </Typography>
            <Link href= {`/project/${projectId}/new`}>
            <Button
              variant="contained"
              sx={{ bgcolor: "#006699", color: "#fff", borderRadius: 30 }}
              startIcon={<Add />}
            >
              Create Campaign
            </Button>
            </Link>
            
          </Box>
          <Grid container spacing={3}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: "0.3s",
                    "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ fontFamily: "Lora, serif", color: campaignNameColor }}
                    >
                      Campaign Name {item}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      Date: 2025-XX-XX
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        mt: 1,
                        borderColor: "#006699",
                        color: "#006699",
                        borderRadius: 30,
                        transition: "0.3s",
                        "&:hover": {
                          bgcolor: "#006699",
                          color: "#fff",
                          transform: "scale(1.05)",
                        },
                      }}
                      endIcon={<ArrowForward />}
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
