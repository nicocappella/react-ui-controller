import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dialog } from './Dialog';

describe('Dialog', () => {
    let dialog: HTMLInputElement;
    beforeEach(() => {
        render(<Dialog />);
        dialog = screen.getByRole('heading', { hidden: true });
    });
    test('renders the Dialog component', () => {
        expect(dialog).toBeInTheDocument();
    });
});
