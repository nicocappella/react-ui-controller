// import { Menu } from '@mui/icons-material';
// import { IconButton, styled, Toolbar, Typography } from '@mui/material';
// import { Button } from '../../../Atoms/Inputs/Buttons/Button';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Link from 'next/link';

// interface AppBarProps extends MuiAppBarProps {
//     open?: boolean;
// }

// const drawerWidth = 240;

// const AppBarSurface = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//     zIndex: theme.zIndex?.drawer + 1,
//     transition: theme.transitions?.create(['width', 'margin'], {
//         easing: theme.transitions?.easing.sharp,
//         duration: theme.transitions?.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions?.create(['width', 'margin'], {
//             easing: theme.transitions?.easing.sharp,
//             duration: theme.transitions?.duration.enteringScreen,
//         }),
//     }),
// }));

// interface IProps {
//     children: React.ReactNode[];
//     handleDrawerOpen: () => void;
//     open: boolean;
//     showMenu?: boolean;
// }

// const AppBar = (props: IProps) => {
//     return (
//         <AppBarSurface position="fixed" open={props.open}>
//             <Toolbar>{props.children}</Toolbar>
//         </AppBarSurface>
//     );
// };

// export default AppBar;
