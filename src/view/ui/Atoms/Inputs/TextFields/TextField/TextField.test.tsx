import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField', () => {
    let currencyTextField: HTMLInputElement;
    beforeEach(() => {
        render(<TextField name="TextField" />);
        currencyTextField = screen.getByRole('textbox');
    });
    test('renders the TextField component', () => {
        expect(currencyTextField).toBeInTheDocument();
    });
});
