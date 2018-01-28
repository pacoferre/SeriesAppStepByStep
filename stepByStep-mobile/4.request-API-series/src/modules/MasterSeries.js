import React, { component, Component } from 'react';
import { View, Text } from 'react-native';

import series from '../../series.json'

import axios from 'axios';

class MasterSeries extends Component {

    constructor() {
        super();
        this.state = {
            series: []
        }
    }

    componentDidMount() {
        /*axios.get('https://seriesexample.azurewebsites.net/api/series')
            .then(response => this.setState({ series: response.data }));*/
            this.setState({ series: series })
    }

    render() {
        return(
            <View>
                <Text>{ this.series.lenght }</Text>
            </View>
        );
    }
}

export { MasterSeries }