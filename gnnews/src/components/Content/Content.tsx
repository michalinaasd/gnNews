import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import {
  Country,
  getCountriesWithFlags,
} from "../../services/countryApiService";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import CountryList from "./CountryList/CountryList";
import NewsFeed from "./NewsFeed/NewsFeed";
import "./content.css";
import { Provider } from "react-redux";
import { store } from "../../state/store";
import { Routes, Route } from "react-router-dom";
import HelloPage from "./HelloPage";

const Content = () => {
  const [countries, setCountries] = useState<Country[] | null>(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => () => {
    setIsDrawerOpen(isOpen);
  };

  useEffect(() => {
    const fetchCountriesData = async () => {
      const data = await getCountriesWithFlags();
      data && setCountries(data.slice(13, 31));
    };
    fetchCountriesData();
  }, []);

  if (!countries) {
    return <p>Loading...</p>;
  }

  return (
    <Provider store={store}>
      <Box sx={{ height: "100vh" }} display="flex" flexDirection="column">
        <Header handleMenuClick={toggleDrawer(true)} />
        <Box className="mainContent">
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <CountryList countries={countries} onClick={toggleDrawer(false)} />
          </Drawer>
          <Routes>
            <Route path="/country/:countryName" element={<NewsFeed />} />
            <Route path="/" element={<HelloPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Provider>
  );
};

export default Content;
