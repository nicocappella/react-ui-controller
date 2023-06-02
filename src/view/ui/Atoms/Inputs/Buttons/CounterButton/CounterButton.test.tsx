import React from 'react';
import { render, screen } from '@testing-library/react';
import { CounterButton } from './CounterButton';

describe('CounterButton', () => {
    let counterButton: HTMLInputElement;
    beforeEach(() => {
        render(<CounterButton name="counter-button" />);
        counterButton = screen.getByRole('spinbutton', { name: '' });
    });
    test('renders the counter button component', () => {
        expect(counterButton).toBeInTheDocument();
    });
});
