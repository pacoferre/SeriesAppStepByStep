import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import axios from 'axios';

import { Info } from './detailSerie/Info';
import { Seasons } from './detailSerie/Seasons';

class DetailSerie extends Component {
    constructor() {
        super()
        this.state = {
            serie: {
                actors: [],
                image: {},
                seassons: []
            }
        }
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params;
        axios.get(`https://seriesexample.azurewebsites.net/api/series/${id}`)
            .then(response => this.setState({ serie: response.data }));
    }

    render() {
        return(
            <ScrollView>
                <Info serie={ this.state.serie } />
                <Seasons seasons={ this.state.serie.seassons } />
            </ScrollView>
        );
    }
}

export { DetailSerie }