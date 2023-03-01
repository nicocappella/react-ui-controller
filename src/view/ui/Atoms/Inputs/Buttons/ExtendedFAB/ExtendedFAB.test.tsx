import React from 'react';
import { render } from '@testing-library/react';
import { ExtendedFAB } from './ExtendedFAB';

describe('ExtendedFAB', () => {
    test('renders the button component', () => {
        render(<ExtendedFAB color="default" text="Extended FAB" />);
    });
});
