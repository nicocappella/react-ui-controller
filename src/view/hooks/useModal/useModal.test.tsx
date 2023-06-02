import { renderHook, act, waitFor } from '@testing-library/react';
import { ModalReturn, useModal } from './useModal';

describe('usModal Hook', () => {
    test('intiate modal', async () => {
        const { result, rerender } = renderHook(() => useModal());
        await act(async () => result.current.openModal());
        expect(result.current.modal).toBeTruthy();
        await act(async () => result.current.closeModal());
        expect(result.current.modal).toBeFalsy();
    });
});
