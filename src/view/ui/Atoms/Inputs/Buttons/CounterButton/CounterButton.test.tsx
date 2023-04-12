import React from 'react';
import { render } from '@testing-library/react';
import { CounterButton } from './CounterButton';

describe('CounterButton', () => {
    test('renders the button component', () => {
        render(<CounterButton name="test" handleValue={() => {}} />);
    });
});
