/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const Guide = ({ onChangeGuide }) => {
  useEffect(async () => {}, []);

  return (
    <ConnectContainer>
      <SmileLogoContent>
        <img src="https://cdn.smileapi.io/image/smile/v20221116172800/NiceLoan.png" alt="" />
      </SmileLogoContent>
      <TextContent>
        NICELOAN has partnered with Smile to link your social security account to verify your
        income.
      </TextContent>
      <StartButtonContent>
        <Button
          variant="contained"
          style={{
            backgroundColor: '#00d563',
            height: '45px',
            width: '90%',
            textTransform: 'uppercase'
          }}
          className="button"
          onClick={() => onChangeGuide()}
        >
          Start
        </Button>
      </StartButtonContent>
    </ConnectContainer>
  );
};

export default Guide;

const ConnectContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const StartButtonContent = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SmileLogoContent = styled.div`
  margin-bottom: 50px;
  img {
    display: block;
    height: 100px;
  }
`;

Guide.propTypes = {
  onChangeGuide: PropTypes.func.isRequired
};
