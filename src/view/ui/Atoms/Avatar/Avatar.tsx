import React from 'react';
import { Avatar as MuiAvatar, Badge, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface IAvatar {
    img?: string;
    name?: string;
    /**
     * Small for App bars, Headers, etc.
     * Medium for Avatars used in lists, or content blocks.
     * Large When used in templates: Profile, Settings, etc.
     */
    size: 'small' | 'medium' | 'large';
    button?: boolean;
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
    badge?: boolean;
    profileName?: string;
    supportingText?: string;
    direction?: 'row' | 'column';
}

const Avatar = (props: IAvatar) => {
    const size = props.size === 'small' ? 40 : props.size === 'medium' ? 48 : 56;
    const backgroundColor = props.name && !props.img ? 'red' : '';
    const img = props.img ? props.img : undefined;
    const avatar = (
        <MuiAvatar sx={{ width: size, height: size, backgroundColor }} src={img}>
            {props.name}
        </MuiAvatar>
    );
    return (
        <Stack
            direction={props.direction ? props.direction : 'row'}
            alignItems="center"
            spacing={1}
            sx={{ cursor: props.button ? 'pointer' : '' }}
            onClick={props.handleClick}
        >
            <Box>
                {props.badge ? (
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
            {props.profileName && (
                <Box component="div">
                    {props.profileName && <Typography>{props.profileName}</Typography>}
                    {props.supportingText && <Typography>{props.supportingText}</Typography>}
                </Box>
            )}
        </Stack>
    );
};

export { Avatar };
