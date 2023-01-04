/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Stack } from '@mui/material';
import axios from 'axios';
import RefreshIcon from '@mui/icons-material/Refresh';
import { smileEnvConfig } from '../smileRuntimeConfig';
import { htmlParameter1V2, html1V2, html2V2, html3V2, html4V2 } from './LinkHtml';
import Guide from './Guide';

const Connect = () => {
  const [token, setToken] = useState(null);
  const [host, setHost] = useState(() => `https://link-sandbox.${smileEnvConfig.BASE_HOST}/v1`);
  const [openiframe, setOpeniframe] = useState(false);
  const [guide, setGuide] = useState(true);

  const encode = encodeURI(`${smileEnvConfig.API_KEY}:${smileEnvConfig.API_SECRET}`);

  const SMILE_OPEN_API_SIGNATURE = btoa(encode);
  useEffect(async () => {
    await axios
      .post(
        `${smileEnvConfig.OPEN_API_HOST}/users`,
        {},
        {
          headers: {
            Authorization: `Basic ${SMILE_OPEN_API_SIGNATURE}`
          }
        }
      )
      .then((res) => {
        setToken(res.data.data.token.accessToken);
      });
    const receiveMessageFromIndex = (event) => {
      if (event !== undefined) {
        if (event.data === 'close') {
          setOpeniframe(false);
        }
      }
    };
    window.addEventListener('message', receiveMessageFromIndex, false);
  }, []);
  const phtml = `${
    htmlParameter1V2 + smileEnvConfig.BASE_HOST + html1V2 + token + html2V2 + host
  }${html4V2}`;

  return (
    <ConnectContainer>
      <BackgroundContent>
        <SmileContainer>
          {openiframe && (
            <iframe
              title="resg"
              srcDoc={phtml}
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              sandbox="allow-scripts allow-popups allow-forms"
              scrolling="auto"
            />
          )}
          {!openiframe && !guide && (
            <RestartContent>
              <div className="title">Link SSS Account</div>
              <div className="footerContent">
                <Stack>
                  <RefreshIcon style={{ fontSize: '40px' }} />
                </Stack>
                <Stack style={{ fontSize: '36px' }}>Start over</Stack>
                <Stack style={{ fontSize: '26px', color: 'rgba(0,0,0,.5)' }}>
                  Click to restart the application flow.
                </Stack>
                <Stack>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#00d563',
                      height: '45px',
                      marginTop: '20px',
                      textTransform: 'uppercase'
                    }}
                    onClick={async () => {
                      await axios
                        .post(
                          `${smileEnvConfig.OPEN_API_HOST}/users`,
                          {},
                          {
                            headers: {
                              Authorization: `Basic ${SMILE_OPEN_API_SIGNATURE}`
                            }
                          }
                        )
                        .then((res) => {
                          setToken(res.data.data.token.accessToken);
                          setGuide(true);
                        });
                    }}
                  >
                    Restart
                  </Button>
                </Stack>
              </div>
            </RestartContent>
          )}
          {guide && (
            <Guide
              onChangeGuide={() => {
                setGuide(!guide);
                setOpeniframe(!openiframe);
              }}
            />
          )}
        </SmileContainer>
      </BackgroundContent>
    </ConnectContainer>
  );
};

export default Connect;

const SmileContainer = styled.div`
  position: absolute;
  width: 374px;
  height: 100%;
  max-height: 666px;
  min-height: 500px;
  max-width: 426px;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  overflow-y: auto;

  @media screen and (max-width: 500px), screen and (max-aspect-ratio: 11 / 16) {
    width: 100vw;
    height: 100vh;
    height: calc(100vh - var(--vh-offset, 0px));
    max-width: none;
    max-height: none;
    border-radius: 0;
  }
`;

const ConnectContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  .footer {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    .footer_content {
      width: 100%;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

const ButtonContent = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  padding: 2.7rem 3rem 0px;
  font-size: 1.6rem;
  font-weight: 500;
  color: rgb(0, 0, 0);
  cursor: pointer;
`;

const BackgroundContent = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999999999;
  overflow: hidden;
  // background-color: rgba(3, 28, 16, 0.76);
  background-color: rgba(224, 224, 224, 0.9);
  user-select: none;

  @media screen and (max-width: 500px), screen and (max-aspect-ratio: 11 / 16) {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const RestartContent = styled.div`
  height: '100%';
  width: '100%';
  position: relative;
  .title {
    height: 50px;
    margin-top: 20px;
    width: 100%;
    text-align: center;
    line-height: 50px;
    color: #00d563;
    font-size: 30px;
    font-weight: 700;
  }
  .footerContent {
    position: fixed;
    bottom: 30px;
    width: 100%;
    padding: 0 20px;
  }
`;
