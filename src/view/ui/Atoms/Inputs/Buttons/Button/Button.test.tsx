import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Simple Button', () => {
    let button: HTMLButtonElement;
    beforeEach(() => {
        render(<Button type="button" variant="contained" text="Hello World" />);
        button = screen.getByRole('button', { name: 'Hello World' });
    });
    test('renders the button component', () => {
        expect(button).toBeInTheDocument();
    });
});
