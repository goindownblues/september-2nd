import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const StyledImage = styled.img({
    maxWidth: '100%'
});

export default function ProductDetail() {
    const { state } = useLocation();
    const { name, price, imgUrl } = state;

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <StyledImage src={imgUrl} alt="product" />
                </Grid>
                <Grid item xs={6}>
                    <Typography color="textPrimary">{name}</Typography>
                    <Typography color="textPrimary">{price}</Typography>
                </Grid>
            </Grid>
        </div>
    );
}