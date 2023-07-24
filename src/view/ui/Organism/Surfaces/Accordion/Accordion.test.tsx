import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion', () => {
    let avatar: HTMLElement;
    beforeEach(() => {
        render(<Accordion />);
    });
    test('renders the button component', () => {
        expect(avatar).toBeInTheDocument();
    });
});
