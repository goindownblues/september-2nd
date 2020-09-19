import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ProductThumbnail from '../components/ProductThumbnail';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(7),
    }
}));

const products = [
    {
        name: "고구마",
        price: "5000",
        imgUrl:
            "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2361853557BEA99F17",
        id: "36f35f26-ee40-4407-b6d1-63b5fb703fca",
    },
    {
        name: "곤약 떡볶이",
        price: "100000",
        imgUrl: "https://t1.daumcdn.net/cfile/tistory/999242495D351E021F",
        id: "92ba4f3f-6a1a-41f6-a024-70e244fc1e58",
    },
];

export default function ProductList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {products.map((props, i) => (
                    <Grid key={i} item xs={12} lg={4}>
                        <Link
                            to={{
                                pathname: "/product",
                                state: props
                            }}>
                            <ProductThumbnail  {...props} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div >
    )
}