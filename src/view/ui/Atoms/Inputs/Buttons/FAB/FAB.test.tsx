import React from 'react';
import { render, screen } from '@testing-library/react';
import { FAB } from './FAB';

describe('FAB', () => {
    let extendedFab: HTMLInputElement;
    beforeEach(() => {
        render(<FAB size="small" />);
        extendedFab = screen.getByRole('button', { name: 'FAB' });
    });
    test('renders the FAB component', () => {
        expect(extendedFab).toBeInTheDocument();
    });
});
