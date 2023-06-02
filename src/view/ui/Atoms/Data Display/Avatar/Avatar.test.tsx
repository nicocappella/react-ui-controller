import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
    let avatar: HTMLElement;
    beforeEach(() => {
        render(<Avatar name="Nicolas Cappella" />);
        avatar = screen.getByRole('figure', { name: 'Nicolas Cappella' });
    });
    test('renders the button component', () => {
        expect(avatar).toBeInTheDocument();
    });
});
