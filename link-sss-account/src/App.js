import { useState, useEffect, useCallback } from 'react';

import styled from 'styled-components';
// theme
import ThemeConfig from './theme';

// components
import Connect from './pages/Connect';

// ----------------------------------------------------------------------

export default function App() {
  const [pageSize, setPageSize] = useState(window.innerWidth);
  const pageResize = useCallback(() => {
    window.addEventListener('resize', () => {
      setPageSize(window.innerWidth);
    });
  }, []);
  useEffect(() => {
    pageResize();
  }, [pageResize, pageSize]);
  return (
    <ThemeConfig>
      <Connect />
    </ThemeConfig>
  );
}

const ContentStyle = styled.div`
  max-width: 480px;
  margin: auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px;
`;
