import { useSelector } from 'react-redux';
import Header from './Header/Header';
import HomePage from 'pages/Home/HomePage';
import { ThemeProvider } from 'styled-components';
import { select } from 'store/selectors/selectors';
import { darkThemeVars, lightThemeVars } from 'utils/variables/themeVariables';
import { GlobalStyle } from './Custom/GlobalStyle/GlobalStyle';
import { Route, Routes } from 'react-router-dom';
import DetailsPage from 'pages/Details/DetailsPage';

export const App = () => {

  const darkmode = useSelector(select.darkmode)

  return (
    <ThemeProvider theme={darkmode ? darkThemeVars : lightThemeVars}>
      <GlobalStyle />
      <Header />

      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
    
      </Routes>
    </ThemeProvider>
  );
};
