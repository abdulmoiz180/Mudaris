import { Button } from '@mui/material';
import React from 'react';
import './getstartedButton.css';
import { useLanguage } from "../../../../globalContext/GlobalProvider";
export const GetStartedButton = ({ onButtonClick }) => {
  const { language, data, status, error } = useLanguage();
  if (!data) {
    return <div className="clr-white">Data is not available</div>;
  }
  return (
    <div className='GetStartedButtonDiv'>
      <Button className='GetStartedButton' onClick={onButtonClick}>
       {data.navRightBtns[4]}
      </Button>
    </div>
  );
};
