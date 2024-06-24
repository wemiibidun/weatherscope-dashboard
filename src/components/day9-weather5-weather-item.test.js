import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherItem from './day9-weather5-weather-item';

describe('WeatherItem component', () => {
    test('renders weather entries correctly', () => {
        // Mock data simulating API response
        const mockData = {
          list: [
            { dt: 1624442400, main: { temp: 25, feels_like: 27 }, wind: { speed: 3 } },
            { dt: 1624528800, main: { temp: 28, feels_like: 30 }, wind: { speed: 4 } },
            { dt: 1624615200, main: { temp: 23, feels_like: 25 }, wind: { speed: 5 } },
            { dt: 1624701600, main: { temp: 26, feels_like: 28 }, wind: { speed: 6 } },
            { dt: 1624788000, main: { temp: 24, feels_like: 26 }, wind: { speed: 7 } },
          ],
        };
    
        render(<WeatherItem data={mockData} />);
        
        // Verify the content of the first weather entry
        const tempText = /Temperature:\s*25°C/; // Match "Temperature: " followed by any number and "C"
        const feelsLikeText = /Feels Like:\s*27°C/;  // Match "Feels Like: " followed by any number and "C"
        const windSpeedText = /Wind Speed:\s*3/; // Match "Wind Speed: " followed by any number

        expect(screen.getByText(tempText)).toBeInTheDocument();
        expect(screen.getByText(feelsLikeText)).toBeInTheDocument();
        expect(screen.getByText(windSpeedText)).toBeInTheDocument();
      });
});