import React from 'react';
import { Tooltip, IconButton as MuiIconButton, IconButtonProps } from '@mui/material';

interface IProps {
    children: React.ReactNode;
    color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
    edge?: 'start' | 'end' | false;
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
    size?: 'large' | 'medium' | 'small';
    /** Title of the tooltip */
    title?: string;
}

const IconButton = ({ children, color = 'default', edge = false, handleClick, size = 'medium', title, ...props }: IProps & IconButtonProps) => {
    const iconButton = (
        <MuiIconButton onClick={handleClick} size={size} edge={edge} color={color} {...props}>
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

export { IconButton };
