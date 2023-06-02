import React from 'react';
import { render, screen } from '@testing-library/react';
import { DatePicker } from './DatePicker';

describe('DatePicker', () => {
    let datePicker: HTMLInputElement;
    beforeEach(() => {
        render(<DatePicker />);
        datePicker = screen.getByRole('textbox', { name: '' });
    });
    test('renders the DatePicker component', () => {
        expect(datePicker).toBeInTheDocument();
    });
});
