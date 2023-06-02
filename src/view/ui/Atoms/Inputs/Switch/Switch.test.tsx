import React from 'react';
import { render, screen } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch', () => {
    let extendedFab: HTMLInputElement;
    beforeEach(() => {
        render(<Switch />);
        extendedFab = screen.getByRole('checkbox', { name: '' });
    });
    test('renders the Switch component', () => {
        expect(extendedFab).toBeInTheDocument();
    });
});
