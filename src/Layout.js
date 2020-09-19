import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: theme.palette.background.paper
    }
}));

export default function Layout({ children }) {
    const classes = useStyles();
    return (<div className={classes.root}>{children}</div>);
}