import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs', () => {
    let tabs: HTMLInputElement;
    beforeEach(() => {
        render(<Tabs name="Tabs" />);
        tabs = screen.getByRole('tablist');
    });
    test('renders the Tabs component', () => {
        expect(tabs).toBeInTheDocument();
    });
});
