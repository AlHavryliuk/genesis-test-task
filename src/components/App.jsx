import DetailsPage from 'pages/Details/DetailsPage';
import HomePage from 'pages/Home/HomePage';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { select } from 'store/selectors/selectors';
import { ThemeProvider } from 'styled-components';
import { darkThemeVars, lightThemeVars } from 'utils/variables/themeVariables';
import { GlobalStyle } from './Custom/GlobalStyle/GlobalStyle';
import Header from './Header/Header';
import PictureInPicture from './PictureInPicture/PictureInPicture';

export const App = () => {

  const darkmode = useSelector(select.darkmode)

  return (
    <ThemeProvider theme={darkmode ? darkThemeVars : lightThemeVars}>
      <GlobalStyle />
      <Toaster />
      <Header />

      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
      <PictureInPicture />
    </ThemeProvider>
  );
};
