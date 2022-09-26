import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { projects } from "../constants";
import HoverElement from '../components/HoverElement';

export default function Projects() {
    return (
        <Box p={1}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {projects.map((item) => (
                    <ImageListItem key={item.img}>
                        <HoverElement project={item} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}
