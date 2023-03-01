import React from 'react';
import { render } from '@testing-library/react';
import { LinkButton } from './LinkButton';

describe('LinkButton', () => {
    test('renders the link button component', () => {
        render(<LinkButton text="Hello World" color="primary" />);
    });
});
