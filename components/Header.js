import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { ConnectWalletButton } from '@/components/ConnectWallet';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [governance, setGovernance] = useState(null);
  const router = useRouter();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenMenu(open);
  };

  const handleGovernanceMenuClick = (event) => {
    setGovernance(event.currentTarget);
  };

  const handleGovernanceMenuClose = () => {
    setGovernance(null);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height={{ md: '128px', sm: '120px', xs: '120px' }}
      maxWidth="1216px"
      marginX={{ lg: 'auto', md: '20px', xs: '20px' }}
    >
      <Box
        onClick={() => {
          router.push('/');
        }}
        sx={{ cursor: 'pointer' }}
        display="flex"
      >
        <Box
          width={{ md: '120px', sm: '120px', xs: '80px' }}
          component={'img'}
          src={'/icons/lxdao-logo.svg'}
        />
      </Box>
      <ConnectWalletButton />
    </Box>
  );
};

export default Header;
