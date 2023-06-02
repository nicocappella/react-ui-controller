import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
    let card: HTMLInputElement;
    beforeEach(() => {
        render(<Card />);
        card = screen.getByRole('figure', { name: 'card' });
    });
    test('renders the Card component', () => {
        expect(card).toBeInTheDocument();
    });
});
