
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import AnimalInput from '../components/AnimalInput';
import {vi} from 'vitest';

test('renders AnimalInput component', () => {
  render(<AnimalInput onAnimalChange={() => {}} />);
  
  const inputElement = screen.getByPlaceholderText(/Enter Animal Name/i);
  expect(inputElement).toBeInTheDocument();
  
  const buttonElement = screen.getByText(/Search/i);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onAnimalChange with correct value on button click', () => {
  const mockOnAnimalChange = vi.fn();
  render(<AnimalInput onAnimalChange={mockOnAnimalChange} />);
  
  const inputElement = screen.getByPlaceholderText(/Enter Animal Name/i);
  fireEvent.change(inputElement, { target: { value: 'Tiger' } });
  
  const buttonElement = screen.getByText(/Search/i);
  fireEvent.click(buttonElement);
  
  expect(mockOnAnimalChange).toHaveBeenCalledWith('Tiger');
});

test('calls onAnimalChange with correct value on Enter key press', () => {
  const mockOnAnimalChange = vi.fn();
  render(<AnimalInput onAnimalChange={mockOnAnimalChange} />);
  
  const inputElement = screen.getByPlaceholderText(/Enter Animal Name/i);
  fireEvent.change(inputElement, { target: { value: 'Lion' } });
  
  fireEvent.keyPress(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });
  
  expect(mockOnAnimalChange).toHaveBeenCalledWith('Lion');
});