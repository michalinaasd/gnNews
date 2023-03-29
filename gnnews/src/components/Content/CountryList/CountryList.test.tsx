import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CountryList from "./CountryList";
import { Country } from "../../../services/countryApiService";
import { BrowserRouter } from "react-router-dom";

const mockCountries: Country[] = [
  {
    name: {
      official: "United States",
      nativeName: "United States",
      common: "United States",
    },
    flags: {
      alt: "/path/to/usa-flag.png",
      png: "/path/to/usa-flag.png",
      svg: "/path/to/usa-flag.png",
    },
  },
  {
    name: {
      common: "Canada",
      nativeName: "Canada",
      official: "Canada",
    },
    flags: {
      alt: "/path/to/canada-flag.png",
      svg: "/path/to/canada-flag.png",
      png: "/path/to/canada-flag.png",
    },
  },
];

describe("CountryList", () => {
  test("renders correctly", () => {
    render(<CountryList countries={[]} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("displays the correct countries", () => {
    render(
      <BrowserRouter>
        <CountryList countries={mockCountries} />
      </BrowserRouter>
    );
    const countryButtons = screen.getAllByRole("button");
    expect(countryButtons).toHaveLength(mockCountries.length);

    mockCountries.forEach((country, index) => {
      const countryButton = countryButtons[index];
      expect(countryButton).toHaveTextContent(country.name.common);
      expect(countryButton).toContainHTML(
        `<img src="${country.flags.png}" alt="${country.name.common}" style="height: 16px; margin-right: 5px;">`
      );
    });
  });

  test("calls onClick handler when a country button is clicked", () => {
    const onClickMock = jest.fn();
    render(
      <BrowserRouter>
        <CountryList countries={mockCountries} onClick={onClickMock} />
      </BrowserRouter>
    );
    const countryButton = screen.getByText(mockCountries[0].name.common);
    fireEvent.click(countryButton);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
