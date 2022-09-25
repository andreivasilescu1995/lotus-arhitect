import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styles from "../styles/About.module.css";

export default function about() {
    return (
        <Box p={5}>
            <Typography className={styles.title} variant="h3">Who we are?</Typography>
            <Paper elevation={5} className={styles.aboutItemContainer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere orci felis, vel sollicitudin enim scelerisque et. Praesent feugiat sit amet orci in lobortis. Nulla facilisi. Donec facilisis, urna et pellentesque suscipit, velit lorem vulputate nibh, et scelerisque erat dolor vel odio. Suspendisse eleifend purus vitae dui sodales tempor. Aenean dignissim venenatis justo, eget mattis felis condimentum id. Ut sed interdum purus. Mauris purus nisl, elementum quis urna vitae, ornare porta purus. Donec venenatis lectus massa, vitae aliquam dui laoreet lobortis. Praesent fringilla tristique sem sed gravida. Cras tincidunt risus at nisl tempor, id tristique diam euismod.

                Nunc ac ligula non lectus pharetra rutrum a sed ante. Vestibulum luctus venenatis volutpat. Nulla sodales volutpat mattis. Donec vestibulum augue diam, quis ornare lectus venenatis sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ultrices dolor ac justo scelerisque, ac varius ante convallis. Proin sit amet lectus libero. Pellentesque venenatis quam suscipit, malesuada dolor ac, ultricies metus. Maecenas mattis non ipsum non pretium.

                Phasellus id turpis a nisi congue placerat et nec mauris. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque pellentesque vel mi sed mattis. Mauris at ante ac purus consectetur euismod. Vivamus eu tortor mauris. Nullam fringilla fermentum lorem nec rhoncus. Morbi congue nunc eget diam bibendum, quis lacinia diam congue. Aenean vulputate elit metus, ac dictum ante viverra ac.
            </Paper>

            <Typography className={styles.title} variant="h3">What we do?</Typography>
            <Paper elevation={5} className={styles.aboutItemContainer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere orci felis, vel sollicitudin enim scelerisque et. Praesent feugiat sit amet orci in lobortis. Nulla facilisi. Donec facilisis, urna et pellentesque suscipit, velit lorem vulputate nibh, et scelerisque erat dolor vel odio. Suspendisse eleifend purus vitae dui sodales tempor. Aenean dignissim venenatis justo, eget mattis felis condimentum id. Ut sed interdum purus. Mauris purus nisl, elementum quis urna vitae, ornare porta purus. Donec venenatis lectus massa, vitae aliquam dui laoreet lobortis. Praesent fringilla tristique sem sed gravida. Cras tincidunt risus at nisl tempor, id tristique diam euismod.

                Nunc ac ligula non lectus pharetra rutrum a sed ante. Vestibulum luctus venenatis volutpat. Nulla sodales volutpat mattis. Donec vestibulum augue diam, quis ornare lectus venenatis sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ultrices dolor ac justo scelerisque, ac varius ante convallis. Proin sit amet lectus libero. Pellentesque venenatis quam suscipit, malesuada dolor ac, ultricies metus. Maecenas mattis non ipsum non pretium.

                Phasellus id turpis a nisi congue placerat et nec mauris. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque pellentesque vel mi sed mattis. Mauris at ante ac purus consectetur euismod. Vivamus eu tortor mauris. Nullam fringilla fermentum lorem nec rhoncus. Morbi congue nunc eget diam bibendum, quis lacinia diam congue. Aenean vulputate elit metus, ac dictum ante viverra ac.
            </Paper>
        </Box>
    )
}
