import React from 'react';
import { render } from '@testing-library/react';
import { Switch } from './Switch';

describe('Button', () => {
    test('renders the select component', () => {
        render(<Switch name="test" handleChange={() => {}} value="" />);
    });
});
