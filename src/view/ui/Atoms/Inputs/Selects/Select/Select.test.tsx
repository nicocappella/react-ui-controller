import React from 'react';
import { render } from '@testing-library/react';
import { Select } from './Select';

describe('Button', () => {
    test('renders the select component', () => {
        render(<Select name="test" handleChange={() => {}} value="" />);
    });
});
