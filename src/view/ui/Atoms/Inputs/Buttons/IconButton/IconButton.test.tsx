import React from 'react';
import { render, screen } from '@testing-library/react';
import { IconButton } from './IconButton';
import { Edit } from '@mui/icons-material';

describe('IconButton', () => {
    let iconButton: HTMLInputElement;
    beforeEach(() => {
        render(
            <IconButton size="small">
                <Edit />
            </IconButton>,
        );
        iconButton = screen.getByRole('button', { name: '' });
    });
    test('renders the IconButton component', () => {
        expect(iconButton).toBeInTheDocument();
    });
});
