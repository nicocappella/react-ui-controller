import React from 'react';
import { render, screen } from '@testing-library/react';
import { Autocomplete } from './Autocomplete';

describe('Autocomplete', () => {
    let autocomplete: HTMLInputElement;
    beforeEach(() => {
        render(<Autocomplete name="autocomplete" />);
        autocomplete = screen.getByRole('combobox');
    });
    test('renders the Autocomplete component', () => {
        expect(autocomplete).toBeInTheDocument();
    });
});
