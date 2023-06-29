import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader', () => {
    let formTitle: HTMLInputElement;
    beforeEach(() => {
        render(<Loader />);
        formTitle = screen.getByRole('heading');
    });
    test('renders the Loader component', () => {
        expect(formTitle).toBeInTheDocument();
    });
});
