import React from 'react';
import { render, screen } from '@testing-library/react';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
    let breacrumb: HTMLInputElement;
    beforeEach(() => {
        render(<Breadcrumb name="Breadcrumb" />);
        breacrumb = screen.getByRole('navigation');
    });
    test('renders the Breadcrumb component', () => {
        expect(breacrumb).toBeInTheDocument();
    });
});
