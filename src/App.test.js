import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Reports from './components/Reports'

const mockData = [{
  "game": "The Last of Us 2",
  "price": 928,
  "cost": 692,
  "units": 53
}];

test('renders title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Sales report/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders loading gif", () => {
  const { getByAltText } = render(<App />);
  const imageTag = getByAltText(/Please wait/i);
  expect(imageTag).toBeInTheDocument();
});

test("renders reports title", () => {
  const {getByText} = render(<Reports data={mockData}/>)
  const titleTag = getByText(/This week we sold a total of 53 games/i);
  expect(titleTag).toBeInTheDocument();
})