import { ExploreOutlined, Home, Login } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { Meta, StoryFn } from '@storybook/react';
import { Button, LinkButton } from '../../../Atoms';
import { Sidebar } from './Sidebar';
import Link from 'next/link';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Sidebar',
    component: Sidebar,
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

// export const NormalSidebar = Template.bind({});
// NormalSidebar.args = {
//     sideMenus: [
//         {
//             component: (
//                 <Box
//                     display="flex"
//                     flexDirection="row"
//                     alignItems="center"
//                     sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: '#ccc' } }}
//                 >
//                     <IconButton>
//                         <Home />
//                     </IconButton>
//                     <LinkButton text="Home" />
//                 </Box>
//             ),
//         },
//         {
//             component: (
//                 <Box
//                     display="flex"
//                     flexDirection="column"
//                     alignItems="center"
//                     sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: '#ccc' } }}
//                 >
//                     <IconButton>
//                         <ExploreOutlined />
//                     </IconButton>
//                     <LinkButton text="Get started" />
//                 </Box>
//             ),
//             layer: {
//                 components: [<Button text="Hola" variant="text" type="button" />, <Button text="Hola" variant="text" type="button" />],
//             },
//         },
//     ],
//     actions: [
//         <IconButton>
//             <Login />
//         </IconButton>,
//     ],
//     background: '#F3F6FC',
//     menuItems: [{ leadingText: 'Hey' }],
// };

export const StandardSidebar = Template.bind({});
StandardSidebar.args = {
    sideMenus: [
        {
            title: 'Home',
            menus: [
                {
                    text: 'Hola',
                    icon: <Home />,
                    expandable: true,
                    children: [
                        { text: 'Home 2', icon: <Home />, route: 'Home2' },
                        { text: 'Home 2', icon: <Home /> },
                    ],
                },
                {
                    text: 'Hola',
                    icon: <Home />,
                    expandable: true,
                    children: [
                        { text: 'Home 2', icon: <Home /> },
                        {
                            text: 'Home 2',
                            icon: <Home />,
                            expandable: true,
                            children: [
                                { text: 'Home 2', icon: <Home /> },
                                { text: 'Home 2', icon: <Home /> },
                            ],
                        },
                    ],
                },
                {
                    text: 'Hola 3',
                    icon: <Home />,
                },
            ],
        },
        {
            title: 'Home',
            menus: [
                {
                    text: 'Hola',
                    icon: <Home />,
                    expandable: true,
                    children: [
                        { text: 'Home 2', icon: <Home /> },
                        { text: 'Home 2', icon: <Home /> },
                    ],
                },
                {
                    text: 'Hola',
                    icon: <Home />,
                    expandable: true,
                    children: [
                        { text: 'Home 2', icon: <Home /> },
                        {
                            text: 'Home 2',
                            icon: <Home />,
                            expandable: true,
                            children: [
                                { text: 'Home 2', icon: <Home /> },
                                { text: 'Home 2', icon: <Home /> },
                            ],
                        },
                    ],
                },
                {
                    text: 'Hola 3',
                    icon: <Home />,
                },
            ],
        },
        {
            title: 'Home',
            menus: [
                {
                    text: 'Hola',
                    icon: <Home />,
                    expandable: true,
                    children: [
                        { text: 'Home 2', icon: <Home /> },
                        { text: 'Home 2', icon: <Home /> },
                    ],
                },
                {
                    text: 'Hola',
                    icon: <Home />,
                    expandable: true,
                    children: [
                        { text: 'Home 2', icon: <Home /> },
                        {
                            text: 'Home 2',
                            icon: <Home />,
                            expandable: true,
                            children: [
                                { text: 'Home 2', icon: <Home /> },
                                { text: 'Home 2', icon: <Home /> },
                            ],
                        },
                    ],
                },
                {
                    text: 'Hola 3',
                    icon: <Home />,
                },
            ],
        },
    ],
    // LinkComponent: Link,
};

export const LargeSidebar = Template.bind({});
LargeSidebar.args = {};
