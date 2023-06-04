import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormTitle } from './FormTitle';

describe('FormTitle', () => {
    let formTitle: HTMLInputElement;
    beforeEach(() => {
        render(<FormTitle />);
        formTitle = screen.getByRole('heading');
    });
    test('renders the FormTitle component', () => {
        expect(formTitle).toBeInTheDocument();
    });
});
