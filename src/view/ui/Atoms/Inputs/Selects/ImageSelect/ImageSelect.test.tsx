import React from 'react';
import { render, screen } from '@testing-library/react';
import { ImageSelect } from './ImageSelect';

describe('ImageSelect', () => {
    let imageSelect: HTMLInputElement;
    beforeEach(() => {
        render(<ImageSelect />);
        imageSelect = screen.getByRole('button', { name: 'Editar imágenes' });
    });
    test('renders the ImageSelect component', () => {
        expect(imageSelect).toBeInTheDocument();
    });
});
