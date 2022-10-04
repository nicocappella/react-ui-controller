import React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
    test('renders the button component', () => {
        render(<Avatar />);
    });
});
