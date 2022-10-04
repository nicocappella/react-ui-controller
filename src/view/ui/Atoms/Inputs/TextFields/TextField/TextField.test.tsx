import React from 'react';
import { render } from '@testing-library/react';
import { TextField, Types } from './TextField';

describe('TextField', () => {
    test('renders the button component', () => {
        render(<TextField label="TextField" name="textfield" value={''} type={Types.Text} handleChange={() => {}} />);
    });
});
