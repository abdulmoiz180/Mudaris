import { Button } from '@mui/material';
import React from 'react';
import './getstartedButton.css';

export const GetStartedButton = ({ onButtonClick }) => {
  return (
    <div className='GetStartedButtonDiv'>
      <Button className='GetStartedButton' onClick={onButtonClick}>
        Get Started
      </Button>
    </div>
  );
};
