import React from 'react';
import { render, screen } from '@testing-library/react';
import { Menu } from './Menu';

describe('Menu', () => {
    let menu: HTMLInputElement;
    beforeEach(() => {
        render(<Menu open={true} />);
        menu = screen.getByRole('menu');
    });
    test('renders the Menu component', () => {
        expect(menu).toBeInTheDocument();
    });
});
