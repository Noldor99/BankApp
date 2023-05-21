import React, { ReactNode } from 'react';
import Head from "next/head";
import { Box, Container, Toolbar, Typography } from '@mui/material';
import Header from '../components/Header';
import Bottom from '../components/Bottom';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps>
  = ({
    children,
    title,
    description,
    keywords
  }) => {
    return (
      <>
        <Head>
          <title>{title || 'BankApp'}</title>
          <meta name="description" content={
            `todoList.`
            + description} />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content={keywords || "Музыка"} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          maxWidth: { xs: '360px' }
        }}>
          <Header />
          <Box sx={{ flex: '1 0 auto' }}>
            {children}
          </Box>
          <Toolbar />
          <Bottom />
        
        </Container>
      </>
    );
  };

export default MainLayout;
