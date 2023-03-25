import { Drawer, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Country, getCountriesWithFlags } from "../../countryApiService";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CountryList from "./CountryList";
import NewsFeed from "./NewsFeed";

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
      <Box sx={{ flexGrow: "1" }}>
        <Header handleMenuClick={toggleDrawer(true)} />
      </Box>
      <Box
        display="flex"
        sx={{
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        overflow="scroll"
      >
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <CountryList countries={countries} />
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
