import React from 'react';
import { render } from '@testing-library/react';
import { ExtendedFAB } from './ExtendedFAB';
import { Color } from '../../../../types';

describe('ExtendedFAB', () => {
    test('renders the button component', () => {
        render(<ExtendedFAB color={Color.DEFAULT} text="Extended FAB" />);
    });
});
