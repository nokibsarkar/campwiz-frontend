"use server"
import * as React from 'react';
import PublicRunningCampaigns from '@/components/campaign/PublicCampaigns';
import HeroBanner from '@/components/home/HeroBanner';
import AssignedCampaigns from '@/components/campaign/AssignCampaigns';
import Footer from '@/components/home/Footer';
import { Typography } from '@mui/material';

const Dashboard = async () => {
  return (
    <>
      <HeroBanner />
      <AssignedCampaigns limit={5} />
      <div className="" style={{}}>
        <Typography variant="h4" sx={{
          textAlign: 'center', m: 3,
          backgroundImage: 'linear-gradient(to right, red 20%,  blue 80%)',
          color: 'transparent',
          backgroundClip: 'text'
        }}>
          Public Running Campaigns
        </Typography>
        <PublicRunningCampaigns limit={10} />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;