import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
    let select: HTMLInputElement;
    beforeEach(() => {
        render(<Select name="Select" />);
        select = screen.getByRole('button');
    });
    test('renders the Select component', () => {
        expect(select).toBeInTheDocument();
    });
});
