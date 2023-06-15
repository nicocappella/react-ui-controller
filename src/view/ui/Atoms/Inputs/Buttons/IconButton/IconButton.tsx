import React from 'react';
import { Tooltip, IconButton as MuiIconButton, IconButtonProps } from '@mui/material';
import { TinyColor } from '@ctrl/tinycolor';

export interface IIconButton {
    background?: 'darken' | 'lighten';
    children: React.ReactNode;
    color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
    edge?: 'start' | 'end' | false;
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
    size?: 'large' | 'medium' | 'small';
    title?: string;
}

export const IconButton = ({
    background,
    children,
    color = 'default',
    edge = false,
    handleClick,
    size = 'medium',
    title,
    ...props
}: IIconButton & IconButtonProps) => {
    const ref = React.useRef<HTMLButtonElement>(null);
    const [brightenColor, setBrightenColor] = React.useState('transparent');
    React.useEffect(() => {
        if (ref.current) {
            if (background) {
                const color = window.getComputedStyle(ref.current.children[0]).getPropertyValue('color');
                const brigthenBacgkround = new TinyColor(color)[background](40).toString();
                console.log('background', brigthenBacgkround);
                setBrightenColor(brigthenBacgkround);
            }
        }
    }, [ref]);
    const iconButton = (
        <MuiIconButton {...props} ref={ref} onClick={handleClick} size={size} edge={edge} sx={{ backgroundColor: brightenColor }}>
            {children}
        </MuiIconButton>
    );
    return (
        <>
            {title && <Tooltip title={title}>{iconButton}</Tooltip>}
            {!title && iconButton}
        </>
    );
};
