import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('Little Lemon Testing', () => {
  test('Renders Little Lemon Home Page', () => {
    render(<App />);
    const screenElement = screen.getByText(/Copyright ©Little Lemon Restaurant/i);
    expect(screenElement).toBeInTheDocument();
  })

  test('Click the Reserve now button', () => {
    render(<App />);
       const navigateToBookingButton = screen.getByText('Reserve a Table');
      fireEvent.click(navigateToBookingButton);
      expect(window.location.pathname).toBe("/booking");
  });

});