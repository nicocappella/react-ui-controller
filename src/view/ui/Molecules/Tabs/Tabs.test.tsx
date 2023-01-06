import React from 'react';
import { render } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs', () => {
    test('renders the button component', () => {
        render(<Tabs />);
    });
});
