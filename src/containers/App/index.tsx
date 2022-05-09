import { DefaultRootState, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import HomePage from '@src/containers/HomePage/Loadable';
import MoviePage from '@src/containers/MoviePage/Loadable';
import TestPage from '@src/containers/TestPage';
import GlobalFonts from '@src/global-fonts';

import Header from '@components/Header';

import GlobalStyle from '@styles/global-styles';
import GlobalTemplate from '@styles/global-template';
import styled from '@styles/styled-components';
import { theme } from '@styles/styled-components';
import { ThemeProvider } from '@styles/styled-components';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = () => {
  const isLightTheme: boolean = useSelector(
    (state: DefaultRootState) => state.ui.isLightTheme,
  );
  return (
    <ThemeProvider theme={isLightTheme ? theme.lightTheme : theme.darkTheme}>
      <AppWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<MoviePage />} />
        </Routes>
        <GlobalStyle />
        <GlobalFonts />
        <GlobalTemplate />
      </AppWrapper>
    </ThemeProvider>
  );
};
export default App;
