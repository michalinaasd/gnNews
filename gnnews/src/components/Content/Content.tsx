import { Drawer, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { Country, getCountriesWithFlags } from "../../countryApiService";
import Header from "../Header/Header";
import CountryList from "./CountryList";
import NewsFeed from "./NewsFeed";

const Content = () => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [currentCountry, setCurrentCountry] = useState<string | null>(null);

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
    <Box sx={{ height: "100vh" }}>
      <Box sx={{ height: "11%" }}>
        <Header handleMenuClick={toggleDrawer(true)} />
      </Box>
      <Box display="flex" sx={{ height: "89%" }} overflow="hidden">
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <CountryList
            countries={countries}
            handleClick={(newCurrentCountry: string) =>
              setCurrentCountry(newCurrentCountry)
            }
          />
        </Drawer>
        <Box
          sx={{ "&::-webkit-scrollbar": { display: "none" } }}
          overflow="scroll"
        >
          <NewsFeed query={currentCountry} />
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
