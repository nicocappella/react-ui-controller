import React from 'react';
import { Avatar as MuiAvatar, Badge, BadgeProps, Stack, StackProps, Typography } from '@mui/material';
import { Box } from '@mui/system';

export interface IAvatar {
    bgColor?: string;
    badge?: boolean;
    button?: boolean;
    direction?: 'row' | 'column';
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
    img?: string;
    name?: string;
    profileName?: string;
    /**
     * Small for App bars, Headers, etc.
     * Medium for Avatars used in lists, or content blocks.
     * Large When used in templates: Profile, Settings, etc.
     */
    size?: 'small' | 'medium' | 'large';
    supportingText?: string;
}

const getInitialLetters = (name: string) => {
    if (name) {
        const splitName = name.split(' ');
        const initialLetters = splitName.map((d) => d[0]).join('');
        return initialLetters;
    }
    return;
};

const Avatar = ({
    badge,
    bgColor = 'red',
    button = true,
    direction,
    handleClick,
    img,
    name,
    profileName,
    size,
    supportingText,
    ...props
}: IAvatar & StackProps) => {
    const sizeAvatar = size === 'small' ? 40 : size === 'medium' ? 48 : 56;
    const backgroundColor = name && !img ? bgColor : '';
    const imgAvatar = img ? img : undefined;
    const avatar = (
        <MuiAvatar
            sx={{
                width: sizeAvatar,
                height: sizeAvatar,
                transition: 'outline ease-in-out 250ms',
                backgroundColor,
                [':hover']: {
                    outline: 'solid 1px #ccc',
                    outlineOffset: '2px',
                },
            }}
            src={imgAvatar}
        >
            {name && getInitialLetters(name)}
        </MuiAvatar>
    );
    return (
        <Stack
            {...props}
            component="figure"
            title={name}
            direction={direction ? direction : 'row'}
            alignItems="center"
            spacing={1}
            sx={{ cursor: button ? 'pointer' : '' }}
            onClick={handleClick}
        >
            <Box>
                {badge ? (
                    <Badge
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: '#44b700',
                                color: '#44b700',
                                boxShadow: `0 0 0 2px #ccc`,
                                '&::after': {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    animation: 'ripple 1.2s infinite ease-in-out',
                                    border: '1px solid currentColor',
                                    content: '""',
                                },
                            },
                            '@keyframes ripple': {
                                '0%': {
                                    transform: 'scale(.8)',
                                    opacity: 1,
                                },
                                '100%': {
                                    transform: 'scale(2.4)',
                                    opacity: 0,
                                },
                            },
                        }}
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        {avatar}
                    </Badge>
                ) : (
                    avatar
                )}
            </Box>
            {profileName && (
                <Box component="div">
                    {profileName && <Typography>{profileName}</Typography>}
                    {supportingText && <Typography>{supportingText}</Typography>}
                </Box>
            )}
        </Stack>
    );
};

export { Avatar };
