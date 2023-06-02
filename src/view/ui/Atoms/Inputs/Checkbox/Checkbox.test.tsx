import React from 'react';
import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
    let checkbox: HTMLInputElement;
    beforeEach(() => {
        render(<Checkbox />);
        checkbox = screen.getByRole('checkbox', { name: 'checkbox' });
    });
    test('renders the Checkbox component', () => {
        expect(checkbox).toBeInTheDocument();
    });
});
