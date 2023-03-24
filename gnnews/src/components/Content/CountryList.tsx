import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Country } from "../../countryApiService";

const CountryList = (props: any) => {
  const { countries } = props;
  return (
    <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
      {countries.map((country: Country) => (
        <li key={country.name.common}>
          <Link
            to={`/country/${country.name.common}`}
            style={{ marginLeft: "8px" }}
          >
            <Button
              size="small"
              style={{ textTransform: "none", padding: "2px" }}
            >
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
