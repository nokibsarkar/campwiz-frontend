"use server"
import * as React from 'react';
import PublicRunningCampaigns from '@/components/campaign/PublicCampaigns';
import HeroBanner from '@/components/home/HeroBanner';

import { LinearProgress, Typography } from '@mui/material';
// import Footer from '@/components/home/Footer';
import fetchSession from '@/server/session';
import Header from '@/components/home/Header';
const AssignedCampaigns = React.lazy(() => import('@/components/campaign/AssignCampaigns'));
const Dashboard = async () => {
  const session = await fetchSession();
  return (
    <>
      <Header />
      <HeroBanner session={session} />
      {session !== null && <React.Suspense fallback={<LinearProgress sx={{ m: 2 }} />}>
        <AssignedCampaigns limit={5} />
      </React.Suspense>
      }

      <div className="" style={{}}>
        <Typography variant="h4" sx={{
          textAlign: 'center', m: 3,
          // backgroundImage: 'linear-gradient(to right, red 20%,  blue 80%)',
          backgroundClip: 'text'
        }} color='error'>
          Public Running Campaigns
        </Typography>
        <PublicRunningCampaigns limit={10} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;