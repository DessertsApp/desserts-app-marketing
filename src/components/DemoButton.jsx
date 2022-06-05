import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';


const GoldButton = styled(Button)({
  color: 'white !important',
  backgroundColor: '#E7A04C !important',
  textTransform: 'none !important',
  fontWeight: '200 !important'
})

export default function DemoButton({ }) {
  // const icon = <FontAwesomeIcon icon={BakeryDiningIcon} />;
  return <GoldButton href='https://linktr.ee/dessertsapp' variant="contained" startIcon={<BakeryDiningIcon />}>
   Get started today
  </GoldButton>
}