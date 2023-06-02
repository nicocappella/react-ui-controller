import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from './Form';

describe('Form', () => {
    let form: HTMLInputElement;
    beforeEach(() => {
        render(<Form />);
        form = screen.getByRole('form');
    });
    test('renders the Form component', () => {
        expect(form).toBeInTheDocument();
    });
});
