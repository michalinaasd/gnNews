import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Country } from "../../../services/countryApiService";
import "./countryList.css";

interface CountryListProps {
  countries: Country[];
  onClick?: () => void;
}

const CountryList = ({ countries, onClick }: CountryListProps) => {
  return (
    <ul className="country-list">
      {countries.map((country: Country) => (
        <li key={country.name.common}>
          <Link to={`/country/${country.name.common}`}>
            <Button size="small" className="country-button" onClick={onClick}>
              <img
                src={country.flags.png}
                alt={country.name.common}
                style={{ height: "16px", marginRight: "5px" }}
              />

              {country.name.common}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
