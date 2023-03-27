import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Country, getCountriesWithFlags } from "../../countryApiService";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CountryList from "./CountryList/CountryList";
import NewsFeed from "./NewsFeed";
import "./content.css";

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
    <Box sx={{ height: "100vh" }} display="flex" flexDirection="column">
      <Header handleMenuClick={toggleDrawer(true)} />
      <Box display="flex" height="100%" padding="5px" overflow="scroll">
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <CountryList countries={countries} onClick={toggleDrawer(false)} />
        </Drawer>
        <Routes>
          <Route path="/country/:countryName" element={<NewsFeed />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default Content;
