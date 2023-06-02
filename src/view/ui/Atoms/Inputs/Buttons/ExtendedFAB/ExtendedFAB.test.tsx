import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExtendedFAB } from './ExtendedFAB';

describe('ExtendedFAB', () => {
    let extendedFab: HTMLInputElement;
    beforeEach(() => {
        render(<ExtendedFAB text="" color="primary" />);
        extendedFab = screen.getByRole('button', { name: 'FAB' });
    });
    test('renders the Extended FAB component', () => {
        expect(extendedFab).toBeInTheDocument();
    });
});
