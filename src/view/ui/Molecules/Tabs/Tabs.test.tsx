import React from 'react';
import { render } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs', () => {
    test('renders the button component', () => {
        render(
            <Tabs
                tabs={[
                    { label: '1', value: 0 },
                    { label: '2', value: 1 },
                ]}
                value={0}
            />,
        );
    });
});
