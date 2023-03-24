import { Button } from "@mui/material";
import { Country } from "../../countryApiService";

const CountryList = (props: any) => {
  const { countries, handleClick } = props;
  return (
    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
      {countries.map((country: Country) => (
        <li key={country.name.common}>
          <Button
            size="small"
            style={{ textTransform: "none", padding: "2px" }}
            onClick={() => handleClick(country.name.common)}
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              style={{ height: "16px" }}
            />
            <span style={{ marginLeft: "8px" }}>{country.name.common}</span>
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
