import React from 'react';
import { SerieCard } from './seriesGrid/SerieCard';
import seriesGridStyles from './seriesGrid.scss';

const SeriesGrid = ({ series }) => 
    <ul className={ seriesGridStyles.seriesGrid }>
        {
            series.map(serie => <SerieCard key={ serie.title } serie={ serie }/>)
        }
    </ul>

export { SeriesGrid }