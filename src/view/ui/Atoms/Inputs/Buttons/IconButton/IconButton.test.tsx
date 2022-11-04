import React from 'react';
import { render } from '@testing-library/react';
import { IconButton } from './IconButton';
import { Search } from '@mui/icons-material';

describe('IconButton', () => {
    test('renders the icon button component', () => {
        render(
            <IconButton color="primary">
                <Search />
            </IconButton>,
        );
    });
});
