import React from 'react';
import { render, screen } from '@testing-library/react';
import { LinkButton } from './LinkButton';

describe('LinkButton', () => {
    let linkButton: HTMLAnchorElement;
    beforeEach(() => {
        render(<LinkButton />);
        linkButton = screen.getByRole('link', { name: 'link', hidden: true });
    });
    test('renders the LinkButton component', () => {
        expect(linkButton).toBeInTheDocument();
    });
});
