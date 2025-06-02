import * as React from 'react';
import PublicRunningCampaigns from '@/components/campaign/PublicCampaigns';
import HeroBanner from '@/components/home/HeroBanner';

import { LinearProgress, Typography } from '@mui/material';
import fetchSession from '@/server/session';
import Header from '@/components/home/Header';
import Footer from '@/components/home/Footer';
// import { Session } from '@/types/user/session';
const AssignedCampaigns = React.lazy(() => import('@/components/campaign/AssignCampaigns'));
import { uTranslation } from '@/i18n';

const Dashboard = async () => {
  const session = await fetchSession();
  const { t } = await uTranslation()
  return (
    <>
      <Header />
      <HeroBanner session={session} />
      {session && (
        <React.Suspense fallback={<LinearProgress sx={{ m: 2 }} />}>
          <AssignedCampaigns limit={5} />
        </React.Suspense>
      )}

      <div className="" style={{}}>
        <Typography variant="h4" sx={{
          textAlign: 'center', m: 3,
          // backgroundImage: 'linear-gradient(to right, red 20%,  blue 80%)',
          backgroundClip: 'text'
        }} color='error'>
          {t('home.publicRunningCampaigns')}
        </Typography>
        <PublicRunningCampaigns limit={10} />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;