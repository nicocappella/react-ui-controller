import React from 'react';
import { render } from '@testing-library/react';
import { ImageSelect } from './ImageSelect';

describe('Button', () => {
    test('renders the select component', () => {
        render(<ImageSelect name="test" handleChange={() => {}} value="" />);
    });
});
